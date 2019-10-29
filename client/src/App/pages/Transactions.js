import React from 'react';

import {useMutation, useQuery} from "@apollo/react-hooks";
import { gql } from 'apollo-boost';

const LIST_TRANSACTIONS = gql`
    {
        transactions {
            _id
            name
        }
    }
`;

const ADD_TRANSACTION = gql`
    mutation AddTransaction($transaction: inputTransactionType) {
        addTransaction(transaction: $transaction) {
            _id
            name
        }
    }
`;

export const Transactions = () => {
  const { loading, error, data } = useQuery(LIST_TRANSACTIONS);
  const [addTransaction] = useMutation(ADD_TRANSACTION);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error: ${JSON.stringify(error)}`}</p>;

  let input;
  return(
    <div className='App'>
      <h1>Transactions</h1>

      {data.transactions.length ? (
        <form onSubmit={e => {
          e.preventDefault();
          addTransaction({ variables: { transaction: { name: input.value } }});
          input.value = '';
        }}>
          {data.transactions.map(({_id, name }) => {
            return (<div key={_id}>{ name }</div>);
          })}
          <input className='add-input' ref={node => input = node} />
          <button className='add-btn' type='submit'>add</button>
        </form>
      ) : (
        <div>
          <h2>No Transactions Found</h2>
        </div>
      )
      }
    </div>
  );
};