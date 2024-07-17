import React from 'react';
import './taskUnits.css';
import PriorityLow from '../../assets/Priority-Low.svg';

function TaskUnits() {
  return (
    <div className='task-unit'>
      <div className='icon-container'>
        <img src={PriorityLow} alt="Priority Low" />
      </div>
      <div className='task-description'>
        Contract #00124 needs John Beige’s signature
      </div>
      <div className='badge'>
        <div className='label-text'>
          Completed
        </div>
      </div>
      <div className='date'>
        Sep 16
      </div>
    </div>
  );
}

export default TaskUnits;
