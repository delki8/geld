import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const ADD_TRANSACTION = gql`
    mutation AddTransaction($transaction: inputTransactionType) {
        addTransaction(transaction: $transaction) {
            _id
            name
        }
    }
`;

export const ListComponent = ({ transactions }) => {
  let input;
  const [addTransaction, { data }] = useMutation(ADD_TRANSACTION);
  return(
    <div className='App'>
      <h1>Transactions</h1>

      {transactions.length ? (
        <form onSubmit={e => {
          e.preventDefault();
          addTransaction({ variables: { transaction: { name: input.value } }});
          input.value = '';
        }}>
          {transactions.map(({ name }) => {
            return (<div>{ name }</div>);
          })}
          <input ref={node => input = node} />
          <button type='submit'>add</button>
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