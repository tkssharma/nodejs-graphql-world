import { Injectable } from '@nestjs/common';
import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';

import { UserService } from '../user.service';

/**
 * Custom validator, checks for name/email unique.
 * Make sure that all your dependencies are not SCOPE.Default'ed.
 */
@ValidatorConstraint({ name: 'user', async: true })
@Injectable()
export class UserExistsValidator implements ValidatorConstraintInterface {
    constructor(private readonly userService: UserService) {}

    /**
     * Method should return true, if name is not taken.
     */
    async validate(name: string, args: ValidationArguments) {
        const result = await this.userService.findUnique({
            where: { name },
            select: { userId: true },
        });
        return !result;
    }

    defaultMessage(_args: ValidationArguments) {
        return 'User with $property $value already exists';
    }
}
