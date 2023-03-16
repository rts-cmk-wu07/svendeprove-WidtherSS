import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../AuthProvider';
import NavBar from '../NavBar';

const CalendarDefault = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/activities', {
        method: 'GET',
      });
      const data = await response.json();
      setActivities(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className='text-white font-normal pl-9 pt-9 text-4xl'>kalender</h1>
      <div>
      {activities.map(activity => (
  <div className="flex flex-wrap justify-center pt-[30px] pl-4 pr-4">
    <Link  className="bg-white h-[107px] mb-5  w-[356px] rounded-lg shadow-md">
      <div className='flex flex-col justify-center'>
        <h2 className="text-black font-normal text-center text-4xl">{activity.name}</h2>
        <p className="text-black font-normal text-center  text-lg">{activity.weekday} {activity.time}</p>
        <p className="text-black font-normal text-center text-lg">Age Restriction: {activity.ageRestriction.min} - {activity.ageRestriction.max}</p>
      </div>
    </Link>
  </div>
))}
      </div>
      <NavBar/>
    </div>
  );
};

export default CalendarDefault;
