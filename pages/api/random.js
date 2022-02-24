// https://jservice.io
import axios from 'axios';

async function randomHandler(req, res) {
  const { data } = await axios.get('https://jservice.io/api/random?count=100');
  const clues = data;
  res.status(200).json({ clues });
}

export default randomHandler;
