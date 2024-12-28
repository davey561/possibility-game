import React from "react";

interface InputBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const InputBar: React.FC<InputBarProps> = ({ value, onChange, onSubmit }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim()) {
      onSubmit();
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Type your main idea, press Enter..."
      className="text-input"
    />
  );
};

export default InputBar;
