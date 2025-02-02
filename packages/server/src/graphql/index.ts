import { createSchema, createYoga } from 'graphql-yoga'

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'world'
    }
  }
})


const setupGraphQLYoga = () => {
  const yoga = createYoga({
    schema
  })

  return yoga
}

export default setupGraphQLYoga
