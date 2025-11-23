import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-sm">
      <div className="logo">
        <Link href="/" className="text-xl font-bold text-gray-800 no-underline">Martplace</Link>
      </div>
      
      <div className="flex gap-2">
        <input 
          type="text" 
          placeholder="Search products..." 
          className="px-4 py-2 border border-gray-300 rounded"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">Search</button>
      </div>
      
      <div className="flex gap-6">
        <Link href="/products" className="text-gray-800 no-underline font-medium hover:text-blue-600">Products</Link>
        <Link href="/categories" className="text-gray-800 no-underline font-medium hover:text-blue-600">Categories</Link>
        <Link href="/sell" className="text-gray-800 no-underline font-medium hover:text-blue-600">Sell</Link>
        <Link href="/account" className="text-gray-800 no-underline font-medium hover:text-blue-600">Account</Link>
        <Link href="/cart" className="text-gray-800 no-underline font-medium hover:text-blue-600">Cart (0)</Link>
      </div>
    </nav>
  );
}