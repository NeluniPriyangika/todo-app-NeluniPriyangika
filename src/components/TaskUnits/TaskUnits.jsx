import React from 'react'
import './taskUnits.css'
import PriorityLow from '../../assets/Priority-Low.svg'

function TaskUnits() {
  return (
    <div>
      <div className='item4-container'>
        <div className='bell-container'>
          <img src={PriorityLow} alt="" />
        </div>
        <div className='item4-textdiv'>
            Contract #00124 need John Beige’s signature
        </div>
        <div className='badge'>
          <div className='lable-text'>
              Done
          </div>
        </div>
        <div className='date-div'>
          sep 16
        </div>
      </div>
      <div className='task-divider'></div>
    </div>
  )
}

export default TaskUnits
