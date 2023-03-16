import React from 'react';
import CalendarDefault from './CalendarDefault';
import CalendarTeamOverview from './CalendarTeamOverview';
import { useAuthContext } from '../AuthProvider';

const Calendar = () => {
  const { user } = useAuthContext();

  if (user && user.role === 'instructor') {
    return <CalendarTeamOverview/> ;
  } else {
    return <CalendarDefault />;
  }
};

export default Calendar;
