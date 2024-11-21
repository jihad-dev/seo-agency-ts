import React from 'react';
import { Menu, X, Search, BarChart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Search className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">SEOxpert</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#case-studies" className="text-gray-700 hover:text-blue-600">Case Studies</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600">Blog</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Free Audit
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-700">Services</a>
            <a href="#case-studies" className="block px-3 py-2 text-gray-700">Case Studies</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-700">Pricing</a>
            <a href="#blog" className="block px-3 py-2 text-gray-700">Blog</a>
            <button className="w-full text-left px-3 py-2 text-blue-600">
              Free Audit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}