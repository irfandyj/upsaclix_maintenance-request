import express from 'express'
import setupGraphQLYoga from './graphql'

function setupServer() {
  const yoga = setupGraphQLYoga()
  const server = express()
  
  // Bind GraphQL Yoga to the graphql endpoint to avoid rendering the playground on any path
  server.use(yoga.graphqlEndpoint, yoga)
  
  return server
}

const server = setupServer()

export default server
