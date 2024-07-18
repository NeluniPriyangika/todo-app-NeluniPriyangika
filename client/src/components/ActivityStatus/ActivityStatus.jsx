import React from 'react';
import './activityStatus.css';

function ActivityStatus({ activities }) {
    return (
        <div className='activitystatus-container'>
            <div className='activitystatus-items'>
                {activities.map(({ _id, user, action, description, date }) => (
                    <div key={_id} className='activityStatus-item'>
                        <div className='activity-status'>{description}</div>
                        <div className='activity-dat-time'>{new Date(date).toLocaleString()}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ActivityStatus;
