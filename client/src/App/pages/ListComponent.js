import React from 'react';

export const ListComponent = ({ transactions }) => {

  return(
    <div className='App'>
      <h1>Transactions</h1>

      {transactions.length ? (
        <div>
          {transactions.map(({id, name}) => {
            return (<div key={id}>{ name }</div>);
          })}
        </div>
      ) : (
        <div>
          <h2>No List Items Found</h2>
        </div>
        )
      }
    </div>
  );
};