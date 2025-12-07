import Link from 'next/link';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Check if user is logged in from localStorage
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
      setUserName(JSON.parse(user).name);
    }
  }, []);

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
        {isLoggedIn ? (
          <>
            <span className="text-gray-800 font-medium">Welcome, {userName}</span>
            <Link href="/account" className="text-gray-800 no-underline font-medium hover:text-blue-600">Account</Link>
          </>
        ) : (
          <Link href="/account" className="text-gray-800 no-underline font-medium hover:text-blue-600">Login</Link>
        )}
        <Link href="/cart" className="text-gray-800 no-underline font-medium hover:text-blue-600">Cart (0)</Link>
      </div>
    </nav>
  );
}