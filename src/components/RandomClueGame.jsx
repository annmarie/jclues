import _ from 'lodash';
import { Card, Button } from 'antd';
import { useState } from 'react';
import FetchRandomClue from 'src/provider/FetchRandomClue';

const CleanClueData = ({ clue }) => {
  // parse airdate to readable format
  let airdate = _.get(clue, 'airdate');
  airdate = airdate ? Date.parse(airdate) : '';
  airdate = airdate ? new Date(airdate).toDateString() : '';
  // return new clue data
  _.set(clue, 'airdate', airdate);
  return clue;
};

const AnswerText = ({ answer }) => {
  const [displayAnswer, setDisplayAnswer] = useState(0);
  const onClick = () => setDisplayAnswer(1);
  if (displayAnswer === 1) {
    return <>{answer}</>;
  } else if (answer) {
    return <Button onClick={onClick}>show answer</Button>;
  }
  return '';
};

export default function RandomClueGame() {
  let clue = {};
  const [searchValue, setSearchValue] = useState({ toggle: 0 });
  const updateClueData = () => {
    setSearchValue({ toggle: Date.now() });
  };

  // fetch random clue data
  const { isSuccess, data } = FetchRandomClue(searchValue);
  if (isSuccess && Array.isArray(data)) clue = CleanClueData({ clue: data.shift() });

  return (
    <>
      <Button style={{ width: 300 }} onClick={updateClueData}>
        get new clue
      </Button>
      <Card
        title={_.get(clue, 'category.title', '')}
        bordered={false}
        style={{ border: '1px solid black', width: 300 }}
      >
        <p>{_.get(clue, 'airdate', '')}</p>
        <p>{_.get(clue, 'value', '')}</p>
        <p>{_.get(clue, 'question', '')}</p>
        <p>
          <AnswerText answer={_.get(clue, 'answer', '')} />
        </p>
      </Card>
    </>
  );
}
