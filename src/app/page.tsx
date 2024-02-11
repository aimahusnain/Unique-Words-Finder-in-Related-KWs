"use client";

import NextuiButton from "@/src/components/nextuibutton";
import { Input, Textarea } from "@nextui-org/react";
import { Copy } from "lucide-react";
import { useState } from "react";
import { Check } from "lucide-react";

export default function KeywordMatcher() {
  const [mainKeyword, setMainKeyword] = useState("");
  const [relatedKeywords, setRelatedKeywords] = useState("");
  const [nonMatchedKeywords, setNonMatchedKeywords] = useState([]);
  const [isCopied, setIsCopied] = useState(false);

  const processKeywords = () => {
    const mainKeywordLowerCase = mainKeyword.toLowerCase();
    const relatedKeywordsArr = relatedKeywords
      .toLowerCase()
      .split("\n")
      .flatMap((keyword) => keyword.split(" "))
      .filter(Boolean);

    const nonMatched = relatedKeywordsArr.filter(
      (word) => !mainKeywordLowerCase.includes(word)
    );

    const nonMatchedLines: any = relatedKeywords
      .split("\n")
      .map((line) =>
        line
          .split(" ")
          .filter((word) => nonMatched.includes(word))
          .join(" ")
      )
      .filter(Boolean);

    const uniqueNonMatched = [...new Set(nonMatched)];

    setNonMatchedKeywords(nonMatchedLines);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(nonMatchedKeywords.join("\n"))
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Revert to copy icon after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Unique Words Finder in Related Keywords
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <Input
              type="text"
              value={mainKeyword}
              onChange={(e) => setMainKeyword(e.target.value)}
              label="Main Keyword:"
              classNames={{ input: "text-gray-800" }}
              className="mb-4"
            />
            <Textarea
              label="Related Keywords"
              disableAnimation
              classNames={{ input: "resize-y min-h-[70px] text-gray-800" }}
              value={relatedKeywords}
              onChange={(e) => setRelatedKeywords(e.target.value)}
              className="mb-4"
            />
            <NextuiButton
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 w-full mb-4"
              onPress={processKeywords}
            >
              Find Different
            </NextuiButton>
          </div>

          <div className="flex gap-3">
            <div>
              <h2 className="text-2xl mb-2 text-white">
                Unique Keywords:
              </h2>
              <ul className="list-disc pl-6 text-white">
                {nonMatchedKeywords.map((word, index) => (
                  <li key={index} className="mb-2">
                    {word}
                  </li>
                ))}
              </ul>
            </div>
            <NextuiButton isIconOnly={true} onPress={copyToClipboard}>
              {isCopied ? (
                <span className="text-green-600">
                  <Check />
                </span>
              ) : (
                <Copy className="text-white" />
              )}
            </NextuiButton>
          </div>
        </div>
      </div>
    </div>
  );
}
