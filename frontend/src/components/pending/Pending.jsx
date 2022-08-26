import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Pending.scss";
import {Add} from '../../features/dataSlice'
function Pending() {
  let { question, number } = useSelector((state) => state.quiz);
  const dispatch = useDispatch()

  const addNumber = (index) => {
    dispatch(Add(index+1))
  }
  return (
    <div className="pendingConainer">
      <div className="header">
        <div className="left">
          <p>
            Qustion <span>{number}/{question.length}</span>
          </p>
        </div>
        <div className="right">
          <p>Need Help ?</p>
        </div>
      </div>

      <div className="body d-flex row">
        {Array.isArray(question) ? question.map((data,index) => {
               return(

                <div onClick={() => addNumber(index)}className="qustions col-md-4">{index+1} </div>
               )
            }) : null
        
        }
      </div>
    </div>
  );
}

export default Pending;
