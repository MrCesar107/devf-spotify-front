import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'

const PROD_DB_URI = "https://frozen-chamber-10728.herokuapp.com/graphql"

const AuthLink = (operation, next) => {
  const token = localStorage.getItem('jwt')
  if (token) {
    operation.setContext(context => ({
      ...context,
      headers: {
        ...context.headers,
        Authorization: `${token}`,
      },
    }))
  }
  return next(operation)
}

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path, extensions }) => {
          if (extensions.code === 'UNAUTHENTICATED') {
            localStorage.removeItem('jwt')
            client.resetStore()
          }
          console.log(`[GraphQL error]: Message: ${message}, 
            Location: ${locations}, Path: ${path}`)
        })
        if (networkError) {
          console.log(`[Network error]: ${networkError}`)
        }
      }
    }),
    AuthLink,
    new createUploadLink({
      uri: PROD_DB_URI
    }),
  ]),
  cache: new InMemoryCache(),
})

export default client