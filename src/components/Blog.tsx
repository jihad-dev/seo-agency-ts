import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'The Future of SEO: AI and Machine Learning',
    excerpt: 'Discover how artificial intelligence is reshaping the landscape of search engine optimization.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 16, 2024',
    readTime: '5 min read',
  },
  {
    title: 'Core Web Vitals: Your Complete Guide',
    excerpt: 'Learn how to optimize your website\'s performance metrics for better rankings.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 14, 2024',
    readTime: '8 min read',
  },
  {
    title: 'Local SEO Strategies That Actually Work',
    excerpt: 'Proven techniques to improve your local search presence and attract more customers.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 12, 2024',
    readTime: '6 min read',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest Insights
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Expert tips and strategies to improve your SEO
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                  {post.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center text-blue-600 group-hover:text-blue-700">
                  <span className="text-sm font-medium">Read more</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}