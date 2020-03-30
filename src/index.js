import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

const link = createHttpLink({
  uri: 'https://snowtooth.moonhighway.com/',
})

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

console.log(client);

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById("root"));
