import React from 'react';
import { Award, Users, Globe, Zap } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Years Experience', value: '10+' },
  { icon: Users, label: 'Team Members', value: '25' },
  { icon: Globe, label: 'Countries Served', value: '15' },
  { icon: Zap, label: 'Projects Completed', value: '500+' },
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'SEO Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Technical SEO Lead',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Content Strategist',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About SEOxpert
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of SEO experts passionate about helping businesses achieve their full potential in search rankings.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <p className="mt-4 text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Meet Our Leadership
          </h3>
          <div className="grid gap-12 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative mx-auto w-48 h-48 mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 rounded-full ring-2 ring-blue-600 ring-offset-2"></div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">{member.name}</h4>
                <p className="text-blue-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}