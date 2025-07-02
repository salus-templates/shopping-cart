import React, { useState, useEffect } from 'react';

// Mock API calls
const mockFetchProducts = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return [
    {
      id: 'prod1',
      name: 'Wireless Headphones',
      price: 99.99,
      imageUrl: 'https://placehold.co/300x200/FFD700/000000?text=Headphones',
      description: 'High-fidelity sound with noise cancellation.'
    },
    {
      id: 'prod2',
      name: 'Smartwatch',
      price: 199.99,
      imageUrl: 'https://placehold.co/300x200/87CEEB/000000?text=Smartwatch',
      description: 'Track your fitness and receive notifications.'
    },
    {
      id: 'prod3',
      name: 'Portable Bluetooth Speaker',
      price: 49.99,
      imageUrl: 'https://placehold.co/300x200/98FB98/000000?text=Speaker',
      description: 'Compact and powerful sound on the go.'
    },
    {
      id: 'prod4',
      name: 'Ergonomic Office Chair',
      price: 249.99,
      imageUrl: 'https://placehold.co/300x200/DDA0DD/000000?text=Chair',
      description: 'Comfortable and supportive for long working hours.'
    },
    {
      id: 'prod5',
      name: '4K UHD Monitor',
      price: 399.99,
      imageUrl: 'https://placehold.co/300x200/F08080/000000?text=Monitor',
      description: 'Stunning visuals for work and entertainment.'
    },
    {
      id: 'prod6',
      name: 'Gaming Keyboard',
      price: 79.99,
      imageUrl: 'https://placehold.co/300x200/ADD8E6/000000?text=Keyboard',
      description: 'Mechanical keyboard with RGB lighting.'
    },
    {
      id: 'prod7',
      name: 'Gaming Mouse',
      price: 39.99,
      imageUrl: 'https://placehold.co/300x200/FFB6C1/000000?text=Mouse',
      description: 'High-precision sensor for competitive gaming.'
    },
    {
      id: 'prod8',
      name: 'Webcam 1080p',
      price: 59.99,
      imageUrl: 'https://placehold.co/300x200/DAA520/000000?text=Webcam',
      description: 'Full HD video calls and streaming.'
    },
    {
      id: 'prod9',
      name: 'External SSD 1TB',
      price: 129.99,
      imageUrl: 'https://placehold.co/300x200/B0C4DE/000000?text=SSD',
      description: 'Fast and portable storage solution.'
    },
    {
      id: 'prod10',
      name: 'USB-C Hub',
      price: 29.99,
      imageUrl: 'https://placehold.co/300x200/F4A460/000000?text=USB-C+Hub',
      description: 'Expand your laptop\'s connectivity with multiple ports.'
    },
    {
      id: 'prod11',
      name: 'Noise-Cancelling Earbuds',
      price: 129.99,
      imageUrl: 'https://placehold.co/300x200/C0C0C0/000000?text=Earbuds',
      description: 'Compact earbuds with active noise cancellation.'
    },
    {
      id: 'prod12',
      name: 'Smart Home Hub',
      price: 89.99,
      imageUrl: 'https://placehold.co/300x200/D8BFD8/000000?text=Smart+Hub',
      description: 'Control all your smart devices from one place.'
    },
    {
      id: 'prod13',
      name: 'Robot Vacuum Cleaner',
      price: 299.99,
      imageUrl: 'https://placehold.co/300x200/AFEEEE/000000?text=Vacuum',
      description: 'Automated cleaning for a spotless home.'
    },
    {
      id: 'prod14',
      name: 'Digital Camera',
      price: 499.99,
      imageUrl: 'https://placehold.co/300x200/F5DEB3/000000?text=Camera',
      description: 'Capture stunning photos and videos.'
    },
    {
      id: 'prod15',
      name: 'Portable Projector',
      price: 179.99,
      imageUrl: 'https://placehold.co/300x200/9ACD32/000000?text=Projector',
      description: 'Enjoy movies anywhere with a compact projector.'
    },
    {
      id: 'prod16',
      name: 'Fitness Tracker',
      price: 69.99,
      imageUrl: 'https://placehold.co/300x200/FFA07A/000000?text=Fitness+Tracker',
      description: 'Monitor your activity, heart rate, and sleep.'
    },
    {
      id: 'prod17',
      name: 'Electric Toothbrush',
      price: 45.99,
      imageUrl: 'https://placehold.co/300x200/BDB76B/000000?text=Toothbrush',
      description: 'Advanced cleaning for healthier gums.'
    },
    {
      id: 'prod18',
      name: 'Air Fryer',
      price: 89.99,
      imageUrl: 'https://placehold.co/300x200/E0FFFF/000000?text=Air+Fryer',
      description: 'Cook healthier meals with less oil.'
    },
    {
      id: 'prod19',
      name: 'Coffee Maker',
      price: 75.99,
      imageUrl: 'https://placehold.co/300x200/D2B48C/000000?text=Coffee+Maker',
      description: 'Brew your perfect cup of coffee every morning.'
    },
    {
      id: 'prod20',
      name: 'Smart Light Bulbs (2-pack)',
      price: 25.99,
      imageUrl: 'https://placehold.co/300x200/F0F8FF/000000?text=Smart+Bulbs',
      description: 'Control your lighting with your voice or app.'
    },
  ];
};

const mockLogin = async (passkey) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  // Simple mock: any passkey works for now
  return passkey === '12345'; // Example passkey
};

const mockPlaceOrder = async (orderDetails) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Mock Order Placed:', orderDetails);
  // Simulate success
  return { success: true, message: 'Order placed successfully!', orderId: 'ORD' + Date.now() };
};

// --- Components ---

const LoginPage = ({ onLogin }) => {
  const [passkey, setPasskey] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    const success = await mockLogin(passkey);
    setIsLoading(false);
    if (success) {
      onLogin();
    } else {
      setError('Invalid passkey. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 p-4">
      <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200 dark:border-gray-600">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 dark:text-white mb-8">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="passkey" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Passkey
            </label>
            <input
              type="password"
              id="passkey"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-500 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base transition duration-150 ease-in-out bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
              value={passkey}
              onChange={(e) => setPasskey(e.target.value)}
              required
              placeholder="Enter your passkey (e.g., 12345)"
            />
          </div>
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 min-h-screen">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-600">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-xl"
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/300x200/CCCCCC/000000?text=Image+Error`; }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{product.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">${product.price.toFixed(2)}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CartPage = ({ cartItems, updateCartItemQuantity, removeFromCart, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 min-h-screen">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300 text-lg">Your cart is empty. Start shopping!</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 p-6">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b border-gray-200 dark:border-gray-600 pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg shadow-sm"
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/80x80/CCCCCC/000000?text=Img`; }}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 dark:border-gray-500 rounded-lg">
                    <button
                      onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-l-lg transition cursor-pointer"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border-x border-gray-300 dark:border-gray-500 text-gray-800 dark:text-white">{item.quantity}</span>
                    <button
                      onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-r-lg transition cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 transition duration-200 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t-2 border-gray-200 dark:border-gray-600 flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">Total:</span>
            <span className="text-3xl font-extrabold text-blue-700 dark:text-blue-400">${total.toFixed(2)}</span>
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={onCheckout}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const CheckoutPage = ({ cartItems, onOrderPlaced, onBackToCart }) => {
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderMessage, setOrderMessage] = useState('');

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = async () => {
    if (!deliveryAddress.trim()) {
      setOrderMessage('Please enter a delivery address.');
      return;
    }
    setIsPlacingOrder(true);
    setOrderMessage('');

    const orderDetails = {
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount: total,
      deliveryAddress: deliveryAddress,
      orderDate: new Date().toISOString(),
    };

    try {
      const result = await mockPlaceOrder(orderDetails);
      if (result.success) {
        // Pass both the mock API result and the constructed orderDetails
        onOrderPlaced(result, orderDetails);
      } else {
        setOrderMessage('Failed to place order. Please try again.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      setOrderMessage('An error occurred while placing your order.');
    } finally {
      setIsPlacingOrder(false);
    }
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 min-h-screen">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">Checkout</h2>
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 p-8">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Order Summary</h3>
        <div className="space-y-4 mb-8">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center text-gray-700 dark:text-gray-200">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="border-t-2 border-gray-200 dark:border-gray-600 pt-6 flex justify-between items-center mb-8">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">Total:</span>
          <span className="text-3xl font-extrabold text-blue-700 dark:text-blue-400">${total.toFixed(2)}</span>
        </div>

        <div className="mb-8">
          <label htmlFor="deliveryAddress" className="block text-lg font-medium text-gray-800 dark:text-white mb-3">
            Delivery Address
          </label>
          <textarea
            id="deliveryAddress"
            rows="4"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-500 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base transition duration-150 ease-in-out bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            required
            placeholder="Enter your full delivery address including street, city, and postal code."
          ></textarea>
        </div>

        {orderMessage && (
          <p className={`text-center text-md mb-4 ${orderMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
            {orderMessage}
          </p>
        )}

        <div className="flex justify-between items-center mt-8">
          <button
            onClick={onBackToCart}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            Back to Cart
          </button>
          <button
            onClick={handlePlaceOrder}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-200 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            disabled={isPlacingOrder || cartItems.length === 0}
          >
            {isPlacingOrder ? (
              <svg className="animate-spin h-5 w-5 text-white inline-block mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Place Order'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const OrderSuccessPage = ({ orderDetails, onContinueShopping }) => {
  if (!orderDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-800 dark:to-orange-900 p-4">
        <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-2xl w-full max-w-md text-center">
          <h2 className="text-3xl font-extrabold text-red-700 dark:text-red-400 mb-6">Order Not Found</h2>
          <p className="text-gray-700 dark:text-gray-200 text-lg mb-8">
            It looks like there was an issue retrieving your order details.
          </p>
          <button
            onClick={onContinueShopping}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-800 dark:to-blue-900 p-4">
      <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-2xl w-full max-w-2xl text-center border border-gray-200 dark:border-gray-600">
        <h2 className="text-4xl font-extrabold text-green-700 dark:text-green-400 mb-6">Thank You for Your Order!</h2>
        <p className="text-gray-700 dark:text-gray-200 text-xl mb-8">
          Your order <span className="font-bold text-blue-600 dark:text-blue-400">#{orderDetails.orderId}</span> has been placed successfully.
        </p>

        <div className="text-left mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-inner">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Order Summary:</h3>
          <div className="space-y-3">
            {orderDetails.items.map((item) => (
              <div key={item.id} className="flex justify-between items-center text-gray-700 dark:text-gray-200">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4 flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">Total Amount:</span>
            <span className="text-2xl font-extrabold text-blue-700 dark:text-blue-400">${orderDetails.totalAmount.toFixed(2)}</span>
          </div>
        </div>

        <div className="text-left mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-inner">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Delivery Details:</h3>
          <p className="text-gray-700 dark:text-gray-200 text-lg">
            Your order will be delivered to:
            <br />
            <span className="font-semibold">{orderDetails.deliveryAddress}</span>
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
            Order Date: {new Date(orderDetails.orderDate).toLocaleString()}
          </p>
        </div>

        <button
          onClick={onContinueShopping}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

const OrderListPage = ({ allOrders, onContinueShopping }) => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 min-h-screen">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">Your Past Orders</h2>
      {allOrders.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300 text-lg">You haven't placed any orders yet.</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-8">
          {allOrders.map((order) => (
            <div key={order.orderId} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 p-6">
              <div className="flex justify-between items-center mb-4 border-b border-gray-200 dark:border-gray-600 pb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Order ID: <span className="text-blue-600 dark:text-blue-400">{order.orderId}</span></h3>
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  {new Date(order.orderDate).toLocaleString()}
                </span>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 dark:text-gray-200 font-semibold mb-2">Items:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  {order.items.map((item) => (
                    <li key={item.id}>
                      {item.name} x {item.quantity} (${(item.price * item.quantity).toFixed(2)})
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 dark:text-gray-200 font-semibold mb-2">Delivery Address:</p>
                <p className="text-gray-600 dark:text-gray-300">{order.deliveryAddress}</p>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-600 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900 dark:text-white">Total:</span>
                <span className="text-xl font-extrabold text-blue-700 dark:text-blue-400">${order.totalAmount.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-10 text-center">
        <button
          onClick={onContinueShopping}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};


// --- Main App Component ---
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [allOrders, setAllOrders] = useState([]); // New state for all orders
  const [currentPage, setCurrentPage] = useState('products'); // 'products', 'cart', 'checkout', 'orderSuccess', 'orderList'
  const [orderPlacedDetails, setOrderPlacedDetails] = useState(null); // State for the most recently placed order details
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    }
    // Then check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Apply theme class to HTML element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme); // Persist theme preference
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // Only update if user hasn't manually set a theme (or if you want it to always follow system)
      // For this example, we'll let manual override persist, but if localStorage is cleared, it defaults to system.
      if (!localStorage.getItem('theme')) { // Only auto-switch if no manual theme is set
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);


  // Load state from localStorage on initial render
  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const storedAllOrders = JSON.parse(localStorage.getItem('allOrders')) || []; // Load all orders
    setIsLoggedIn(storedLoggedIn);
    setCartItems(storedCartItems);
    setAllOrders(storedAllOrders); // Set all orders

    // Fetch products
    const fetchProducts = async () => {
      const fetchedProducts = await mockFetchProducts();
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('allOrders', JSON.stringify(allOrders)); // Persist all orders
  }, [allOrders]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('products');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCartItems([]);
    setAllOrders([]); // Clear all orders on logout
    localStorage.clear(); // Clear all local storage on logout
    setCurrentPage('products'); // Go back to products page after logout
    setOrderPlacedDetails(null); // Clear any previous order details
    // Reset theme to system default on logout/reset for a cleaner restart
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  };

  const addToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productToAdd.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  const updateCartItemQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Called by CheckoutPage on successful order placement
  const handleOrderPlaced = (apiResult, orderDetails) => {
    const fullOrder = { ...orderDetails, orderId: apiResult.orderId };
    setOrderPlacedDetails(fullOrder);
    setAllOrders((prevOrders) => [...prevOrders, fullOrder]); // Add new order to allOrders
    setCartItems([]); // Clear cart after successful order
    setCurrentPage('orderSuccess'); // Navigate to the new order success page
  };

  const handleContinueShopping = () => {
    setOrderPlacedDetails(null); // Clear order details
    setCurrentPage('products'); // Navigate back to product list
  };

  const handleResetApp = () => {
    if (window.confirm('Are you sure you want to reset the entire application? This will clear all data.')) {
      localStorage.clear();
      setIsLoggedIn(false);
      setCartItems([]);
      setAllOrders([]); // Clear all orders on reset
      setProducts([]); // Re-fetch products on reset
      setCurrentPage('products');
      setOrderPlacedDetails(null); // Clear any previous order details
      // Re-fetch products after clearing to ensure fresh state
      const fetchProducts = async () => {
        const fetchedProducts = await mockFetchProducts();
        setProducts(fetchedProducts);
      };
      fetchProducts();
      // Reset theme to system default on logout/reset for a cleaner restart
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <>
          {/* Header */}
          <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center sticky top-0 z-10 rounded-b-xl">
            <h1 className="text-3xl font-extrabold text-blue-700 dark:text-blue-400">Shopping Cart</h1>
            <nav className="flex items-center space-x-6">
              <button
                onClick={() => setCurrentPage('products')}
                className={`text-lg font-medium ${currentPage === 'products' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'} pb-1 transition-colors cursor-pointer`}
              >
                Products
              </button>
              <button
                onClick={() => setCurrentPage('cart')}
                className={`text-lg font-medium ${currentPage === 'cart' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'} pb-1 transition-colors relative cursor-pointer`}
              >
                Cart
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                    {cartItems.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setCurrentPage('orderList')}
                className={`text-lg font-medium ${currentPage === 'orderList' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'} pb-1 transition-colors cursor-pointer`}
              >
                Orders
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                title="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
              >
                Logout
              </button>
              <button
                onClick={handleResetApp}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
              >
                Reset App
              </button>
            </nav>
          </header>

          {/* Main Content */}
          <main className="container mx-auto py-8 px-4">
            {currentPage === 'products' && (
              <ProductList products={products} addToCart={addToCart} />
            )}
            {currentPage === 'cart' && (
              <CartPage
                cartItems={cartItems}
                updateCartItemQuantity={updateCartItemQuantity}
                removeFromCart={removeFromCart}
                onCheckout={() => setCurrentPage('checkout')}
              />
            )}
            {currentPage === 'checkout' && (
              <CheckoutPage
                cartItems={cartItems}
                onOrderPlaced={handleOrderPlaced}
                onBackToCart={() => setCurrentPage('cart')}
              />
            )}
            {currentPage === 'orderSuccess' && (
              <OrderSuccessPage
                orderDetails={orderPlacedDetails}
                onContinueShopping={handleContinueShopping}
              />
            )}
            {currentPage === 'orderList' && (
              <OrderListPage
                allOrders={allOrders}
                onContinueShopping={handleContinueShopping}
              />
            )}
          </main>
        </>
      )}
    </div>
  );
};

export default App;
