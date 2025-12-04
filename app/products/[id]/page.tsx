'use client';

import { useEffect, useState, use } from 'react';
import Navbar from "../../components/navbar";

interface IParams {
  id: string;
}

interface IProduct {
  id: string;
  title: string;
  price: number;
  description?: string;
  rating: number;
  reviewCount: number;
  image: string;
  seller: string;
  images?: string[];
  features?: string[];
  colors?: string[];
}

export default function ProductPage({
  params: paramsPromise,
}: {
  params: Promise<IParams>;
}) {
  const params = use(paramsPromise);
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch product data from JSON based on ID
    const loadProduct = async () => {
      try {
        setLoading(true);
        
        // Fetch semua products dari JSON
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const products = await response.json();
        console.log('Products loaded:', products);
        console.log('Looking for ID:', params.id);
        
        // Cari product berdasarkan ID (ensure string comparison)
        const foundProduct = products.find((p: any) => String(p.id) === String(params.id));
        
        console.log('Found product:', foundProduct);
        
        if (!foundProduct) {
          throw new Error(`Product with ID ${params.id} not found`);
        }
        
        setProduct(foundProduct);
        setError(null);
      } catch (err) {
        console.error('Error loading product:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [params.id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-600">Loading product...</p>
        </div>
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-red-600">{error || 'Product not found'}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg p-4">
              <img 
                src={product.images?.[0] || product.image} 
                alt={product.title}
                className="w-full h-auto rounded"
              />
            </div>
            {product.images && product.images.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((img, i) => (
                  <div key={i} className="bg-gray-100 rounded p-2 cursor-pointer">
                    <img src={img} alt={`${product.title} view ${i+1}`} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            )}
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
                {product.colors?.map(color => (
                  <div 
                    key={color} 
                    className="w-8 h-8 rounded-full border border-gray-300"
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  />
                )) || <p className="text-gray-500">No colors available</p>}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Features:</h3>
              <ul className="list-disc pl-5">
                {product.features?.map((feature, i) => (
                  <li key={i}>{feature}</li>
                )) || <li className="text-gray-500">No features listed</li>}
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
      </div>
    </>
  );
}