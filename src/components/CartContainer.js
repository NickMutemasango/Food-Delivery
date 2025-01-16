
import React from "react";
import { useCart } from "../context/cartProvider"; 
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { BiMinus, BiPlus } from "react-icons/bi";


const formatPrice = (price) => {
  return parseFloat(price).toFixed(2); 
};

const CartContainer = () => {
  const { state, dispatch } = useCart(); 
  const [cartVisible, setCartVisible] = React.useState(true); 


  const increment = (itemId) => {
    dispatch({
      type: "UPDATE_ITEM_QUANTITY",
      payload: { itemId, action: "increment" },
    });
  };
  
  const decrement = (itemId) => {
    dispatch({
      type: "UPDATE_ITEM_QUANTITY",
      payload: { itemId, action: "decrement" },
    });
  };

 
  const closeCart = () => {
    setCartVisible(false); 
  };

  // Calculate the subtotal by summing the prices of all items in the cart
  const subtotal =
    state.cartItems.length > 0
      ? state.cartItems.reduce(
          (total, item) => total + parseFloat(item.price) * item.count,
          0
        )
      : 0; 

 
  const deliveryCost = 2.5;

 
  const total = subtotal + deliveryCost;

  return (
    cartVisible && ( 
      <div className="fixed top-0 right-0 w-full md:w-[375px]  h-screen bg-white drop-shadow-md flex flex-col z-[1000px]">
       
        <div className="w-full flex items-center justify-between p-4 cursor-pointer">
          <motion.div whileTap={{ scale: 0.75 }} onClick={closeCart}>
            <MdOutlineKeyboardBackspace className="text-[#515151] text-3xl" />
          </motion.div>
          <p className="font-semibold text-lg text-[#515151]">Cart</p>
        </div>

        {/* Cart Items */}
        <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col overflow-y-scroll scrollbar-none">
          {state.cartItems.length > 0 ? (
            state.cartItems.map((item) => (
              <div
                key={item.id}
                className="p-1 px-2 rounded-xl mb-2 bg-cartItem flex items-center gap-2"
              >
                <img
                  src={item.image}
                  alt={item.heading}
                  className="w-20 h-20 max-w-[60px] rounded-full object-contain"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-base text-gray-50">{item.heading}</p>
                  <p className="text-sm font-semibold text-gray-300 block">
                    ${formatPrice(item.price)}
                  </p>
                </div>

                {/* Quantity Buttons */}
                <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                  <motion.div
                    whileTap={{ scale: 0.75 }}
                    onClick={() => decrement(item.id)} 
                  >
                    <BiMinus className="text-gray-50" />
                  </motion.div>

                  <p className="w-5 h-5 rounded-sm bg-cartBg text-white z-10 flex items-center justify-center">
                    {item.count} 
                  </p>

                  <motion.div
                    onClick={() => increment(item.id)}
                    whileTap={{ scale: 0.75 }}
                  >
                    <BiPlus className="text-gray-50" />
                  </motion.div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty</p>
          )}

          {/* Cart Summary */}
          <div className="w-full mt-5 bg-cartTotal flex-1 rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-5">
            <div className="w-full py-3 flex items-center justify-between">
              <p className="text-gray-400 text-lg">Sub total</p>
              <p className="text-gray-400 text-lg">${formatPrice(subtotal)}</p>
            </div>
            <div className="w-full py-3 flex items-center justify-between">
              <p className="text-gray-400 text-lg">Delivery</p>
              <p className="text-gray-400 text-lg">
                ${formatPrice(deliveryCost)}
              </p>
            </div>

            <div className="w-full border-b border-gray-600 my-2"></div>

            <div className="w-full py-3 flex items-center justify-between">
              <p className="text-gray-200 text-xl font-semibold">Total</p>
              <p className="text-gray-200 text-xl font-semibold">
                ${formatPrice(total)}
              </p>
            </div>

            <motion.button
              type="button"
              whileTap={{ scale: 0.8 }}
              className="w-full p-2 rounded-full bg-orange text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out"
            >
              Check Out
            </motion.button>
          </div>
        </div>
      </div>
    )
  );
};

export default CartContainer;


