import { Button } from 'antd';
import { useState } from 'react';
import ClueFeed from './ClueFeed';

export default function RandomClueGame(props) {
  const [searchQuery, setSearchQuery] = useState({ toggle: 0 });
  const updateClueData = () => {
    setSearchQuery({ toggle: Date.now() });
  };

  return (
    <>
      <Button style={{ width: 300 }} onClick={updateClueData}>
        refresh clues
      </Button>
      <ClueFeed searchQuery={searchQuery} {...props} />
    </>
  );
}
