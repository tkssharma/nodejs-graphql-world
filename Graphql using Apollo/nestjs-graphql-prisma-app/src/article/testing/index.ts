import { Prisma } from '@prisma/client';

type ArticlePayload = Prisma.ArticleGetPayload<{
    include: {
        author: true;
        tags: true;
        favoritedBy: true;
        comments: true;
    };
}>;

export function createArticle(parts: Partial<ArticlePayload> = {}): ArticlePayload {
    return {
        articleId: 'article_id',
        slug: 'article_slug',
        title: 'article_title',
        description: 'article_description',
        body: 'article_body',
        tags: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        favoritesCount: 0,
        author: {
            userId: 'author_id',
            name: 'author_name',
            email: 'author_name@diamond.net',
            password: '',
            bio: null,
            image: null,
        },
        authorId: 'author_id',
        favoritedBy: [],
        comments: [],
        ...parts,
    };
}
