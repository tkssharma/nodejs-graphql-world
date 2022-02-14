import { userFields } from './user';

export const commentFields = /* GraphQL */ `
    fragment commentFields on Comment {
        id: commentId
        createdAt
        updatedAt
        body
        author {
            ...userFields
            following: isFollowing
        }
    }
    ${userFields}
`;
