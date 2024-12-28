import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { SAMPLE_PARAGRAPHS, EXTRA_PARAGRAPHS } from "./data";
import InputBar from "./components/InputBar";
import RowsContainer from "./components/RowsContainer";
import { Option } from "./types";

function App() {
  const [idea, setIdea] = useState("");
  const [rows, setRows] = useState<Option[][]>([]); // Each row is an array of Option objects
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const rowsContainerRef = useRef<HTMLDivElement | null>(null);
  const extraIndexRef = useRef(0);

  const handleKeyDownOnInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
      const nextOptions = EXTRA_PARAGRAPHS.slice(
        extraIndexRef.current,
        extraIndexRef.current + 3
      );

      extraIndexRef.current += 3;
      if (extraIndexRef.current >= EXTRA_PARAGRAPHS.length) {
        extraIndexRef.current = 0;
      }

      copy[lastRowIndex] = [...copy[lastRowIndex], ...nextOptions];
      return copy;
    });
  };

  const handleSelectOption = (rowIndex: number, optionIndex: number) => {
    setSelectedIndices((prev) => {
      const updated = [...prev];
      updated[rowIndex] = optionIndex;
      return updated;
    });
    createNextRow();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const lastRowIndex = rows.length - 1;

    if (lastRowIndex < 0) return;

    const lastRow = rows[lastRowIndex];

    if (e.key === " ") {
      e.preventDefault(); // Prevent scrolling when pressing space
      handleGenerateMoreOptions();
    } else if (/^[1-3]$/.test(e.key)) {
      const optionIndex = parseInt(e.key, 10) - 1; // Convert '1', '2', '3' to 0, 1, 2
      if (optionIndex < lastRow.length) {
        handleSelectOption(lastRowIndex, optionIndex); // Select the corresponding option
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [rows]);

  return (
    <div className="container">
      <InputBar
        value={idea}
        onChange={(value) => setIdea(value)}
        onSubmit={() => {
          setRows([SAMPLE_PARAGRAPHS]);
          setSelectedIndices([-1]);
        }}
      />
      <RowsContainer
        rows={rows}
        selectedIndices={selectedIndices}
        onSelectOption={handleSelectOption}
        onGenerateMoreOptions={handleGenerateMoreOptions}
        containerRef={rowsContainerRef}
      />
    </div>
  );
}

export default App;
