import React, { useRef } from "react";

interface InputBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const InputBar: React.FC<InputBarProps> = ({ value, onChange, onSubmit }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim()) {
      onSubmit();
      if (inputRef.current) {
        inputRef.current.blur(); // Remove focus from the input
      }
    }
  };

  return (
    <input
      ref={inputRef} // Attach the ref to the input element
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
