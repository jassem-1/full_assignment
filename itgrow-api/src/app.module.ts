import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TestimonialModule } from './testimonial/testimonial.module';
import { BlogModule } from './blog/blog.module';
import { Testimonial } from './testimonial/testimonial.entity';
import { Blog } from './blog/blog.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cu7c3utumphs73d4ugmg-a.oregon-postgres.render.com', // Replace with your database host
      port: 5432,
      username: 'itgrowtest_user', // Replace with your database username
      password: 'PQKrkzjPbQlN9GkYCZpqzT9lP2hXjpp6', // Replace with your database password
      database: 'itgrowtest', // Replace with your database name
      entities: [Testimonial, Blog], // Add your entities here
      synchronize: true, // Disable in production
      ssl: {
        rejectUnauthorized: false, // Required for most cloud-hosted databases
      },
    }),

    TestimonialModule,
    BlogModule,
  ],
})
export class AppModule {}
