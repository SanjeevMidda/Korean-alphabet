import React, { useState } from "react";

const Nouns = ({ changeLanguage }) => {
  let nouns = [
    {
      korean: "밥",
      english: "rice",
    },
    {
      korean: "김치",
      english: "kimchi",
    },
    {
      korean: "고기",
      english: "meat",
    },
    {
      korean: "국",
      english: "soup",
    },
    {
      korean: "반찬",
      english: "side dishes",
    },
    {
      korean: "과일",
      english: "fruit",
    },
    {
      korean: "채소",
      english: "vegetables",
    },
    {
      korean: "생선",
      english: "fish",
    },
    {
      korean: "떡",
      english: "rice cake",
    },
    {
      korean: "면",
      english: "noodles",
    },
    {
      korean: "빵",
      english: "bread",
    },
    {
      korean: "계란",
      english: "egg",
    },
    {
      korean: "소스",
      english: "sauce",
    },
    {
      korean: "샐러드",
      english: "salad",
    },
    {
      korean: "치즈",
      english: "cheese",
    },
    {
      korean: "우유",
      english: "milk",
    },
    {
      korean: "커피",
      english: "coffee",
    },
    {
      korean: "차",
      english: "tea",
    },
    {
      korean: "맥주",
      english: "beer",
    },
    {
      korean: "소주",
      english: "soju",
    },
  ];

  let randomWord = () => {
    return nouns[Math.floor(Math.random() * nouns.length)];
  };

  console.log(randomWord());
  const [word, setWord] = useState(randomWord());

  return (
    <div
      className="vowels"
      onClick={() => setWord(nouns[Math.floor(Math.random() * nouns.length)])}
    >
      {changeLanguage ? <h1>{word.korean}</h1> : <h2>{word.english}</h2>}
    </div>
  );
};

export default Nouns;
