import { JwtService } from '@nestjs/jwt';
import { Test } from '@nestjs/testing';
import { instance, mock } from 'ts-mockito';

import { AppEnvironment } from '../app.environment';
import { AuthService } from './auth.service';

describe('AuthService', () => {
    let service: AuthService;
    const jwtService = mock(JwtService);
    const appEnvironment = mock(AppEnvironment);

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                AuthService,
                {
                    provide: JwtService,
                    useValue: instance(jwtService),
                },
                {
                    provide: AppEnvironment,
                    useValue: instance(appEnvironment),
                },
            ],
        }).compile();

        service = module.get(AuthService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
