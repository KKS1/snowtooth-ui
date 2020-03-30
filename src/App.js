import React, { Component } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const QUERY = gql`
  query {
    liftCount
    allLifts {
      id
      name
      status
    }
  }
`;

export default function App() {
  const { loading, data } = useQuery(QUERY);

  if (loading) return <p>Loading Lifts....</p>;

  return (
    <section>
      <h1>Snowtooth Lift Status</h1>
      {data && !loading && (
        <table>
          <thead>
            <tr>
              <td>Lift name</td>
              <td>Lift status</td>
            </tr>
          </thead>
          <tbody>
            {data.allLifts.map((lift, index) => (
              <tr key={index}>
                <td>{lift.name}</td>
                <td>{lift.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
};
