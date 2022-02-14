import { Transform } from 'class-transformer';
import { IsInt, IsOptional, Max } from 'class-validator';

/**
 * Type for query string when request list of articles.
 */
export class GetArticlesDto {
    @IsOptional()
    tag?: string;

    @IsOptional()
    author?: string;

    @IsOptional()
    favorited?: string;

    @IsOptional()
    @IsInt()
    @Transform(Number)
    offset = 0;

    @IsOptional()
    @IsInt()
    @Transform(Number)
    @Max(100)
    limit = 20;
}
