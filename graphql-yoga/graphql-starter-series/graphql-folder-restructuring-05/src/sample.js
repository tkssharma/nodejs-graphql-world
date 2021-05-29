import { GraphQLServer, PubSub } from 'graphql-yoga'
const users = [];
const pubsub = new PubSub()

const typeDefs = `
type Query {
    users: [User!]!
}
type Mutation {
    addUser(data: AddUserInput): User!
    deleteUser(who: String!): User!
    updateUser(who: String!, data: UpdateUserInput): User!
}
input AddUserInput {
    name: String!, 
    age: Int!
}
input UpdateUserInput {
    name: String
    age: Int
}
type User {
    name: String!
    age: Int!
}
type Subscription {
    user: UserSubscription!
}
type UserSubscription {
  mutation: MutationType!
  data: User!
}
enum MutationType {
    CREATED
    UPDATED 
    DELETED
}
`

const resolvers = {
    Query: {
        users() {
            return users
        }
    },
    Mutation: {
        addUser(parent, args, ctx, info) {
            const user = { ...args.data }

            users.push(user)

            pubsub.publish('user', {
                user: {
                    mutation: 'Added',
                    data: user
                }
            })

            return user
        },
        deleteUser(parent, args, ctx, info) {
            const userIndex = users.findIndex(user => user.name.toLowerCase() === args.who.toLowerCase());
            if (userIndex === -1) throw new Error('User not found')

            const user = users.splice(userIndex, 1)
            pubsub.publish('user', {
                user: {
                    mutation: 'Deleted',
                    data: user[0]
                }
            })

            return user[0]
        },
        updateUser(parent, args, ctx, info) {
            const user = users.find(user => user.name.toLowerCase() === args.who.toLowerCase())
            if (!user) throw new Error('User not found')

            user.name = args.data.name
            user.age = args.data.age

            pubsub.publish('user', {
                user: {
                    mutation: 'Updated',
                    data: user
                }
            })

            return user
        }
    },
    Subscription: {
        user: {
            subscribe(parent, args, ctx, info) {
                return pubsub.asyncIterator('user')
            }
        }
    }
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(() => console.log('server running'))