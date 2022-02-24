import axios from 'axios';
import { useQuery } from 'react-query';

export default function FetchRandomClue(searchValue) {
  const getRandomInt = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  const getData = async () => {
    const offset = getRandomInt(0, 156811);
    const url = `https://jservice.io/api/clues?offset=${offset}`;
    return await axios.get(url).then((res) => res.data);
  };

  return useQuery(['getRandomClue', searchValue], () => getData(searchValue));
};
