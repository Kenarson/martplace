import Navbar from "../../components/navbar";
export default function ProductPage({
  params
}: {
  params: { id: string }
}) {
  // Sample product data matching the structure from products/page.tsx
  const product = {
    id: params.id,
    title: 'Wireless Headphones',
    price: 199.99,
    description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
    rating: 4.8,
    reviewCount: 125,
    images: [
      '/headphones-main.jpg',
      '/headphones-side.jpg',
      '/headphones-case.jpg'
    ],
    seller: 'AudioTech',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Bluetooth 5.0',
      'Built-in microphone',
      'Touch controls'
    ],
    colors: ['Black', 'Silver', 'Blue']
  };

  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-lg p-4">
            <img 
              src={product.images[0]} 
              alt={product.title}
              className="w-full h-auto rounded"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.images.map((img, i) => (
              <div key={i} className="bg-gray-100 rounded p-2 cursor-pointer">
                <img src={img} alt={`${product.title} view ${i+1}`} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
              ))}
            </div>
            <span className="text-gray-600">{product.rating} ({product.reviewCount} reviews)</span>
          </div>
          
          <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Available Colors:</h3>
            <div className="flex space-x-2">
              {product.colors.map(color => (
                <div 
                  key={color} 
                  className="w-8 h-8 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Features:</h3>
            <ul className="list-disc pl-5">
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              Add to Cart
            </button>
            <button className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium">
              Add to Wishlist
            </button>
          </div>
          
          <div className="mt-6 text-sm text-gray-500">
            Sold by: {product.seller}
          </div>
        </div>
      </div>
    </div> </>
  );
}