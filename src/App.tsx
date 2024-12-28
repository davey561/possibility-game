import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { SAMPLE_PARAGRAPHS, EXTRA_PARAGRAPHS } from "./sampleParagraphs"; // Import the data

function App() {
  const [idea, setIdea] = useState("");
  const [rows, setRows] = useState<string[][]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const rowsContainerRef = useRef<HTMLDivElement | null>(null);
  const extraIndexRef = useRef(0); // Track the next index for extra options

  const handleKeyDownOnInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && idea.trim()) {
      setRows([SAMPLE_PARAGRAPHS]); // Start with three options
      setSelectedIndices([-1]); // No option selected initially
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

      // Fetch the next set of three options
      const nextOptions = EXTRA_PARAGRAPHS.slice(
        extraIndexRef.current,
        extraIndexRef.current + 3
      );

      // Update the index for the next batch
      extraIndexRef.current += 3;

      // Cycle back to the beginning if we've exhausted EXTRA_PARAGRAPHS
      if (extraIndexRef.current >= EXTRA_PARAGRAPHS.length) {
        extraIndexRef.current = 0;
      }

      // Append the next options to the last row
      copy[lastRowIndex] = [...copy[lastRowIndex], ...nextOptions];
      return copy;
    });
  };

  const handleSelectOption = (optionIndex: number) => {
    setSelectedIndices((prev) => {
      const copy = [...prev];
      copy[copy.length - 1] = optionIndex; // Update the selected option for the current row
      return copy;
    });
    createNextRow(); // Add a new row after selecting
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const lastRowIndex = rows.length - 1;

    if (lastRowIndex < 0) return;

    if (e.key === " ") {
      e.preventDefault();
      handleGenerateMoreOptions(); // Space bar generates more options
    } else if (/^[1-9]$/.test(e.key)) {
      const optionIndex = parseInt(e.key, 10) - 1;
      if (optionIndex < rows[lastRowIndex].length) {
        handleSelectOption(optionIndex); // Select an option via keyboard shortcut
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [rows]);

  useEffect(() => {
    if (rowsContainerRef.current) {
      rowsContainerRef.current.scrollTo({
        top: rowsContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [rows]);

  return (
    <div className="container">
      <input
        type="text"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        onKeyDown={handleKeyDownOnInput}
        placeholder="Type your main idea, press Enter..."
        className="text-input"
      />

      <div className="rows-container" ref={rowsContainerRef}>
        {rows.map((row, rowIndex) => {
          const isBottomRow = rowIndex === rows.length - 1;

          return (
            <div key={rowIndex} className="row">
              {row.map((paragraph, optIndex) => {
                const isSelected = selectedIndices[rowIndex] === optIndex;
                return (
                  <div
                    key={optIndex}
                    className={`option-box ${isSelected ? "highlighted" : ""}`}
                    onClick={() => isBottomRow && handleSelectOption(optIndex)}
                  >
                    {paragraph}
                  </div>
                );
              })}

              {isBottomRow && (
                <div className="plus-box" onClick={handleGenerateMoreOptions}>
                  ...
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
