import { Button } from 'antd';
import { useState } from 'react';
import ClueFeed from './ClueFeed';

export default function RandomCluesGame(props) {
  const [searchQuery, setSearchQuery] = useState({ toggle: 0 });
  const updateClues = () => {
    setSearchQuery({ toggle: Date.now() });
  };

  return (
    <>
      <Button style={{ width: 300 }} onClick={updateClues}>
        refresh clues
      </Button>
      <ClueFeed searchQuery={searchQuery} {...props} />
    </>
  );
}
