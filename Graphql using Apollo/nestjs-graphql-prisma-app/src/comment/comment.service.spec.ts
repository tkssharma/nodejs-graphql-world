import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { DummyRepository } from 'app_modules/prisma/testing';
import { createSpyObj } from 'jest-createspyobj';

import { CommentService } from './comment.service';

describe('CommentService', () => {
    let service: CommentService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommentService,
                {
                    provide: 'commentPrismaRepository',
                    useValue: createSpyObj(DummyRepository),
                },
                {
                    provide: Logger,
                    useValue: createSpyObj(Logger),
                },
            ],
        }).compile();

        service = module.get(CommentService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
