import React from "react";
import { Option } from "../types";

interface OptionBoxProps {
  option: Option;
  isSelected: boolean;
  onClick: () => void;
}

const OptionBox: React.FC<OptionBoxProps> = ({ option, isSelected, onClick }) => {
  return (
    <div
      className={`option-box ${isSelected ? "highlighted" : ""}`}
      onClick={onClick}
    >
      <p>{option.text}</p>
      <small>{option.timestamp}</small>
    </div>
  );
};

export default OptionBox;
