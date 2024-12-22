import Hero from './components/Hero';
import Label from './components/Label';
import Product from './components/Product';
import Contact from './components/Contact';
import Footer from './components/Footer';


// data of product!...
const products = [
  {
    name: "Studio Pro",
    price: 299.99,
    description: "Professional studio-quality headphones",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    name: "Wireless Elite",
    price: 199.99,
    description: "Premium wireless experience",
    imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90"
  },
  {
    name: "Sport Series",
    price: 149.99,
    description: "Perfect for active lifestyle",
    imageUrl: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29"
  }
];

export default function Home() {
  return (
    <>
      <Hero />
      <Label />
      <div className="container mx-auto px-4 py-16" id="products">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
      <Contact />
      <Footer/>
    </>
  );
}