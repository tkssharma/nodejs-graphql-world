import { Test, TestingModule } from '@nestjs/testing';

import { SlugService } from './slug.service';

describe('SlugService', () => {
    let service: SlugService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SlugService],
        }).compile();

        service = module.get<SlugService>(SlugService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('generate unique slug', async () => {
        let result = await service.generate('Google', async () => true);
        expect(result).toEqual('google');
        result = await service.generate(
            'Google',
            async (s: string) => {
                return s.length > 'Google'.length;
            },
            5,
        );
        expect(result).toContain('google-');
        expect(result.length).toBeGreaterThan(7);
    });
});
