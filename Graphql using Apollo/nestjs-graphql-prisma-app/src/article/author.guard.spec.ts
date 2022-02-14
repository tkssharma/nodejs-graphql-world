import { ArticleService } from './article.service';
import { AuthorGuard } from './author.guard';

describe('AuthorGuard', () => {
    it('should be defined', () => {
        const { ArticleService } = jest.createMockFromModule('./article.service');
        expect(new AuthorGuard(new ArticleService())).toBeDefined();
    });
});
