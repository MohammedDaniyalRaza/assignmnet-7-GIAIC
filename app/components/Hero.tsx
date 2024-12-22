export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">Premium Headphones</h1>
        <p className="text-xl mb-8">Experience crystal clear sound with our premium collection</p>
        <button 
          className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}