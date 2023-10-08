import React from 'react'
import './activity.css'
import ActivityStatus from '../ActivityStatus/ActivityStatus'

function Activity() {
  return (
    <div className='activityFeed-container'>
        <div className='activity-titlediv'>
            <div className='activity-title'>
                Activity Feed
            </div>
            <div className='activity-divider'></div>
            <div className='activity-content'>
                <div className='activity-statusComp'>
                    <ActivityStatus/>
                </div>
                <div className='scrollbar-div'>
                    <div className='scrollbar-small'>

                    </div>  
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Activity
