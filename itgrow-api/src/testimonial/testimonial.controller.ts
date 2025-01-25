import { Controller, Get, Post, Body } from '@nestjs/common';
import { TestimonialService } from './testimonial.service';

@Controller('testimonials')
export class TestimonialController {
  constructor(private readonly testimonialService: TestimonialService) {}

  @Get()
  findAll() {
    return this.testimonialService.findAll();
  }

  @Post()
  create(@Body() data: { name: string; message: string; avatarUrl?: string }) {
    return this.testimonialService.create(data);
  }
}
