// POST /api/meetup/new

function handler(req, res) {
  const method = req.method;

  if (method === 'POST') {
    const data = req.body;
    const { title, image, address, description } = data;
  }
}

export default handler;
