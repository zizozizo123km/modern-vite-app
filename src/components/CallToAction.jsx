import React from 'react';

const CallToAction = () => {
  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block text-indigo-400">لا تضيع المزيد من الوقت.</span>
            <span className="block">انضم إلينا اليوم وابدأ رحلتك.</span>
          </h2>
          <div className="mt-10 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow-lg">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                ابدأ تجربتك المجانية
              </a>
            </div>
            <div className="ml-4 inline-flex rounded-md shadow-lg">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-100 transition duration-300 ease-in-out"
              >
                شاهد العروض
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;