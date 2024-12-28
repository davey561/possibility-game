import React, { RefObject } from "react";
import Row from "./Row";
import { Option } from "../types";

interface RowsContainerProps {
    rows: Option[][]; // Use Option instead of string
    selectedIndices: number[];
    onSelectOption: (rowIndex: number, optionIndex: number) => void;
    onGenerateMoreOptions: () => void;
    containerRef: React.RefObject<HTMLDivElement>;
  }

const RowsContainer: React.FC<RowsContainerProps> = ({
  rows,
  selectedIndices,
  onSelectOption,
  onGenerateMoreOptions,
  containerRef,
}) => {
  return (
    <div className="rows-container" ref={containerRef}>
      {rows.map((row, rowIndex) => (
        <Row
          key={rowIndex}
          rowIndex={rowIndex}
          options={row}
          selectedIndex={selectedIndices[rowIndex]}
          onSelectOption={(optionIndex:number) => onSelectOption(rowIndex, optionIndex)}
          onGenerateMoreOptions={onGenerateMoreOptions}
        />
      ))}
    </div>
  );
};

export default RowsContainer;
