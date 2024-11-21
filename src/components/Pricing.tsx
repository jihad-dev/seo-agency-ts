import React from 'react';
import { Check, HelpCircle, X } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '999',
    description: 'Perfect for small businesses starting their SEO journey',
    features: [
      'Keyword Research (20 keywords)',
      'Monthly SEO Report',
      'Basic On-Page Optimization',
      'Google My Business Setup',
      'Mobile Optimization',
      'Basic Technical SEO Audit',
    ],
    notIncluded: [
      'Content Creation',
      'Link Building',
      'Local SEO Campaign',
      'Advanced Analytics',
    ],
  },
  {
    name: 'Professional',
    price: '1,999',
    description: 'Ideal for growing businesses seeking competitive advantage',
    features: [
      'Keyword Research (50 keywords)',
      'Weekly SEO Reports',
      'Advanced On-Page Optimization',
      'Content Strategy & Creation',
      'Link Building (10 links/month)',
      'Local SEO Optimization',
      'Technical SEO Implementation',
      'Competitor Analysis',
      'Mobile Optimization',
    ],
    notIncluded: ['International SEO', 'Custom Analytics Dashboard'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '3,999',
    description: 'Comprehensive solution for maximum market dominance',
    features: [
      'Unlimited Keyword Research',
      'Daily SEO Reports',
      'Premium On-Page Optimization',
      'Premium Content Strategy & Creation',
      'Advanced Link Building (25+ links/month)',
      'International SEO',
      'Advanced Technical SEO',
      'Priority Support',
      'Custom Analytics Dashboard',
      'Conversion Rate Optimization',
    ],
  },
];

const faqs = [
  {
    question: 'How long does it take to see results?',
    answer: 'While every project is unique, most clients start seeing improvements in rankings within 3-6 months. Significant results typically become apparent after 6-12 months of consistent SEO work.',
  },
  {
    question: 'Do you require long-term contracts?',
    answer: 'We offer month-to-month services as well as discounted long-term packages. SEO is most effective as a long-term strategy, but we understand the need for flexibility.',
  },
  {
    question: 'What happens if we want to cancel?',
    answer: 'You can cancel your service at any time with 30 days notice. We will provide you with all your SEO data and recommendations for maintaining your rankings.',
  },
  {
    question: 'Do you guarantee first page rankings?',
    answer: 'While we have a strong track record of achieving first page rankings, we do not guarantee specific positions as search engines ultimately control rankings. We focus on sustainable, white-hat SEO practices.',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-600">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {plan.notIncluded?.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-400">
                      <X className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{faq.question}</h4>
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}