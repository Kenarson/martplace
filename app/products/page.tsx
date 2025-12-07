'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Product {
  id: string;
  title: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  seller: string;
  description?: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <p className="text-center text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <p className="text-center text-red-600">Error: {error}</p>
      </div>
    );
  }

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
