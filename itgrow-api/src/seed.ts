import { DataSource } from 'typeorm';
import { Blog } from './blog/blog.entity';
import { Testimonial } from './testimonial/testimonial.entity';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

console.log('Loading environment variables...');
console.log({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  url: process.env.DATABASE_URL,
});

const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Blog, Testimonial],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
  },
});

const seedData = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database connection established.');

    const blogRepo = AppDataSource.getRepository(Blog);
    const testimonialRepo = AppDataSource.getRepository(Testimonial);

    // Clearing existing data
    console.log('Clearing existing data...');
    await blogRepo.clear();
    console.log('Blog data cleared.');

    await testimonialRepo.clear();
    console.log('Testimonial data cleared.');

    const blogs = [
      {
        title: 'The Future of Tech',
        content: 'Tech is evolving rapidly...',
        description: 'A short description about the future of tech.',
        date: '2025-01-24', // ISO date string
        image:
          'https://res.cloudinary.com/dbhrjqj53/image/upload/v1737721374/Container-1_ygcgig.png', // Replace with your Cloudinary URL
      },
      {
        title: 'Next.js Best Practices',
        content: 'Here are some tips...',
        description: 'Learn the best practices for Next.js development.',
        date: '2025-01-20',
        image:
          'https://res.cloudinary.com/dbhrjqj53/image/upload/v1737721374/Container_gmaac1.png', // Replace with your Cloudinary URL
      },
      {
        title: 'NestJS in Action',
        content: 'Learn how to build...',
        description: 'A hands-on guide to building apps with NestJS.',
        date: '2025-01-18',
        image:
          'https://res.cloudinary.com/dbhrjqj53/image/upload/v1737721374/Container-2_urhupo.png', // Replace with your Cloudinary URL
      },
    ];

    console.log('Adding blog data...');
    await blogRepo.save(blogs);
    console.log('Blog data added.');

    // Add mock data for testimonials
    const testimonials = [
      {
        name: 'Alice',
        message: 'Great service!',
        avatarUrl:
          'https://orlandosydney.com/wp-content/uploads/2023/04/Sydney-Headshots-Off-White-to-Mid-Grey-Radial-Background-Option.-By-Orlandosydney.com-00640.jpg',
      },
      {
        name: 'Bob',
        message: 'Loved the experience.',
        avatarUrl:
          'https://media.istockphoto.com/id/1132090209/photo/close-up-portrait-of-beautiful-woman.jpg?s=612x612&w=0&k=20&c=XkEfMamqQfVCbWXUYinIX64erT4RMizGLy5UFy69-6w=',
      },
      {
        name: 'Charlie',
        message: 'Highly recommended!',
        avatarUrl:
          'https://images.squarespace-cdn.com/content/v1/651998e05a97287d391f2a87/b85fcf71-1af8-4e1f-840e-783963e16049/Black-and-White-Headshots-Nearme-karenvaisman-photographer-Ventura-losangeles-Burbank-WoodlandHills-thousandoaks-tny-17.jpg',
      },
    ];

    console.log('Adding testimonial data...');
    await testimonialRepo.save(testimonials);
    console.log('Testimonial data added.');

    console.log('Mock data has been added successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
      console.log('Database connection closed.');
    }
  }
};

seedData();
