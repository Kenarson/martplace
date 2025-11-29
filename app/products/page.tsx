import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    {
      id: '1',
      title: 'Wireless Headphones',
      price: 199.99,
      rating: 4.8,
      reviewCount: 125,
      image: '/headphones.jpg',
      seller: 'AudioTech'
    },
    {
      id: '2',
      title: 'Smart Watch Pro',
      price: 249.99,
      rating: 4.6,
      reviewCount: 89,
      image: '/smartwatch.jpg',
      seller: 'TechGadgets'
    },
    {
      id: '3',
      title: 'Bluetooth Speaker',
      price: 129.99,
      rating: 4.5,
      reviewCount: 64,
      image: '/speaker.jpg',
      seller: 'SoundMaster'
    },
    {
      id: '4',
      title: '4K Action Camera',
      price: 179.99,
      rating: 4.7,
      reviewCount: 112,
      image: '/camera.jpg',
      seller: 'ActionCam'
    },
    {
      id: '5',
      title: 'Ergonomic Keyboard',
      price: 89.99,
      rating: 4.4,
      reviewCount: 47,
      image: '/keyboard.jpg',
      seller: 'PeripheralsPro'
    },
    {
      id: '6',
      title: 'Wireless Mouse',
      price: 49.99,
      rating: 4.3,
      reviewCount: 38,
      image: '/mouse.jpg',
      seller: 'PeripheralsPro'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link 
            key={product.id} 
            href={`/products/${product.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-4">
              <div className="bg-gray-100 rounded-lg aspect-square mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400 mr-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.reviewCount})</span>
              </div>
              <p className="text-xl font-bold mb-1">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">Sold by: {product.seller}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}