// "use client";

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../images/logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Profile from "../images/avatar.png";
// import {
//   faCartShopping,
//   faBars,
//   faPerson,
// } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="sticky top-0 flex justify-between items-center  shadow-xl bg-grey px-4 md:px-8 py-2 lg:px-16">
//       {/* Logo */}
//       <Link href="/" className="flex justify-center gap-2">
//         <img src={Logo} alt="" className="w-8" />
//         <h1 className="font-bold text-2xl">City</h1>
//       </Link>

//       {/* Hamburger Menu Icon for Small Screens */}
//       <div className="md:hidden">
//         <FontAwesomeIcon
//           icon={isOpen ? faPerson : faBars}
//           onClick={toggleMenu}
//           className="cursor-pointer"
//         />
//       </div>

//       {/* Menu Links */}
//       <div
//         className={`space-x-10  text-[#4D4D4D] pr-9  md:items-center hidden md:flex`}
//       >
//         <Link to="/">Home</Link>
//         <Link to="/Menu">Menu</Link>
//         <Link to="/About">About</Link>
//         <Link to="/Services">Services</Link>
//         <div className="relative">
//           <FontAwesomeIcon icon={faCartShopping} className="text-[20px] cursor-pointer" />
//           <div className="absolute cursor-pointer -top-2 -right-2 w-5 h-5 bg-red rounded-full flex justify-center items-center">
//             <p className="text-white text-xs font-semibold">2</p>
//           </div>
//         </div>
//         <img src={Profile} alt="UserProfile" className="w-10 cursor-pointer" />
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-[10vh] left-0 w-full bg-[#FFF7ED] flex flex-col items-center  space-y-4 py-4 md:hidden z-10 shadow-lg">
//           <Link to="/" onClick={toggleMenu}>
//             Home
//           </Link>
//           <Link to="/Menu" onClick={toggleMenu}>
//             Menu
//           </Link>
//           <Link to="/About" onClick={toggleMenu}>
//             About
//           </Link>
//           <Link to="/Services" onClick={toggleMenu}>
//             Services
//           </Link>
//           <div className="relative">
//             <FontAwesomeIcon icon={faCartShopping} className="text-[25px]" />
//             <div className="absolute -top-2 -right-2 w-5 h-5 bg-red rounded-full flex justify-center items-center">
//               <p className="text-white text-xs font-semibold">2</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

// // import React from 'react'
// // import Image from 'next/image'
// // import Logo from '../../../public/img/logo.png'

// // const header = () => {
// //   return (
// //     <div className='bg-gray-400 '>
// //       <div className='flex items-center'>
// //         <Image src={Logo} alt="" className='w-8'/>
// //         <h1 className='font-bold '>City</h1>
// //       </div>
// //     </div>
// //   )
// // }

// // export default header

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../images/logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Profile from "../images/avatar.png";
// import {
//   faCartShopping,
//   faBars,
//   faPerson,
// } from "@fortawesome/free-solid-svg-icons";
// import CartContainer from "../components/CartContainer"; // Import the CartContainer component

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [cartVisible, setCartVisible] = useState(false); // State to toggle cart visibility

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleCart = () => {
//     setCartVisible(!cartVisible); // Toggle the visibility of the cart
//   };

//   return (
//     <div className="sticky top-0 flex justify-between items-center shadow-xl bg-grey px-4 md:px-8 py-2 lg:px-16">
//       {/* Logo */}
//       <Link href="/" className="flex justify-center gap-2">
//         <img src={Logo} alt="" className="w-8" />
//         <h1 className="font-bold text-2xl">City</h1>
//       </Link>

//       {/* Hamburger Menu Icon for Small Screens */}
//       <div className="md:hidden">
//         <FontAwesomeIcon
//           icon={isOpen ? faPerson : faBars}
//           onClick={toggleMenu}
//           className="cursor-pointer"
//         />
//       </div>

//       {/* Menu Links */}
//       <div className={`space-x-10 text-[#4D4D4D] pr-9 md:items-center hidden md:flex`}>
//         <Link to="/">Home</Link>
//         <Link to="/Menu">Menu</Link>
//         <Link to="/About">About</Link>
//         <Link to="/Services">Services</Link>
//         <div className="relative">
//           <FontAwesomeIcon
//             icon={faCartShopping}
//             className="text-[20px] cursor-pointer"
//             onClick={toggleCart} // Toggle the cart visibility on click
//           />
//           <div className="absolute cursor-pointer -top-2 -right-2 w-5 h-5 bg-red rounded-full flex justify-center items-center">
//             <p className="text-white text-xs font-semibold">2</p>
//           </div>
//         </div>
//         <img src={Profile} alt="UserProfile" className="w-10 cursor-pointer" />
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-[10vh] left-0 w-full bg-[#FFF7ED] flex flex-col items-center space-y-4 py-4 md:hidden z-10 shadow-lg">
//           <Link to="/" onClick={toggleMenu}>
//             Home
//           </Link>
//           <Link to="/Menu" onClick={toggleMenu}>
//             Menu
//           </Link>
//           <Link to="/About" onClick={toggleMenu}>
//             About
//           </Link>
//           <Link to="/Services" onClick={toggleMenu}>
//             Services
//           </Link>
//           <div className="relative">
//             <FontAwesomeIcon
//               icon={faCartShopping}
//               className="text-[25px]"
//               onClick={toggleCart} // Toggle the cart visibility on click for mobile
//             />
//             <div className="absolute -top-2 -right-2 w-5 h-5 bg-red rounded-full flex justify-center items-center">
//               <p className="text-white text-xs font-semibold">2</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CartContainer - Render only when cartVisible is true */}
//       {cartVisible && <CartContainer />}
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../images/logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Profile from "../images/avatar.png";
// // import { MdOutlineKeyboardBackspace } from "react-icons/md"; // Import Back Button Icon
// import { faCartShopping, faBars, faPerson } from "@fortawesome/free-solid-svg-icons";
// import CartContainer from "./CartContainer"; // Import the CartContainer component
// import { useCart } from "../context/stateProvider";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [cartVisible, setCartVisible] = useState(false); // State for showing/hiding the cart
//   const { state } = useCart();

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const cartItemCount = state?.cart?.length || 0;

//   const toggleCart = () => {
//     setCartVisible(!cartVisible); // Toggle cart visibility
//   };

//   const closeCart = () => {
//     setCartVisible(false); // Close the cart when the back button is clicked
//   };

//   return (
//     <div className="sticky top-0 flex justify-between items-center shadow-xl bg-grey px-4 md:px-8 py-2 lg:px-16">
//       {/* Logo */}
//       <Link href="/" className="flex justify-center gap-2">
//         <img src={Logo} alt="" className="w-8" />
//         <h1 className="font-bold text-2xl">City</h1>
//       </Link>

//       {/* Hamburger Menu Icon for Small Screens */}
//       <div className="md:hidden">
//         <FontAwesomeIcon
//           icon={isOpen ? faPerson : faBars}
//           onClick={toggleMenu}
//           className="cursor-pointer"
//         />
//       </div>

//       {/* Menu Links */}
//       <div className={`space-x-10 text-[#4D4D4D] pr-9 md:items-center hidden md:flex`}>
//         <Link to="/">Home</Link>
//         <Link to="/Menu">Menu</Link>
//         <Link to="/About">About</Link>
//         <Link to="/Services">Services</Link>
//         <div className="relative">
//           <FontAwesomeIcon
//             icon={faCartShopping}
//             className="text-[20px] cursor-pointer"
//             onClick={toggleCart} // Toggle the cart visibility
//           />
//           <div className="absolute cursor-pointer -top-2 -right-2 w-5 h-5 bg-red rounded-full flex justify-center items-center">
//             <p className="text-white text-xs font-semibold">{cartItemCount}</p>
//           </div>
//         </div>
//         <img src={Profile} alt="UserProfile" className="w-10 cursor-pointer" />
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-[10vh] left-0 w-full bg-[#FFF7ED] flex flex-col items-center space-y-4 py-4 md:hidden z-10 shadow-lg">
//           <Link to="/" onClick={toggleMenu}>
//             Home
//           </Link>
//           <Link to="/Menu" onClick={toggleMenu}>
//             Menu
//           </Link>
//           <Link to="/About" onClick={toggleMenu}>
//             About
//           </Link>
//           <Link to="/Services" onClick={toggleMenu}>
//             Services
//           </Link>
//           <div className="relative">
//             <FontAwesomeIcon
//               icon={faCartShopping}
//               className="text-[25px]"
//               onClick={toggleCart} // Toggle the cart visibility for mobile
//             />
//             <div className="absolute -top-2 -right-2 w-5 h-5 bg-red rounded-full flex justify-center items-center">
//               <p className="text-white text-xs font-semibold">{cartItemCount}</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CartContainer - Render only when cartVisible is true */}
//       {cartVisible && <CartContainer closeCart={closeCart} />}
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../images/logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Profile from "../images/avatar.png";
// import {
//   faCartShopping,
//   faBars,
//   faPerson,
// } from "@fortawesome/free-solid-svg-icons";
// import { useCart } from "../context/stateProvider"; // Import the useCart hook

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { state } = useCart(); // Access the state from the context

//   // Calculate the total number of items in the cart
//   const cartItemCount = state.cart.length;

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="sticky top-0 flex justify-between items-center shadow-xl bg-grey px-4 md:px-8 py-2 lg:px-16">
//       {/* Logo */}
//       <Link to="/" className="flex justify-center gap-2">
//         <img src={Logo} alt="" className="w-8" />
//         <h1 className="font-bold text-2xl">City</h1>
//       </Link>

//       {/* Hamburger Menu Icon for Small Screens */}
//       <div className="md:hidden">
//         <FontAwesomeIcon
//           icon={isOpen ? faPerson : faBars}
//           onClick={toggleMenu}
//           className="cursor-pointer"
//         />
//       </div>

//       {/* Menu Links */}
//       <div className="space-x-10 text-[#4D4D4D] pr-9 md:items-center hidden md:flex">
//         <Link to="/">Home</Link>
//         <Link to="/Menu">Menu</Link>
//         <Link to="/About">About</Link>
//         <Link to="/Services">Services</Link>
//         <div className="relative">
//           <FontAwesomeIcon icon={faCartShopping} className="text-[20px] cursor-pointer" />
//           {/* Display the cart item count */}
//           <div className="absolute cursor-pointer -top-2 -right-2 w-5 h-5 bg-red rounded-full flex justify-center items-center">
//             <p className="text-white text-xs font-semibold">{cartItemCount}</p>
//           </div>
//         </div>
//         <img src={Profile} alt="UserProfile" className="w-10 cursor-pointer" />
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-[10vh] left-0 w-full bg-[#FFF7ED] flex flex-col items-center space-y-4 py-4 md:hidden z-10 shadow-lg">
//           <Link to="/" onClick={toggleMenu}>
//             Home
//           </Link>
//           <Link to="/Menu" onClick={toggleMenu}>
//             Menu
//           </Link>
//           <Link to="/About" onClick={toggleMenu}>
//             About
//           </Link>
//           <Link to="/Services" onClick={toggleMenu}>
//             Services
//           </Link>
//           <div className="relative">
//             <FontAwesomeIcon icon={faCartShopping} className="text-[25px]" />
//             {/* Display the cart item count */}
//             <div className="absolute -top-2 -right-2 w-5 h-5 bg-red rounded-full flex justify-center items-center">
//               <p className="text-white text-xs font-semibold">{cartItemCount}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "../images/avatar.png";
import CartContainer from "../components/CartContainer"; 
import {
  faCartShopping,
  faBars,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/cartProvider"; // Import the useCart hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useCart(); // Access the state from the context
  const [cartVisible, setCartVisible] = useState(false);

  // Use optional chaining or default to an empty array in case state.cart is undefined
  const cartItemCount = state.cartItems.length; // Default to 0 if cart is undefined

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setCartVisible(!cartVisible); // Toggle the visibility of the cart
    // Close the mobile menu when the cart icon is clicked
    if (isOpen) setIsOpen(false);
  };

  return (
    <div className="sticky top-0 flex justify-between items-center shadow-xl bg-grey px-4 md:px-8 py-2 lg:px-16">
      {/* Logo */}
      <Link to="/" className="flex justify-center gap-2" onClick={toggleMenu}>
        <img src={Logo} alt="" className="w-8" />
        <h1 className="font-bold text-2xl">City</h1>
      </Link>

      {/* Hamburger Menu Icon for Small Screens */}
      <div className="md:hidden">
        <FontAwesomeIcon
          icon={isOpen ? faPerson : faBars}
          onClick={toggleMenu}
          className="cursor-pointer"
        />
      </div>

      {/* Menu Links */}
      <div className="space-x-10 text-[#4D4D4D] pr-9 md:items-center hidden md:flex">
        <Link to="/Home" onClick={toggleMenu}>Home</Link>
        <Link to="/Menu" onClick={toggleMenu}>Menu</Link>
        <Link to="/About" onClick={toggleMenu}>About</Link>
        <Link to="/Services" onClick={toggleMenu}>Services</Link>
        <div className="relative">
          <FontAwesomeIcon
            icon={faCartShopping}
            onClick={toggleCart}
            className="text-[20px] cursor-pointer"
          />
          {/* Display the cart item count */}
          <div className="absolute cursor-pointer -top-2 -right-2 w-5 h-5 bg-red rounded-full flex justify-center items-center">
            <p className="text-white text-xs font-semibold">{cartItemCount}</p>
          </div>
        </div>
        <img src={Profile} alt="UserProfile" className="w-10 cursor-pointer" />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[5vh] left-0 w-full bg-[#FFF7ED] flex flex-col items-center space-y-4 py-4 md:hidden  shadow-lg">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="#" onClick={toggleMenu}>
            Menu
          </Link>
          <Link to="#" onClick={toggleMenu}>
            About
          </Link>
          <Link to="#" onClick={toggleMenu}>
            Services
          </Link>
          <div className="relative">
            <FontAwesomeIcon
              icon={faCartShopping}
              onClick={toggleCart}
              className="text-[25px]"
            />
            {/* Display the cart item count */}
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red rounded-full flex justify-center items-center">
              <p className="text-white text-xs font-semibold">
                {cartItemCount}
              </p>
            </div>
          </div>
        </div>
      )}
      {cartVisible && <CartContainer />}
    </div>
  );
};

export default Navbar;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../images/logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Profile from "../images/avatar.png";
// import CartContainer from "../components/CartContainer"; 
// import {
//   faCartShopping,
//   faBars,
//   faPerson,
// } from "@fortawesome/free-solid-svg-icons";
// import { useCart } from "../context/cartProvider"; // Import the useCart hook

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { state } = useCart(); // Access the state from the context
//   const [cartVisible, setCartVisible] = useState(false);

//   // Use optional chaining or default to an empty array in case state.cart is undefined
//   const cartItemCount = state.cartItems.length; // Default to 0 if cart is undefined

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleCart = () => {
//     setCartVisible(!cartVisible); // Toggle the visibility of the cart
//   };

//   return (
//     <div className="sticky top-0 flex justify-between items-center shadow-xl bg-grey px-4 md:px-8 py-2 lg:px-16">
//       {/* Logo */}
//       <Link to="/" className="flex justify-center gap-2" onClick={toggleMenu}>
//         <img src={Logo} alt="" className="w-8" />
//         <h1 className="font-bold text-2xl">City</h1>
//       </Link>

//       {/* Hamburger Menu Icon for Small Screens */}
//       <div className="md:hidden">
//         <FontAwesomeIcon
//           icon={isOpen ? faPerson : faBars}
//           onClick={toggleMenu}
//           className="cursor-pointer"
//         />
//       </div>

//       {/* Menu Links */}
//       <div className="space-x-10 text-[#4D4D4D] pr-9 md:items-center hidden md:flex">
//         <Link to="/Home" onClick={toggleMenu}>Home</Link>
//         <Link to="/Menu" onClick={toggleMenu}>Menu</Link>
//         <Link to="/About" onClick={toggleMenu}>About</Link>
//         <Link to="/Services" onClick={toggleMenu}>Services</Link>
//         <div className="relative">
//           <FontAwesomeIcon
//             icon={faCartShopping}
//             onClick={toggleCart}
//             className="text-[20px] cursor-pointer"
//           />
//           {/* Display the cart item count */}
//           <div className="absolute cursor-pointer -top-2 -right-2 w-5 h-5 bg-red rounded-full flex justify-center items-center">
//             <p className="text-white text-xs font-semibold">{cartItemCount}</p>
//           </div>
//         </div>
//         <img src={Profile} alt="UserProfile" className="w-10 cursor-pointer" />
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-[5vh] left-0 w-full bg-[#FFF7ED] flex flex-col items-center space-y-4 py-4 md:hidden  shadow-lg">
//           <Link to="/" onClick={toggleMenu}>
//             Home
//           </Link>
//           <Link to="/Menu" onClick={toggleMenu}>
//             Menu
//           </Link>
//           <Link to="/About" onClick={toggleMenu}>
//             About
//           </Link>
//           <Link to="/Services" onClick={toggleMenu}>
//             Services
//           </Link>
//           <div className="relative">
//             <FontAwesomeIcon
//               icon={faCartShopping}
//               onClick={toggleCart}
//               className="text-[25px]"
//             />
//             {/* Display the cart item count */}
//             <div className="absolute -top-2 -right-2 w-5 h-5 bg-red rounded-full flex justify-center items-center">
//               <p className="text-white text-xs font-semibold">
//                 {cartItemCount}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//       {cartVisible && <CartContainer />}
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../images/logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Profile from "../images/avatar.png";
// import CartContainer from "../components/CartContainer"; 
// import {
//   faCartShopping,
//   faBars,
//   faPerson,
// } from "@fortawesome/free-solid-svg-icons";
// import { useCart } from "../context/cartProvider"; // Import the useCart hook

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { state } = useCart(); // Access the state from the context
//   const [cartVisible, setCartVisible] = useState(false);

//   // Use optional chaining or default to an empty array in case state.cart is undefined
//    // Access cart state
//   const cartItemCount = state.cartItems.length; // Default to 0 if cart is undefined

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleCart = () => {
//     setCartVisible(!cartVisible); // Toggle the visibility of the cart
//   };

//   return (
//     <div className="sticky top-0 flex justify-between items-center shadow-xl bg-grey px-4 md:px-8 py-2 lg:px-16">
//       {/* Logo */}
//       <Link to="/" className="flex justify-center gap-2">
//         <img src={Logo} alt="" className="w-8" />
//         <h1 className="font-bold text-2xl">City</h1>
//       </Link>

//       {/* Hamburger Menu Icon for Small Screens */}
//       <div className="md:hidden">
//         <FontAwesomeIcon
//           icon={isOpen ? faPerson : faBars}
//           onClick={toggleMenu}
//           className="cursor-pointer"
//         />
//       </div>

//       {/* Menu Links */}
//       <div className="space-x-10 text-[#4D4D4D] pr-9 md:items-center hidden md:flex">
      
//         <Link to="/Home">Home</Link>
//         <Link to="/Menu">Menu</Link>
//         <Link to="/About">About</Link>
//         <Link to="/Services">Services</Link>
//         <div className="relative">
//           <FontAwesomeIcon
//             icon={faCartShopping}
//             onClick={toggleCart}
//             className="text-[20px] cursor-pointer"
//           />
//           {/* Display the cart item count */}
//           <div className="absolute cursor-pointer -top-2 -right-2 w-5 h-5 bg-red rounded-full flex justify-center items-center">
//             <p className="text-white text-xs font-semibold">{cartItemCount}</p>
//           </div>
//         </div>
//         <img src={Profile} alt="UserProfile" className="w-10 cursor-pointer" />
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-[10vh] left-0 w-full bg-[#FFF7ED] flex flex-col items-center space-y-4 py-4 md:hidden z-10 shadow-lg">
//           <Link to="/" onClick={toggleMenu}>
//             Home
//           </Link>
//           <Link to="/Menu" onClick={toggleMenu}>
//             Menu
//           </Link>
//           <Link to="/About" onClick={toggleMenu}>
//             About
//           </Link>
//           <Link to="/Services" onClick={toggleMenu}>
//             Services
//           </Link>
//           <div className="relative">
//             <FontAwesomeIcon icon={faCartShopping}   onClick={toggleCart} className="text-[25px]" />
//             {/* Display the cart item count */}
//             <div className="absolute -top-2 -right-2 w-5 h-5 bg-red rounded-full flex justify-center items-center">
//               <p className="text-white text-xs font-semibold">
//                 {cartItemCount}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//        {cartVisible && <CartContainer  />}
//     </div>
//   );
// };

// export default Navbar;
