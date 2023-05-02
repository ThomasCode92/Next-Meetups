import React from 'react';
import { MongoClient } from 'mongodb';

import MeetupList from '@components/meetups/MeetupList';

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  const mongodbUrl = 'mongodb://localhost:27017/next-meetups';
  const client = await MongoClient.connect(mongodbUrl);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
      })),
    },
  };
}

export default HomePage;
