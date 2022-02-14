import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    userId = 'userId',
    email = 'email',
    name = 'name',
    password = 'password',
    bio = 'bio',
    image = 'image',
}

registerEnumType(UserScalarFieldEnum, {
    name: 'UserScalarFieldEnum',
    description: undefined,
});
