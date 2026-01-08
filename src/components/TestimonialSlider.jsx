import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "The architecture provided by the team was robust, scalable, and incredibly easy to maintain. It drastically improved our deployment pipeline.",
    name: "Sarah Chen",
    title: "CTO, Tech Innovators",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29329?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
  },
  {
    id: 2,
    quote: "As a Senior Frontend Architect, I appreciate clean code. Their implementation of React and Tailwind was flawless and highly performant.",
    name: "Michael Johnson",
    title: "Lead Developer, Global Solutions",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
  },
  {
    id: 3,
    quote: "Exceptional attention to detail in the UI/UX design. The component library they built is reusable and perfectly documented.",
    name: "Emily Rodriguez",
    title: "Product Manager, Creative Labs",
    avatar: "https://images.unsplash.com/photo-1506794778202-dfa670e024e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 4,
  },
  {
    id: 4,
    quote: "We saw immediate performance gains after migrating to the new stack they recommended. Truly experts in modern web development.",
    name: "David Lee",
    title: "VP of Engineering, DataCorp",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5,
  },
];

const TestimonialCard = ({ quote, name, title, avatar, rating }) => (
  <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 min-w-[300px] lg:min-w-0 h-full">
    
    {/* Rating Stars */}
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
        />
      ))}
    </div>

    {/* Quote */}
    <p className="text-lg font-medium text-gray-700 italic mb-6 flex-grow">
      "{quote}"
    </p>

    {/* Author Info */}
    <div className="flex items-center mt-auto">
      <img 
        className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-500 ring-offset-2" 
        src={avatar} 
        alt={name} 
      />
      <div className="ml-4">
        <p className="text-base font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-indigo-600">{title}</p>
      </div>
    </div>
  </div>
);

const TestimonialSlider = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            What Our Clients Say
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Hear directly from the professionals who have experienced the quality and dedication of our architectural solutions.
          </p>
        </div>

        {/* Testimonial Grid/Slider Container */}
        <div className="relative">
          
          {/* Cards Container - Uses overflow-x-auto for mobile "slider" feel */}
          <div className="flex space-x-6 pb-4 overflow-x-auto snap-x snap-mandatory scroll-smooth lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:gap-8 lg:space-x-0">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="snap-center flex-shrink-0 lg:flex-shrink">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          {/* Optional: Navigation Controls (Hidden on mobile, visible on desktop for visual flair) */}
          <div className="hidden lg:flex absolute top-1/2 transform -translate-y-1/2 w-full justify-between pointer-events-none px-2">
            <button 
              className="p-3 bg-white rounded-full shadow-lg text-indigo-600 hover:bg-indigo-50 transition duration-150 pointer-events-auto" 
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              className="p-3 bg-white rounded-full shadow-lg text-indigo-600 hover:bg-indigo-50 transition duration-150 pointer-events-auto" 
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Optional: Pagination Dots (Visible only on mobile/small screens) */}
        <div className="flex justify-center mt-8 space-x-2 lg:hidden">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`block w-3 h-3 rounded-full transition-colors duration-300 ${
                index === 0 ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            ></span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSlider;