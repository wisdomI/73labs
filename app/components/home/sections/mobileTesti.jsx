'use client'
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const mobileTestimonials = [
  {
    id: 1,
    image: "/hero-img.png",
    date: "May 8, 2020",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-2",
    date: "May 8, 2020",
    title: "Another testimonial title goes here.",
    content:
      "Another testimonial content goes here. Duis diam lacus arcu. Faucibus venenatis felis id augue. Suspendisse sed magna eget nibh in turpis.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-3",
    date: "May 8, 2020",
    title: "Sample client feedback headline.",
    content:
      "Suspendisse sed magna eget nibh in turpis. Lorem ipsum dolor sit amet. Duis diam lacus arcu. Faucibus venenatis felis id augue.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-4",
    date: "May 8, 2020",
    title: "Client voice on what we do.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed magna eget nibh in turpis.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-5",
    date: "May 8, 2020",
    title: "How we helped improve their journey.",
    content:
      "Consequat duis diam lacus arcu. Suspendisse sed magna eget nibh in turpis. Lorem ipsum dolor sit amet.",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-6",
    date: "May 8, 2020",
    title: "One more client's words.",
    content:
      "Lorem ipsum dolor sit amet. Suspendisse sed magna eget nibh in turpis. Duis diam lacus arcu.",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % mobileTestimonials.length);
  const prev = () => setIndex((index - 1 + mobileTestimonials.length) % mobileTestimonials.length);

  return (
    <div className="bg-white/10 flex flex-col items-center justify-center p-8 my-8 rounded-3xl">
        <h2 className="text-white text-2xl font-semibold mb-6">
            Word About Us From Our Clients
        </h2>

        <div className="w-[280px] overflow-hidden rounded-lg">
        <motion.div
          className="flex transition-transform duration-500"
          animate={{ x: `-${index * 100}%` }}
          transition={{ ease: 'easeInOut' }}
        >
          {mobileTestimonials.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[280px] flex flex-col"
            >
              <div className="h-[260px] w-full relative mt-10">
                <Image
                  src={item.image}
                  alt="Client"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="bg-black text-white px-4 py-4 rounded-b-lg">
                <h3 className="text-sm font-semibold leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs leading-snug opacity-70">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        <button onClick={prev}>
          <ChevronLeft className="w-4 h-4 text-white hover:text-orange-600 transition-colors z-10 ml-5" />
        </button>
        {mobileTestimonials.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${i === index ? 'bg-orange-500 w-5' : 'bg-white/50'}`}
          />
        ))}
        <button onClick={next}>
          <ChevronRight className="w-4 h-4 text-white hover:text-orange-600 transition-colors z-10 ml-5" />
        </button>
      </div>
    </div>
  );
}
