import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-white dark:from-gray-800/50 dark:to-gray-900 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        <div className="text-center">
          
          {/* Tagline */}
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
            The Ultimate Stack for Modern Web Apps
          </p>
          
          {/* Main Headline */}
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl dark:text-white">
            Build Stunning UIs 
            <span className="block text-indigo-600 mt-2">Faster Than Ever Before</span>
          </h1>
          
          {/* Subtext */}
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Leverage the power of React, Vite, and Tailwind CSS to create scalable, high-performance applications with ease and elegance.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex justify-center space-x-4">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Start Building Today
            </a>
            <a
              href="#learn-more"
              className="inline-flex items-center justify-center px-8 py-3 border border-indigo-200 text-base font-medium rounded-full text-indigo-700 bg-white hover:bg-indigo-50 transition duration-300 dark:bg-gray-800 dark:text-indigo-400 dark:border-indigo-900 dark:hover:bg-gray-700"
            >
              View Documentation
            </a>
          </div>
          
          {/* Mockup Placeholder */}
          <div className="mt-16">
            <div className="mx-auto max-w-5xl">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-2xl p-4 border border-gray-200 dark:border-gray-700 transform transition duration-500 hover:shadow-indigo-500/50">
                <div className="h-72 w-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 text-xl font-medium border border-dashed border-gray-400 dark:border-gray-600">
                  Modern Dashboard Interface Preview
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;