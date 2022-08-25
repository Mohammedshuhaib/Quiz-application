import React from 'react'
import './Qustions.scss'
import { useSelector } from 'react-redux'
function Questions() {
  let {question} = useSelector((state) => state.quiz)

  return (
    
    <div className='questionContainer'>
        <div className="header">
            <p>Question <span>1</span></p>
        </div>
        <div className="body">
            <p>{question[0].Question}</p>
        </div>
    </div>
  )
}

export default Questions