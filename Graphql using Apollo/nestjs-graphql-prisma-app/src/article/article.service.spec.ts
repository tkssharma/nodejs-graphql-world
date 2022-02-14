import { Test, TestingModule } from '@nestjs/testing';
import { DummyRepository } from 'app_modules/prisma/testing';
import { createSpyObj } from 'jest-createspyobj';

import { TagService } from '../tag/tag.service';
import { ArticleRepository } from './article.repository';
import { ArticleService } from './article.service';
import { SlugService } from './slug/slug.service';

describe('ArticleService', () => {
    let service: ArticleService;
    let testingModule: TestingModule;
    let articleRepository: ArticleRepository;

    beforeEach(async () => {
        testingModule = await Test.createTestingModule({
            providers: [
                {
                    provide: ArticleRepository,
                    useValue: createSpyObj(DummyRepository),
                },
                {
                    provide: 'tagPrismaRepository',
                    useValue: createSpyObj(DummyRepository),
                },
                ArticleService,
                SlugService,
                TagService,
            ],
        }).compile();

        service = testingModule.get(ArticleService);
        articleRepository = testingModule.get(ArticleRepository);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('findMany', async () => {
        await service.findMany({ where: { articleId: { equals: 'a' } } });
        expect(articleRepository.findMany).toHaveBeenCalledWith(
            expect.objectContaining({
                where: {
                    articleId: {
                        equals: 'a',
                    },
                },
            }),
        );
    });
});
