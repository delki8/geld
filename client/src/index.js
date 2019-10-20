import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  // A string representing your GraphQL server endpoint. Defaults to /graphql.
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
  uri: 'http://localhost:8090/graphql',
  // fetchOptions: Any options you would like to pass to fetch (credentials, headers, etc). These options are static, so they don't change on each request.
  // request	This function is called on each request. It takes a GraphQL operation and can return a promise. To dynamically set fetchOptions, you can add them to the context of the operation with operation.setContext({ headers }). Any options set here will take precedence over fetchOptions. Useful for authentication.
  // onError	We include a default error handler to log out your errors to the console. If you would like to handle your errors differently, specify this function.
  // clientState An object representing your local state configuration. This is useful if you would like to use the Apollo cache for local state management.
  // cacheRedirects	A map of functions to redirect a query to another entry in the cache before a request takes place. This is useful if you have a list of items and want to use the data from the list query on a detail page where you're querying an individual item. More on that here.
  // credentials	Is set to same-origin by default. This option can be used to indicate whether the user agent should send cookies with requests. See Request.credentials for more details.
  // headers	Header key/value pairs to pass along with the request.
  // fetch	A fetch compatible API for making a request.
  // cache	A custom instance of ApolloCache to be used. The default value is InMemoryCache from apollo-cache-inmemory. This option is quite useful for using a custom cache with apollo-cache-persist.
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
