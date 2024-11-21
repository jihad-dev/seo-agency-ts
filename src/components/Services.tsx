import React from 'react';
import { Search, BarChart2, Globe, Code, PenTool, LineChart } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'On-Page SEO',
    description: 'Optimize your content, meta tags, and internal linking structure for maximum visibility.',
  },
  {
    icon: Globe,
    title: 'Off-Page SEO',
    description: 'Build high-quality backlinks and improve your domain authority.',
  },
  {
    icon: Code,
    title: 'Technical SEO',
    description: 'Enhance site speed, mobile optimization, and crawlability.',
  },
  {
    icon: LineChart,
    title: 'Local SEO',
    description: 'Dominate local search results and attract nearby customers.',
  },
  {
    icon: PenTool,
    title: 'Content Strategy',
    description: 'Create engaging, SEO-optimized content that converts.',
  },
  {
    icon: BarChart2,
    title: 'Analytics & Reporting',
    description: 'Track your success with detailed performance metrics.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive SEO solutions tailored to your business needs
          </p>
        </div>

        <div className="mt-20 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-10 transition duration-300" />
              <div className="relative">
                <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-700">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg
                    className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}