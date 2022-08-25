import axios from "axios";
import React, { useEffect } from "react";
import Explanation from "../components/explanation/Explanation";
import Main from "../components/main/Main";
import Pending from "../components/pending/Pending";
import Questions from '../components/question/Questions'
function Home() {
    useEffect(() => {
        ( async function getQuestion(){
            try{
                let response = await axios({
                    url:'http://localhost:/getData',
                    method:'get'
                })
                console.log(response)
            }catch(err) {
                console.log(err)
            }
            
          })()
    },[])
  return (
    <div>
      <header>
        <p>Bigo Quiz</p>
      </header>
      <main className="container d-flex">
        <div className="qustionsContainer col-md-8">
            <Questions/>
            <Main/>
            <Explanation/>
        </div>
        <div className="pendingQuestions col-md-3">
            <Pending/>
        </div>
      </main>
    </div>
  );
}

export default Home;
