import _ from 'lodash';
import ClueCard from './ClueCard';
import FetchRandomClue from 'src/provider/FetchRandomClue';

export default function ClueFeed(props) {
  const { searchQuery } = props;

  let clues = [];
  const { isSuccess, data } = FetchRandomClue(searchQuery);
  if (isSuccess && Array.isArray(data)) {
    clues = data.map(cleanClueData);
  } else {
    return '';
  }

  return clues.map((clue) => {
    const key = _.get(clue, 'key');
    return key ? <ClueCard key={key} clue={clue} /> : '';
  });
}

function cleanClueData(clue) {
  let airdate = _.get(clue, 'airdate');
  if (airdate) {
    airdate = airdate ? Date.parse(airdate) : '';
    airdate = airdate ? new Date(airdate).toDateString() : '';
    _.set(clue, 'airdate', airdate);
  }
  return clue;
}
