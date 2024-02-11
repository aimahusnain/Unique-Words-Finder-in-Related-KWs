"use client";

import React, { useState } from 'react';

export default function KeywordMatcher() {
  const [mainKeyword, setMainKeyword] = useState("");
  const [relatedKeywords, setRelatedKeywords] = useState("");
  const [matchedKeywords, setMatchedKeywords] = useState([]);

  const matchKeywords = () => {
    const mainKeywordLowerCase = mainKeyword.toLowerCase();
    const relatedKeywordsArr = relatedKeywords.toLowerCase().split("\n").filter(Boolean);

    const matched = relatedKeywordsArr.flatMap(keyword => {
      const words = keyword.split(" ");
      return words.filter(word => mainKeywordLowerCase.includes(word));
    });

    setMatchedKeywords(matched);
  }

  return (
    <div className='text-white'>
      <h1>Keyword Matcher</h1>
      <div>
        <label>Main Keyword:</label>
        <input className='text-black' type="text" value={mainKeyword} onChange={(e) => setMainKeyword(e.target.value)} />
      </div>
      <div>
        <label>Related Keywords:</label>
        <textarea className='text-black' value={relatedKeywords} onChange={(e) => setRelatedKeywords(e.target.value)} />
      </div>
      <button onClick={matchKeywords}>Match Keywords</button>
      <div>
        <h2>Matched Keywords:</h2>
        <ul>
          {matchedKeywords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
