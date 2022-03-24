import axios from 'axios';
import { useQuery } from 'react-query';

const getData = async (offset) => {
  const url = `https://jservice.io/api/clues?offset=${offset}`;
  return await axios.get(url)
    .then((res) => res.data)
    .catch((error) => { error });
};

const getRandomInt = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};

export default function FetchRandomClue(searchValue) {
  const offset = getRandomInt(0, 156811);
  return useQuery(['getRandomClue', searchValue], () => getData(offset));
};
