import React from "react";
import OptionBox from "./OptionBox";
import { Option } from "../types";

interface RowProps {
    rowIndex: number;
    options: Option[]; // Use Option instead of string
    selectedIndex: number;
    onSelectOption: (optionIndex: number) => void;
    onGenerateMoreOptions: () => void;
  }

const Row: React.FC<RowProps> = ({
  options,
  selectedIndex,
  onSelectOption,
  onGenerateMoreOptions,
}) => {
  return (
    <div className="row">
      {options.map((option, optIndex) => (
        <OptionBox
          key={optIndex}
          option={option}
          isSelected={selectedIndex === optIndex}
          onClick={() => onSelectOption(optIndex)}
        />
      ))}
      <div className="plus-box" onClick={onGenerateMoreOptions}>
        ...
      </div>
    </div>
  );
};

export default Row;
