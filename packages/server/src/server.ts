import express from 'express'
import setupGraphQLYoga from './graphql'

async function setupServer() {
  const yoga = await setupGraphQLYoga()
  const server = express()
  
  // Bind GraphQL Yoga to the graphql endpoint to avoid rendering the playground on any path
  server.use(yoga.graphqlEndpoint, yoga)
  
  return server
}

export default setupServer
