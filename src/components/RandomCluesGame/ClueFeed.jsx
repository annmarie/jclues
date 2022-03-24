import _ from 'lodash';
import ClueCard from './ClueCard';
import FetchRandomClue from 'src/provider/FetchRandomClue';

export default function ClueFeed(props) {
  const { searchQuery } = props;

  let clues = [];
  const { isSuccess, data } = FetchRandomClue(searchQuery);
  if (isSuccess && Array.isArray(data)) {
    clues = data.filter(filterClue).map(cleanClue);
  } else {
    return '';
  }

  return clues.map((clue) => {
    const id = _.get(clue, 'id');
    return <ClueCard key={id} clue={clue} />;
  });
}

function filterClue(clue) {
  const { id, question } = clue;
  return id && question ? true : false;
}

function cleanClue(clue) {
  let airdate = _.get(clue, 'airdate');
  if (airdate) {
    airdate = airdate ? Date.parse(airdate) : '';
    airdate = airdate ? new Date(airdate).toDateString() : '';
    _.set(clue, 'airdate', airdate);
  }
  return clue;
}
