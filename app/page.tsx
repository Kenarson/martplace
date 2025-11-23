import Navbar from './components/navbar';
import Footer from './components/footer';
import Cards from './components/cards';
import Landing from './components/landing';
export default function Home() {
  // Dummy product data
  const dummyProducts = [
    {
      id: '1',
      title: 'Premium Headphones',
      price: 199.99,
      imageUrl: '/placeholder-headphones.jpg',
      rating: 4,
      reviewCount: 128,
      seller: 'AudioTech'
    },
    {
      id: '2',
      title: 'Wireless Keyboard',
      price: 59.99,
      imageUrl: '/placeholder-keyboard.jpg',
      rating: 5,
      reviewCount: 87,
      seller: 'TechGadgets'
    },
    {
      id: '3',
      title: 'Smart Watch',
      price: 249.99,
      imageUrl: '/placeholder-watch.jpg',
      rating: 4,
      reviewCount: 215,
      seller: 'WearableTech'
    }
  ];

  return (
    <main>
      <Navbar />
      <Landing />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2"></h1>
        <p className="text-gray-600 mb-8"></p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyProducts.map(product => (
            <Cards key={product.id} {...product} />
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}