import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState([]);

  const getData = () => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return videos;
};

export default useInitialState;
