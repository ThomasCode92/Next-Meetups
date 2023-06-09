import React, { Fragment } from 'react';
import Head from 'next/head';
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

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
