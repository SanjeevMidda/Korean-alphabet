import "./index.css";
import Vowels from "./components/Vowels";
import Consonants from "./components/Consonants";
import Verbs from "./components/Verb";
import Nouns from "./components/Nouns";

import { useState } from "react";

function App() {
  const [changeLanguage, setChangeLanguage] = useState(true);
  const [topicSelected, setTopicSelected] = useState("Vowels");

  return (
    <div className="App">
      <header>
        <div className="title">
          <div className="circle"></div>
          <div className="description">
            <h3>Learn </h3>
            <h3>Korean</h3>
          </div>
        </div>

        <div className="contents">
          <h3 onClick={() => setTopicSelected("Vowels")}>vowels</h3>
          <h3 onClick={() => setTopicSelected("Consonants")}>consonants</h3>
          <h3 onClick={() => setTopicSelected("Verbs")}>verbs</h3>
          <h3 onClick={() => setTopicSelected("Nouns")}>nouns</h3>
        </div>
      </header>
      <div className="mainContainer">
        {topicSelected === "Vowels" && (
          <Vowels changeLanguage={changeLanguage}></Vowels>
        )}
        {topicSelected === "Consonants" && (
          <Consonants changeLanguage={changeLanguage}></Consonants>
        )}
        {topicSelected === "Verbs" && (
          <Verbs changeLanguage={changeLanguage}></Verbs>
        )}
        {topicSelected === "Nouns" && (
          <Nouns changeLanguage={changeLanguage}></Nouns>
        )}
      </div>
      <h4 onClick={() => setChangeLanguage(!changeLanguage)}>
        {changeLanguage ? "Korean" : "English"}
      </h4>
    </div>
  );
}

export default App;
