import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Main.scss";
import {Add,showExplanation} from '../../features/dataSlice'
function Main() {
let {question,number} = useSelector((state) => state.quiz)
const dispatch = useDispatch()

const prevNumber = () => {
  if(number > 1) {
    dispatch(Add(number-1))
  }
}

const nextNumber = () => {
  if(number < question.length) {
    dispatch(Add(number+1))
  }
}


const showHelp = () => {
  dispatch(showExplanation(true))
}
  return (
    <div className="mainContainer">
      <div>
        <div className="containers">
          <p>{question[number-1].Options ? question[number-1].Options.A : ''}</p>
        </div>
        <div className="containers">
          <p>{question[number-1].Options ? question[number-1].Options.B : ''}</p>
        </div>
        <div className="containers">
          <p>{question[number-1].Options ? question[number-1].Options.C : ''}</p>
        </div>
        <div className="containers">
          <p>{question[number-1].Options ? question[number-1].Options.D : ''}</p>
        </div>
      </div>
      <div className="buttonContaier">
        <div className="prevButton" onClick={prevNumber}>
            <p >Prev</p>
        </div>
        <div className="nextButton" onClick={nextNumber}>
            <p>Next</p>
        </div>
        
      </div>
      <div className="helpButton" onClick={showHelp}>
          <p>Help</p>
        </div>
    </div>
  );
}

export default Main;
