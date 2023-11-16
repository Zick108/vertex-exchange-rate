import React from 'react';
import { Button } from './components/ui/button';
import Header from './Header';

const News = () => {
  return (
    <>
      <Header />
      <div className="flex flex-1 justify-center items-center flex-col py-12">
        <Button>Click Me</Button>
      </div>
    </>
  );
};

export default News;
