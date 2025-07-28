import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <h2 className="text-center mt-10 text-xl text-gray-500">Cart is empty.</h2>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
         
          <div className="flex">
           <div><img src={item.image[0]} alt={item.title} className="w-24 h-24 object-cover rounded" />
         </div>    
         <div className="px-8">         
            <h2 className="text-lg font-semibold line-clamp-3">{item.title}</h2>
            <p className="text-gray-600">Qty: {item.quantity}</p>
            <p className="text-gray-800">${item.price} each</p>
             </div>   
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="mt-6 text-xl">
        Total: <span className="font-bold">${totalPrice.toFixed(2)}</span>
      </div>
      <button
        onClick={clearCart}
        className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
