import React from 'react';
// import { BarChart, Users, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Drive More Traffic</span>
                <span className="block text-blue-600">With Expert SEO</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Boost your online visibility with data-driven SEO strategies. 
                We've helped 100+ businesses achieve page 1 rankings.
              </p>
              
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    Get Free SEO Audit
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-600 bg-blue-50 hover:bg-blue-100 md:py-4 md:text-lg md:px-10">
                    View Case Studies
                  </button>
                </div>
              </div>

              {/* <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex justify-center">
                    <BarChart className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="mt-2 text-3xl font-bold text-gray-900">300%</p>
                  <p className="text-sm text-gray-500">Average Traffic Increase</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="mt-2 text-3xl font-bold text-gray-900">100+</p>
                  <p className="text-sm text-gray-500">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="mt-2 text-3xl font-bold text-gray-900">#1</p>
                  <p className="text-sm text-gray-500">Rankings Achieved</p>
                </div>
              </div> */}
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://wp.themepure.net/seomy/wp-content/uploads/2023/09/optimize-bg-2.png"
          alt="SEO Analytics Dashboard"
        />
      </div>
    </div>
  );
}












