interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export default function Product({ name, price, description, imageUrl }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-2xl font-bold text-indigo-600">${(price)}</p>
      </div>
    </div>
  );
}