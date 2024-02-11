"use client";

import React, { useState } from "react";

export default function KeywordMatcher() {
  const [mainKeyword, setMainKeyword] = useState("");
  const [relatedKeywords, setRelatedKeywords] = useState("");
  const [nonMatchedKeywords, setNonMatchedKeywords] = useState([]);

  const processKeywords = () => {
    const mainKeywordLowerCase = mainKeyword.toLowerCase();
    const relatedKeywordsArr = relatedKeywords
      .toLowerCase()
      .split("\n")
      .flatMap((keyword) => keyword.split(" "))
      .filter(Boolean);

    // const matched = relatedKeywordsArr.filter((word) =>
    //   mainKeywordLowerCase.includes(word)
    // );
    const nonMatched = relatedKeywordsArr.filter(
      (word) => !mainKeywordLowerCase.includes(word)
    );

    // Group non-matched keywords into lines based on their position in the original input
    const nonMatchedLines: any = relatedKeywords
      .split("\n")
      .map((line) =>
        line
          .split(" ")
          .filter((word) => nonMatched.includes(word))
          .join(" ")
      )
      .filter(Boolean);

    // Remove duplicate words from matched array
    // const uniqueMatched: any = [...new Set(matched)];
    const uniqueNonMatched = [...new Set(nonMatched)];

    // setMatchedKeywords(uniqueMatched);
    setNonMatchedKeywords(nonMatchedLines);
  };

  return (
    <div className="bg-indigo-900 text-white p-6 rounded-lg max-w-md m-auto">
      <h1 className="text-2xl font-bold mb-4 text-white">Keyword Matcher</h1>
      <div className="mb-4">
        <label className="block text-white mb-2">Main Keyword:</label>
        <input
          className="w-full bg-indigo-700 rounded border border-indigo-600 py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          type="text"
          value={mainKeyword}
          onChange={(e) => setMainKeyword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">Related Keywords:</label>
        <textarea
          className="w-full bg-indigo-700 rounded border border-indigo-600 py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          value={relatedKeywords}

          onChange={(e) => setRelatedKeywords(e.target.value)}
        />
      </div>
      <button
        className="bg-white transition-all hover:bg-indigo-600 text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
        onClick={processKeywords}
      >
        Match Keywords
      </button>
      {/* <div className="mt-6">
        <h2 className="text-xl text-white mb-1">Matched Keywords:</h2>
        <ul className="list-disc ml-7">
          {matchedKeywords.map((word, index) => (
            <li key={index} className="mb-2 text-indigo-300">
              {word}
            </li>
          ))}
        </ul>
      </div> */}
      <div className="mt-6">
        <h2 className="text-xl text-white mb-1">Non-Matched Keywords:</h2>
        <ul className="list-disc ml-7">
          {nonMatchedKeywords.map((word, index) => (
            <li key={index} className="mb-2 text-indigo-300">
              {word}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
