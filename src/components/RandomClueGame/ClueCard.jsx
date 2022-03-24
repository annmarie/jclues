import _ from 'lodash';
import { Card, Button } from 'antd';
import { useState } from 'react';

export default function ClueCard({ clue }) {
  return (
    <>
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

function AnswerText({ answer }) {
  const [displayAnswer, setDisplayAnswer] = useState(0);
  const onClick = () => setDisplayAnswer(1);
  if (displayAnswer === 1) {
    return <>{answer}</>;
  } else if (answer) {
    return <Button onClick={onClick}>show answer</Button>;
  }
  return '';
}
