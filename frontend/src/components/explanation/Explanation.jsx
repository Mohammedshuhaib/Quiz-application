import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Explanation.scss'
function Explanation() {
  const dispatch = useDispatch()
  let {question,number,Explanation} = useSelector((state) => state.quiz)
 return (
  <div>
   {  Explanation &&  <div className='expContainer'>
  <div className="header">
            <p>Explanation</p>
        </div>

        <div className="body">
            <p>{question[number-1].Explanation}</p>
        </div>
    </div> 
  }
  </div>
  )
}

export default Explanation