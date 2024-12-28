import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from "react";
import "./App.css";
import { SAMPLE_PARAGRAPHS, EXTRA_PARAGRAPHS } from "./data";
import InputBar from "./components/InputBar";
import RowsContainer from "./components/RowsContainer";
function App() {
    const [idea, setIdea] = useState("");
    const [rows, setRows] = useState([]); // Each row is an array of Option objects
    const [selectedIndices, setSelectedIndices] = useState([]);
    const rowsContainerRef = useRef(null);
    const extraIndexRef = useRef(0);
    const handleKeyDownOnInput = (e) => {
        if (e.key === "Enter" && idea.trim()) {
            setRows([SAMPLE_PARAGRAPHS]);
            setSelectedIndices([-1]);
            e.currentTarget.blur();
        }
    };
    const createNextRow = () => {
        setRows((prev) => [...prev, SAMPLE_PARAGRAPHS]);
        setSelectedIndices((prev) => [...prev, -1]);
    };
    const handleGenerateMoreOptions = () => {
        setRows((prev) => {
            const copy = [...prev];
            const lastRowIndex = copy.length - 1;
            const nextOptions = EXTRA_PARAGRAPHS.slice(extraIndexRef.current, extraIndexRef.current + 3);
            extraIndexRef.current += 3;
            if (extraIndexRef.current >= EXTRA_PARAGRAPHS.length) {
                extraIndexRef.current = 0;
            }
            copy[lastRowIndex] = [...copy[lastRowIndex], ...nextOptions];
            return copy;
        });
    };
    const handleSelectOption = (rowIndex, optionIndex) => {
        setSelectedIndices((prev) => {
            const updated = [...prev];
            updated[rowIndex] = optionIndex;
            return updated;
        });
        createNextRow();
    };
    return (_jsxs("div", { className: "container", children: [_jsx(InputBar, { value: idea, onChange: (value) => setIdea(value), onSubmit: () => {
                    setRows([SAMPLE_PARAGRAPHS]);
                    setSelectedIndices([-1]);
                } }), _jsx(RowsContainer, { rows: rows, selectedIndices: selectedIndices, onSelectOption: handleSelectOption, onGenerateMoreOptions: handleGenerateMoreOptions, containerRef: rowsContainerRef })] }));
}
export default App;
