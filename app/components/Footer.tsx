import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are dedicated to delivering premium audio experiences through our high-quality headphones.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-gray-400">
              <a href="https://x.com" className="hover:text-white transition-colors" target="_blank">Twitter</a>
              <a href="https://www.facebook.com" className="hover:text-white transition-colors" target="_blank">Facebook</a>
              <a href="https://www.instagram.com/xx._.daniii/" className="hover:text-white transition-colors" target="_blank">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Premium Headphones. Powered By <a href="https://sinceauraagency.vercel.app/" className="hover:text-white transition-colors" target="_blank">Since Aura</a> Agency</p>
        </div>
      </div>
    </footer>
  );
}