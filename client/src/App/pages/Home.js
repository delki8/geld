import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='App'>
      <h1>Project Home</h1>

      <Link to={'./list'}>
        <button variant='raised'>
          MyList
        </button>
      </Link>
    </div>
  );
};

export default Home;