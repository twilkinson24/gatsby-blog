import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
    uri: `http://taylorwilkinsonport-com.stackstaging.com/graphql`,
})