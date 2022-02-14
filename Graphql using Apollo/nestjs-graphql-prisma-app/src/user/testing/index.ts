import { Prisma } from '@prisma/client';

type UserPayload = Prisma.UserGetPayload<true>;

export function createUser(parts: Partial<UserPayload> = {}): UserPayload {
    return {
        userId: 'user_id',
        email: 'user_email',
        name: 'user_name',
        password: 'user_password',
        bio: 'user_bio',
        image: 'user_image',
        ...parts,
    };
}
