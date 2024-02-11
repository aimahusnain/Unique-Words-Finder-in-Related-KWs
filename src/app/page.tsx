"use client";

import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [wordArray, setWordArray] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    const words = inputValue.split(" ").map(word => word.replace(".", ""));
    setWordArray(words);
  };

  return (
    <main className="w-full max-h-full flex items-center justify-center">
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleSubmit} className="bg-emerald-500 p-3">Submit</button>
        <div className="text-white">
          <h2>Words:</h2>
          <ul>
            {wordArray.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
