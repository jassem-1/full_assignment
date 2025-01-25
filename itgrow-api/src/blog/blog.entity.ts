import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ nullable: true }) // Optional description
  description: string;

  @Column({ nullable: true }) // Path or URL to the image
  image: string;

  @CreateDateColumn() // Auto-generated creation date
  createdAt: Date;
}
