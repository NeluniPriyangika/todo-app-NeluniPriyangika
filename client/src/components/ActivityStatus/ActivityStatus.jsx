import React from 'react';
import './activityStatus.css';
import IMG1 from "../../assets/Avatar-1.svg";
import IMG2 from '../../assets/Avatar-2.svg';

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Kushantha Charuka created Contract #00124 need John Beige’s signature",
        date: "Sep 16, 2022 at 11:30 AM",
    },
    {
        id: 2,
        image: IMG2,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque",
        date: "Sep 16, 2022 at 11:45 AM",
    },
    {
        id: 3,
        image: IMG2,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque",
        date: "Sep 16, 2022 at 11:45 AM",
    },
    {
        id: 1,
        image: IMG1,
        title: "Kushantha Charuka created Contract #00124 need John Beige’s signature",
        date: "Sep 16, 2022 at 11:30 AM",
    },
    {
        id: 2,
        image: IMG2,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque",
        date: "Sep 16, 2022 at 11:45 AM",
    },
];

function ActivityStatus() {
    return (
        <div className='activitystatus-container'>
            <div className='activitystatus-items'>
                {data.map(({ id, image, title, date }) => {
                    return (
                        <div key={id} className='activityStatus-item'>
                            <img className='activity-imag' src={image} alt="" />
                            <div className='activitystatus-cont'>
                                <div className='activity-status'>{title}</div>
                                <div className='activity-dat-time'>{date}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ActivityStatus;
