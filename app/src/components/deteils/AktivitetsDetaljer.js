import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { useAuthContext } from '../AuthProvider';

const ActivityDetails = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const { isLoggedIn } = useAuthContext();
  const [isSignedUp, setIsSignedUp] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/activities/${id}`)
      .then((response) => {
        setActivity(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleSignUp = () => {
    setIsSignedUp(!isSignedUp);
    if (!isSignedUp) {
      swal("Tak for tilmeldingen!", `Du har tilmeldt dig ${activity.name}.`, "success");
      console.log('User signed up for activity:', activity.name);

    } else {
      swal("Tak for afmeldingen!", `Du har afmeldt dig ${activity.name}.`, "success");
      console.log('User canceled the activity:', activity.name);
    }
  };

  if (!activity) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-[#5E2E53] w-full h-min'>
      <div className='relative'>
        <img src={activity.asset.url} alt={activity.url} className="w-full h-full object-cover" />
        {isLoggedIn && (
          <button
            onClick={handleSignUp}
            className='absolute w-[249px] h-[54px] bottom-4 right-4 bg-[#5E2E53]  text-[#E9E9E9] font-normal text-lg	 py-2 px-4 rounded'
          >
            {isSignedUp ? 'Forlad' : 'Tilmeld'}
          </button>
        )}
      </div>
      <div className='ml-7 text-white pt-3'>
        <h1 className='font-normal text-2xl'>{activity.name}</h1>
        <div className='font-normal text-xl'>
          <p>{activity.minAge}-{activity.maxAge} år</p>
          <p>{activity.weekday}</p>
          <p>{activity.time}</p>
          <p>{activity.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;