import React from 'react';
import Button from '../containers/Button';
import NewsItems from '../containers/NewsItem';
import Loading from '../containers/Loading';

let App = () => (
  <div>
    <Button />
    <Loading />
    <NewsItems />
  </div>
);

export default App;
