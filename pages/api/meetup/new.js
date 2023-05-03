import { MongoClient } from 'mongodb';

// POST /api/meetup/new
async function handler(req, res) {
  const method = req.method;

  if (method === 'POST') {
    const data = req.body;
    const { title, image, address, description } = data;

    const mongodbUrl = process.env.MONGODB_CONNECTION_STRING;
    const client = await MongoClient.connect(mongodbUrl);
    const db = client.db();

    const meetup = { title, image, address, description };
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(meetup);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
