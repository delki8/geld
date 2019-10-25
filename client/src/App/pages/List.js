import React from 'react';
import { ListComponent } from './ListComponent';
import { useQuery } from "@apollo/react-hooks";
import { gql } from 'apollo-boost';

const LIST_TRANSACTIONS = gql`
    {
        transactions {
            _id
            name
        }
    }
`;

export const List = (props) => {
  const { loading, error, data } = useQuery(LIST_TRANSACTIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error: ${JSON.stringify(error)}`}</p>;
  console.log(data);
  return (<ListComponent transactions={data.transactions} {...props} />);
};