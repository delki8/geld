import React from 'react';

export const ListComponent = ({ items }) => {

  return(
    <div className='App'>
      <h1>List of Items</h1>

      {items.length ? (
        <div>
          {items.map(({id, name}) => {
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