"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
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

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const maxIndex = testimonials.length - 3;

  const prev = () => setCurrent((prev) => (prev > 0 ? prev - 1 : maxIndex));
  const next = () => setCurrent((prev) => (prev < maxIndex ? prev + 1 : 0));
  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="bg-white/10 text-white py-16 px-6 md:px-20 rounded-3xl mt-20 relative w-[90vw] max-w-[1400px] mx-auto shadow-xl">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
        Word About Us From Our Clients
      </h2>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(current * 100) / 3}%)`,
            width: `${(testimonials.length * 100) / 2.8}%`,
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-1/3 px-4 shrink-0 flex flex-col items-center"
            >
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <Image
                  src={item.image}
                  alt="Client"
                  width={96}
                  height={150}
                  className="rounded-md object-cover"
                />

                <div className="bg-black bg-opacity-70 rounded-xl p-6 text-left max-w-md">
                  <p className="text-sm opacity-60">{item.date}</p>
                  <h3 className="font-semibold text-lg mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-80">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots & Arrows */}
      <div className="flex justify-center mt-12 gap-3">
        <button
          onClick={prev}
          className="-translate-y-1/4 text-grey-100 hover:text-orange-600 transition-colors z-10 mr-5"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>

        {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-orange-500 w-5" : "bg-gray-400"
            } transition-colors`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
        <button
          onClick={next}
          className="-translate-y-1/4 text-grey-100 hover:text-orange-600  transition-colors z-10 ml-5"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
