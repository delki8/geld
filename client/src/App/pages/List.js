import React from 'react';
import { ListComponent } from './ListComponent';
import { useQuery } from "@apollo/react-hooks";
import { gql } from 'apollo-boost';

const LIST_ITEMS = gql`
    {
        items {
            id
            name
        }
    }
`;

export const List = (props) => {
  const { loading, error, data } = useQuery(LIST_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  console.log(data);
  return (<ListComponent items={data.items} {...props} />);
};