import React from 'react';

const pricingPlans = [
  {
    name: 'Basic',
    price: '$19',
    duration: '/month',
    description: 'Ideal for small teams and startups getting started.',
    features: [
      '5 Projects',
      '10 GB Storage',
      'Basic Analytics',
      'Community Support',
    ],
    isFeatured: false,
  },
  {
    name: 'Professional',
    price: '$49',
    duration: '/month',
    description: 'Everything you need for growing businesses and scale.',
    features: [
      'Unlimited Projects',
      '100 GB Storage',
      'Advanced Analytics',
      'Priority Email Support',
      'Custom Branding',
    ],
    isFeatured: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    duration: '/month',
    description: 'Dedicated infrastructure and support for large organizations.',
    features: [
      'Unlimited Projects',
      'Unlimited Storage',
      'Real-time Reporting',
      '24/7 Phone Support',
      'SLA Guarantee',
    ],
    isFeatured: false,
  },
];

const PricingTable = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            The right plan for your business
          </p>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Start small and scale up as you grow. Cancel anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`
                flex flex-col rounded-xl shadow-2xl overflow-hidden transition duration-300 hover:shadow-indigo-500/50
                ${plan.isFeatured 
                  ? 'bg-white dark:bg-gray-800 ring-4 ring-indigo-500 transform lg:scale-[1.03]' 
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                }
              `}
            >
              {/* Plan Header */}
              <div className="p-8 sm:p-10 flex-grow">
                <h3 className="text-2xl font-semibold leading-8 text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  {plan.description}
                </p>
                <div className="mt-4 flex items-center">
                  <span className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="ml-3 text-xl font-medium text-gray-500 dark:text-gray-400">
                    {plan.duration}
                  </span>
                </div>
                
                {/* Features List */}
                <ul role="list" className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* Checkmark Icon */}
                        <svg className="h-6 w-6 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-600 dark:text-gray-300">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="p-8 pt-0 md:p-10 md:pt-0">
                <a
                  href="#"
                  className={`
                    block w-full py-3 px-6 border border-transparent rounded-lg text-center font-semibold transition duration-150 ease-in-out
                    ${plan.isFeatured
                      ? 'text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/50'
                      : 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-300 dark:hover:bg-indigo-800'
                    }
                  `}
                >
                  Start your trial
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;