import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepo: Repository<Blog>,
  ) {}

  async findAll(): Promise<Blog[]> {
    return this.blogRepo.find();
  }

  async findOne(id: number): Promise<Blog> {
    const blog = await this.blogRepo.findOneBy({ id });
    if (!blog) {
      throw new Error(`Blog with id ${id} not found`);
    }
    return blog;
  }

  async create(data: Partial<Blog>): Promise<Blog> {
    const blog = this.blogRepo.create(data);
    return this.blogRepo.save(blog);
  }

  async update(id: number, data: Partial<Blog>): Promise<Blog> {
    await this.blogRepo.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.blogRepo.delete(id);
  }
}
