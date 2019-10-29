import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='App'>
      <h1>Project Home</h1>

      <Link to={'./transactions'}>
        <button className='transactions-btn'
                variant='raised'>
          Transactions
        </button>
      </Link>
    </div>
  );
};

export default Home;