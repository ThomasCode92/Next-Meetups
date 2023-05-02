import React from 'react';
import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '@components/meetups/MeetupDetail';

function MeetupDetailPage(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const mongodbUrl = 'mongodb://localhost:27017/next-meetups';
  const client = await MongoClient.connect(mongodbUrl);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map(meetup => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const mongodbUrl = 'mongodb://localhost:27017/next-meetups';
  const client = await MongoClient.connect(mongodbUrl);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      },
    },
  };
}

export default MeetupDetailPage;
