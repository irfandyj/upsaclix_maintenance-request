import { createYoga } from 'graphql-yoga'
import bootstrapSchema from './schemas'

const setupGraphQLYoga = async function () {
  const schema = await bootstrapSchema()
  const yoga = createYoga({
    schema
  })

  return yoga
}

export default setupGraphQLYoga
