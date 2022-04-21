import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Post } from '@prisma/client';
import { NewPost, UpdatePost } from 'src/graphql';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  // Get a single post
  async post(id: string): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  // Get multiple posts
  async posts(): Promise<Post[]> {
    return this.prisma.post.findMany({});
  }

  // Create a post
  async createPost(input: NewPost): Promise<Post> {
    return this.prisma.post.create({
      data: input,
    });
  }

  // Update a post
  async updatePost(params: UpdatePost): Promise<Post> {
    const { id, published, title, content } = params;
    return this.prisma.post.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...(published && { published }),
        ...(title && { title }),
        ...(content && { content }),
      },
    });
  }

  // delete a post
  async deletePost(id: string): Promise<Post> {
    return this.prisma.post.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}