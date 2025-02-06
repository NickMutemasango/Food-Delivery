// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

// const Item = (props) => {
  

//   return (
//     <div className="bg-green-400 rounded-3xl w-[48%] md:w-[30%] lg:w-[28%] xl:w-[18%]  flex flex-col  px-2 pb-1  mb-16">
//       <div className="flex justify-between items-center">
//         <img src={props.image} alt="" className="w-24 h-32" />
//         <div className=" w-8 h-8 bg-red cursor-pointer rounded-full flex justify-center items-center">
//         <FontAwesomeIcon icon={faCartShopping} className="text-[15px] text-white" />
//         </div>
//       </div>
//       <div className="flex flex-col text-right">
//         <h1 className=" text-base pt-1 font-bold text-[#515151]">{props.heading}</h1>
//         <p className="text-comp font-thin text-xs pb-1">
//          {props.description}
//         </p>
//         <div className="flex gap-1 pb-2 xl:pb-5 justify-end">
//           <p className="text-red font-bold text-base">$</p>
//           <p className="font-semibold text-[#2e2e2e]">{props.price}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Item;

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { useCart } from "../context/stateProvider"; // Import the useCart hook

// const Item = (props) => {
//   const { dispatch } = useCart(); // Access the dispatch function from the context

//   // Handle adding the item to the cart
//   const addToCart = () => {
//     dispatch({
//       type: "ADD_TO_CART", // Action type for adding an item to the cart
//       item: {
//         id: props.id,         // Unique item id
//         image: props.image,   // Image URL
//         heading: props.heading, // Item heading
//         description: props.description, // Item description
//         price: props.price,   // Price of the item
//       },
//     });
//   };

//   return (
//     <div className="bg-green-400 rounded-3xl w-[48%] md:w-[30%] lg:w-[28%] xl:w-[18%]  flex flex-col  px-2 pb-1  mb-16">
//       <div className="flex justify-between items-center">
//         <img src={props.image} alt="" className="w-24 h-32" />
//         <div
//           onClick={addToCart} // Trigger the addToCart function when the icon is clicked
//           className="w-8 h-8 bg-red cursor-pointer rounded-full flex justify-center items-center"
//         >
//           <FontAwesomeIcon icon={faCartShopping} className="text-[15px] text-white" />
//         </div>
//       </div>
//       <div className="flex flex-col text-right">
//         <h1 className="text-base pt-1 font-bold text-[#515151]">{props.heading}</h1>
//         <p className="text-comp font-thin text-xs pb-1">
//           {props.description}
//         </p>
//         <div className="flex gap-1 pb-2 xl:pb-5 justify-end">
//           <p className="text-red font-bold text-base">$</p>
//           <p className="font-semibold text-[#2e2e2e]">{props.price}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Item;


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/cartProvider"; // Import the useCart hook
import { motion } from "framer-motion";

const Item = (props) => {
  const { dispatch } = useCart(); // Access the dispatch function from the context

  // Handle adding the item to the cart
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART", // Action type for adding an item to the cart
      item: {
        id: props.id,         // Unique item id
        image: props.image,   // Image URL
        heading: props.heading, // Item heading
        description: props.description, // Item description
        price: parseFloat(props.price),   // Ensure the price is a number
      },
    });
  };

 
  

  return (
    <div className="bg-[#F5D6C6] rounded-3xl w-[48%] md:w-[30%] lg:w-[28%] xl:w-[18%] flex flex-col px-2 pb-1 mb-16">
      <div className="flex justify-between items-center">
        <img src={props.image} alt="" className="w-24 h-32" />
        <motion.div
        whileTap={{scale:0.8}}
          onClick={addToCart} // Trigger the addToCart function when the icon is clicked
          className="w-8 h-8 bg-red cursor-pointer rounded-full flex justify-center items-center"
        >
          <FontAwesomeIcon icon={faCartShopping} className="text-[15px] text-white" />
        </motion.div>
      </div>
      <div className="flex flex-col text-right">
        <h1 className="text-base pt-1 font-bold text-[#515151]">{props.heading}</h1>
        <p className="text-comp font-thin text-xs pb-1">{props.description}</p>
        <div className="flex gap-1 pb-2 xl:pb-5 justify-end">
          <p className="text-red font-bold text-base">$</p>
          <p className="font-semibold text-[#2e2e2e]">{props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { useCart } from "../context/cartProvider"; // Import the useCart hook
// import { motion } from "framer-motion";

// const Item = (props) => {
//   const { dispatch } = useCart(); // Access the dispatch function from the context
//   const [isHovered, setIsHovered] = useState(false);  // Track if the icon is hovered
//   const [isAdded, setIsAdded] = useState(false);      // Track if the item is added to the cart

//   // Handle adding the item to the cart
//   const addToCart = () => {
//     dispatch({
//       type: "ADD_TO_CART", // Action type for adding an item to the cart
//       item: {
//         id: props.id,         // Unique item id
//         image: props.image,   // Image URL
//         heading: props.heading, // Item heading
//         description: props.description, // Item description
//         price: parseFloat(props.price),   // Ensure the price is a number
//       },
//     });

//     // Set "Item Added" text for 1 second
//     setIsAdded(true);
//     setTimeout(() => {
//       setIsAdded(false);
//     }, 1000);
//   };

//   return (
//     <div className="bg-green-400 rounded-3xl w-[48%] md:w-[30%] lg:w-[28%] xl:w-[18%] flex flex-col px-2 pb-1 mb-16 relative">
//       {/* Display "Add to Cart" on hover */}
//       {isHovered && !isAdded && (
//         <div className="absolute bottom-10 left-0 w-full text-center text-gray-700 text-sm">
//           Add to Cart
//         </div>
//       )}

//       {/* Display "Item Added" after adding to cart */}
//       {isAdded && (
//         <div className="absolute bottom-10 left-0 w-full text-center text-green-600 text-sm">
//           Item Added
//         </div>
//       )}

//       {/* Image and Cart Icon */}
//       <div className="flex justify-between items-center">
//         <img src={props.image} alt="" className="w-24 h-32" />
//         <motion.div
//           whileTap={{ scale: 0.8 }} // Scale when clicked
//           onClick={addToCart} // Trigger the addToCart function when the icon is clicked
//           className="w-8 h-8 bg-red cursor-pointer rounded-full flex justify-center items-center"
//           onMouseEnter={() => setIsHovered(true)}  // Set isHovered to true when the icon is hovered
//           onMouseLeave={() => setIsHovered(false)} // Set isHovered to false when the hover ends
//         >
//           <FontAwesomeIcon icon={faCartShopping} className="text-[15px] text-white" />
//         </motion.div>
//       </div>

//       {/* Item Details */}
//       <div className="flex flex-col text-right">
//         <h1 className="text-base pt-1 font-bold text-[#515151]">{props.heading}</h1>
//         <p className="text-comp font-thin text-xs pb-1">{props.description}</p>
//         <div className="flex gap-1 pb-2 xl:pb-5 justify-end">
//           <p className="text-red font-bold text-base">$</p>
//           <p className="font-semibold text-[#2e2e2e]">{props.price}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Item;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { useCart } from "../context/cartProvider"; // Import the useCart hook
// import { motion } from "framer-motion";

// const Item = (props) => {
//   const { dispatch } = useCart(); // Access the dispatch function from the context
//   const [isHovered, setIsHovered] = useState(false);  // Track if the icon is hovered
//   const [isAdded, setIsAdded] = useState(false);      // Track if the item is added to the cart

//   // Handle adding the item to the cart
//   const addToCart = () => {
//     dispatch({
//       type: "ADD_TO_CART", // Action type for adding an item to the cart
//       item: {
//         id: props.id,         // Unique item id
//         image: props.image,   // Image URL
//         heading: props.heading, // Item heading
//         description: props.description, // Item description
//         price: parseFloat(props.price),   // Ensure the price is a number
//       },
//     });

//     // Set "Item Added" text for 1 second
//     setIsAdded(true);
//     setTimeout(() => {
//       setIsAdded(false);
//     }, 1000);
//   };

//   return (
//     <div className="bg-green-400 rounded-3xl w-[48%] md:w-[30%] lg:w-[28%] xl:w-[18%] flex flex-col px-2 pb-1 mb-16 relative">
//       {/* Image and Cart Icon */}
//       <div className="flex justify-between items-center">
//         <img src={props.image} alt="" className="w-24 h-32" />

//         {/* Wrapper for the cart icon and hover text */}
//         <div
//           className="relative"
//           onMouseEnter={() => setIsHovered(true)}  // Set isHovered to true when the icon is hovered
//           onMouseLeave={() => setIsHovered(false)} // Set isHovered to false when the hover ends
//         >
//           {/* Display "Add to Cart" on hover */}
//           {isHovered && !isAdded && (
//             <div className="absolute bottom-12 left-0 w-full text-center text-gray-700 text-sm">
//               Add to Cart
//             </div>
//           )}

//           {/* Display "Item Added" after adding to cart */}
//           {isAdded && (
//             <div className="absolute bottom-12 left-0 w-full text-center text-green-600 text-sm">
//               Item Added
//             </div>
//           )}

//           <motion.div
//             whileTap={{ scale: 0.8 }} // Scale when clicked
//             onClick={addToCart} // Trigger the addToCart function when the icon is clicked
//             className="w-8 h-8 bg-red cursor-pointer rounded-full flex justify-center items-center"
//           >
//             <FontAwesomeIcon icon={faCartShopping} className="text-[15px] text-white" />
//           </motion.div>
//         </div>
//       </div>

//       {/* Item Details */}
//       <div className="flex flex-col text-right">
//         <h1 className="text-base pt-1 font-bold text-[#515151]">{props.heading}</h1>
//         <p className="text-comp font-thin text-xs pb-1">{props.description}</p>
//         <div className="flex gap-1 pb-2 xl:pb-5 justify-end">
//           <p className="text-red font-bold text-base">$</p>
//           <p className="font-semibold text-[#2e2e2e]">{props.price}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Item;


