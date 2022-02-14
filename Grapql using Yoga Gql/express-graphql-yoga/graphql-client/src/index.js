import React from 'react';
import ReactDOM from 'react-dom';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { getMainDefinition } from 'apollo-utilities';
import App from './container/app';
import 'bootstrap/dist/css/bootstrap.min.css';

const httpLink = new HttpLink({
	uri: 'http://localhost:4000'
});

const wsLink = new WebSocketLink({
	uri: 'ws://localhost:4000',
	options: { reconnect: true }
});

const link = split(
	// split based on operation type
	({ query }) => {
		const definition = getMainDefinition(query);
		return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link,
	cache: new InMemoryCache().restore({})
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);
