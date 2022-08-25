import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Explanation from "../components/explanation/Explanation";
import Main from "../components/main/Main";
import Pending from "../components/pending/Pending";
import Questions from '../components/question/Questions'
import{ toast } from 'react-toastify'
import {data, reset} from '../features/dataSlice'
function Home() {
  const dispatch = useDispatch()

  const {question, isLoading, isError, isSuccess, message} =useSelector((state) => state.quiz)
    useEffect(() => {
        ( async function getQuestion(){
           dispatch(data())
          })()

          console.log(question)
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
