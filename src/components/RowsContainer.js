import { jsx as _jsx } from "react/jsx-runtime";
import Row from "./Row";
const RowsContainer = ({ rows, selectedIndices, onSelectOption, onGenerateMoreOptions, containerRef, }) => {
    return (_jsx("div", { className: "rows-container", ref: containerRef, children: rows.map((row, rowIndex) => (_jsx(Row, { rowIndex: rowIndex, options: row, selectedIndex: selectedIndices[rowIndex], onSelectOption: (optionIndex) => onSelectOption(rowIndex, optionIndex), onGenerateMoreOptions: onGenerateMoreOptions }, rowIndex))) }));
};
export default RowsContainer;
