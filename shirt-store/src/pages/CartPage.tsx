import React from "react";
import { Link } from "react-router-dom";
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../components/CartContext";

const CartPage: React.FC = () => {
  const { cart, dispatch } = useCart();

  const handleRemoveItem = (id: string, size: string, color: string) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { id, size, color }
    });
  };

  const handleUpdateQuantity = (id: string, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(id, size, color);
      return;
    }
    
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, size, color, quantity }
    });
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Continue Shopping
          </Link>
          
          <div className="text-center py-12">
            <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link
              to="/"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Continue Shopping
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
                <button
                  onClick={handleClearCart}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Clear Cart
                </button>
              </div>

              <AnimatePresence>
                {cart.items.map((item, index) => (
                  <motion.div
                    key={`${item.shirt.id}-${item.size}-${item.color}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0"
                  >
                    <img
                      src={item.shirt.image}
                      alt={item.shirt.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.shirt.name}</h3>
                      <p className="text-sm text-gray-600">
                        Size: {item.size} | Color: {item.color}
                      </p>
                      <p className="text-sm text-gray-600">
                        ${item.shirt.price} each
                      </p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleUpdateQuantity(item.shirt.id, item.size, item.color, item.quantity - 1)}
                          className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.shirt.id, item.size, item.color, item.quantity + 1)}
                          className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          ${(item.shirt.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      <button
                        onClick={() => handleRemoveItem(item.shirt.id, item.size, item.color)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${cart.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">${(cart.total * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-gray-900">
                      ${(cart.total + cart.total * 0.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Proceed to Checkout
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
