import Link from 'next/link';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Discover Amazing Products in Our Marketplace
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Shop from thousands of sellers with the best prices and quality guaranteed.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/products" 
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Browse Products
              </Link>
              <Link 
                href="/sell" 
                className="px-8 py-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Sell Your Items
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-2 rounded-xl shadow-xl">
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Hero Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Marketplace</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Secure Payments",
                description: "All transactions are encrypted and secure",
                icon: "🔒"
              },
              {
                title: "Fast Shipping",
                description: "Get your items delivered quickly",
                icon: "🚚"
              },
              {
                title: "24/7 Support",
                description: "Our team is always here to help",
                icon: "💬"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start shopping?</h2>
          <p className="text-xl mb-8">Join thousands of happy customers today!</p>
          <Link 
            href="/signup" 
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
}