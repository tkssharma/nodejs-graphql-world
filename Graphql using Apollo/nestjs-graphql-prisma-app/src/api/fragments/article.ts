import { userFields } from './user';

export const articleFields = /* GraphQL */ `
    fragment articleFields on Article {
        slug
        title
        description
        body
        tags {
            name
        }
        createdAt
        updatedAt
        favorited
        favoritesCount
        author {
            ...userFields
            following: isFollowing
        }
    }
    ${userFields}
`;
