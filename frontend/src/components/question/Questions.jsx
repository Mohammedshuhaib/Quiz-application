import React from 'react'
import './Qustions.scss'
import { useSelector } from 'react-redux'
function Questions() {
  let {question,number} = useSelector((state) => state.quiz)

  return (
    
    <div className='questionContainer'>
        <div className="header">
            <p>Question <span>{number}</span></p>
        </div>
        <div className="body">
            <p>{question[number-1].Question}</p>
        </div>
    </div>
  )
}

export default Questions