import React, { useState } from "react";
import "./App.css"; // optional, if you want to add custom CSS

type Possibility = {
  label: string;
};

export default function App() {
  // State for the top "Idea" input
  const [idea, setIdea] = useState("");

  // Each "row" is an array of possibilities.
  // For simplicity, we seed it with a single row of 3 placeholders.
  const [rows, setRows] = useState<Possibility[][]>([
    [
      { label: "Option A" },
      { label: "Option B" },
      { label: "Option C" },
    ],
  ]);

  // Handler for the top Idea input
  const handleIdeaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdea(e.target.value);
  };

  // When you click the plus button on a possibility,
  // we append a new row with 3 dummy possibilities below.
  const handleAddRow = () => {
    const newRow: Possibility[] = [
      { label: "Option X" },
      { label: "Option Y" },
      { label: "Option Z" },
    ];
    setRows(prev => [...prev, newRow]);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "1rem" }}>
      <h1>Your Possibility Game</h1>

      {/* Top text input for the initial idea */}
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: 4 }}>
          Enter your initial idea:
        </label>
        <input
          type="text"
          value={idea}
          onChange={handleIdeaChange}
          placeholder="Type your main idea here..."
          style={{
            width: "100%",
            padding: "0.5rem",
            fontSize: "1rem",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Display the user's idea (optional) */}
      {idea && (
        <p style={{ fontStyle: "italic" }}>
          Current Idea: <strong>{idea}</strong>
        </p>
      )}

      {/* Render each row of possibilities */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {row.map((possibility, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  padding: "1rem",
                  minWidth: 100,
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div style={{ marginBottom: 8 }}>{possibility.label}</div>
                {/* Plus button to add a new row below */}
                <button
                  onClick={handleAddRow}
                  style={{
                    background: "#4caf50",
                    color: "#fff",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer",
                    padding: "0.5rem 0.75rem",
                  }}
                >
                  +
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
