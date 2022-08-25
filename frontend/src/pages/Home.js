import React from "react";
import Main from "../components/main/Main";
import Questions from '../components/question/Questions'
function Home() {
  return (
    <div>
      <header>
        <p>Bigo Quize</p>
      </header>
      <main>
        <div className="qustionsContainer">
            <Questions/>
            <Main/>
        </div>
        <div className="pendingQuestions"></div>
      </main>
    </div>
  );
}

export default Home;
