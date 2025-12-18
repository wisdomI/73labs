'use client'

import { useScreenSize } from '@/app/hooks/useScreenSize';
import TestimonialsCarousel from './desktopTestimonial';
import TestimonialSlider from './mobileTesti';

const Testimonial = () => {
  const width = useScreenSize();

  const isMobile = width < 768; // Tailwind's 'md' breakpoint

  return (
    <div>
      {isMobile ? (
        <TestimonialSlider />
      ) : (
        <TestimonialsCarousel />
      )}
    </div>
  );
};

export default Testimonial;
