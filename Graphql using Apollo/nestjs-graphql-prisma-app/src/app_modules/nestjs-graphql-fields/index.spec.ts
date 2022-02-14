import {
    buildSchema,
    ExecutionResult,
    graphql,
    GraphQLFieldResolver,
    GraphQLResolveInfo,
} from 'graphql';

import { graphqlFieldsImpl } from '.';

let info: GraphQLResolveInfo | undefined;
const schema = buildSchema(`
type Query {
    ok: Boolean
    user: User
}

type User {
    id: String
    name: String
    posts: [Post]
}

type Post {
    id: Int
    title: String
}

schema {
    query: Query
}
`);

async function executeGraphQL(query) {
    const resolver: GraphQLFieldResolver<any, any> = (
        source,
        args,
        context,
        i: GraphQLResolveInfo,
    ) => {
        info = i;
    };
    const graphqlArgs = {
        source: query,
        schema: schema,
        fieldResolver: resolver,
    };
    const response: ExecutionResult = await graphql(graphqlArgs);
    return [undefined, undefined, undefined, info] as any;
}

it('prisma find args', () => {
    expect(async () => {
        const args = await executeGraphQL(/* GraphQL */ `
            query {
                user {
                    id
                }
            }
        `);
        const result = graphqlFieldsImpl(undefined, args);
    }).not.toThrow();
});

it('other fields', async () => {
    const args = await executeGraphQL(/* GraphQL */ `
        query {
            user {
                id
                name
            }
        }
    `);
    const result = graphqlFieldsImpl(undefined, args);
    expect(result).toEqual({ id: {}, name: {} });
});
