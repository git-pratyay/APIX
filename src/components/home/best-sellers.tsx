import { Link } from 'react-router-dom';
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Classic Black Hoodie",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Essential White Tee",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Gray Melange Hoodie",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Vintage Print Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export function BestSellers() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Best Sellers</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg flex flex-col">
              <div className="w-full h-64 bg-gray-200 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-sm text-gray-700 font-medium">
                  <a href={`/product/${product.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <div className="mt-2 flex items-center">
                  <span className="text-yellow-500 text-sm mr-1">★★★★★</span>
                  <span className="text-gray-500 text-sm">(0)</span>
                </div>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                  Premium quality cotton blend hoodie perfect for any casual occasion.
                </p>
                <p className="mt-4 text-lg font-semibold text-gray-900">${product.price}</p>
                <div className="mt-4 flex space-x-2">
                  <button
                    className="flex-1 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-400"
                    onClick={() => {
                      // Add to cart logic here
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="flex-1 bg-gray-200 text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-300"
                    onClick={() => {
                      // Buy now logic here
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      <div className="text-center py-9">
      <Link to="/products" className="px-6 py-3 bg-gray-100 text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-200">
      View All Products
      </Link>
      </div>
      </div>
    </div>
  );
}
