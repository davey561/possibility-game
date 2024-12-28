export interface Option {
    id: string;          // Unique identifier for the option
    text: string;        // The display text
    timestamp: string;   // ISO string for when the option was created
    promptText: string;  // The prompt that generated this option
  }
