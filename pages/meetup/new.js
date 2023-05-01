import React from 'react';
import { useRouter } from 'next/router';

import NewMeetupForm from '@components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter();

  const addMeetupHandler = async enteredMeetupData => {
    const response = await fetch('/api/meetup/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(enteredMeetupData),
    });

    const data = await response.json();
    console.log(data);

    router.push('/');
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
