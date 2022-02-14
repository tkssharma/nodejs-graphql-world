export const userFields = /* GraphQL */ `
    fragment userFields on User {
        userId
        username: name
        email
        bio
        image
    }
`;
