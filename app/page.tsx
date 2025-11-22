import Navbar from './components/navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      <div className="container">
        <h1>Welcome to Marketplace</h1>
        <p>Browse our selection of products below</p>
        
        {/* Product listings or other content would go here */}
      </div>
    </main>
  );
}