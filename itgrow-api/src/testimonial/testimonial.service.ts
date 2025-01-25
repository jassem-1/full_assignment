import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Testimonial } from './testimonial.entity';

@Injectable()
export class TestimonialService {
  constructor(
    @InjectRepository(Testimonial)
    private testimonialRepo: Repository<Testimonial>,
  ) {}

  findAll() {
    return this.testimonialRepo.find();
  }

  create(data: Partial<Testimonial>) {
    const testimonial = this.testimonialRepo.create(data);
    return this.testimonialRepo.save(testimonial);
  }
}
