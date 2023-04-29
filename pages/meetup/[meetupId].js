import React from 'react';

import MeetupDetail from '@components/meetups/MeetupDetail';

function MeetupDetailPage() {
  return (
    <MeetupDetail
      image="https://frantic.im/assets/react-conf-2018/og-image.jpg"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is a first meetup"
    />
  );
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  // fetch data for a single meetup

  return {
    props: {
      meetupData: {
        id: 'm1',
        image: 'https://frantic.im/assets/react-conf-2018/og-image.jpg',
        title: 'First Meetup',
        address: 'Some Street 5, Some City',
        description: 'This is a first meetup',
      },
    },
  };
}

export default MeetupDetailPage;
