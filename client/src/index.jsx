import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'
import './css/main.css';

const graphqlClient = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

ReactDOM.render(
  <ApolloProvider client={graphqlClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
