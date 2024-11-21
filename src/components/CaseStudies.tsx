import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

const cases = [
  {
    title: 'E-commerce Revenue Growth',
    category: 'Retail',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    metrics: {
      traffic: '+320%',
      revenue: '+250%',
      rankings: '+45',
    },
  },
  {
    title: 'Local Business Domination',
    category: 'Services',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    metrics: {
      traffic: '+180%',
      leads: '+200%',
      locations: '12',
    },
  },
  {
    title: 'SaaS Market Leadership',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    metrics: {
      traffic: '+400%',
      signups: '+280%',
      keywords: '1.2K',
    },
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Real results for real businesses
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((case_study) => (
            <div key={case_study.title} className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-80 w-full overflow-hidden">
                <img
                  src={case_study.image}
                  alt={case_study.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
              </div>
              <div className="absolute bottom-0 p-6 text-white">
                <span className="text-sm font-medium text-blue-400">
                  {case_study.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold">{case_study.title}</h3>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  {Object.entries(case_study.metrics).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-xl font-bold">{value}</div>
                      <div className="text-sm text-gray-300 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}