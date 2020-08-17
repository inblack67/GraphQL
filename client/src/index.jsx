import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'

const graphqlClient = new ApolloClient({
  uri: '/graphql'
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
