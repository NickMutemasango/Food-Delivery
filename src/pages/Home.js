"use client";

// import React, {  useState } from "react";
// import Deliver from "../images/delivery.png";
// import Food from "../components/Food";
// import Ice from "../images/i1.png";
// import Strawbery from "../images/f1.png";
// import Kabab from "../images/c3.png";
// import Fish from "../images/f1.png";
// import Item from "../components/Item";
// import I1 from "../images/i1.png";
// import I2 from "../images/i2.png";
// import I3 from "../images/i3.png";
// import I4 from "../images/i4.png";
// import I5 from "../images/i5.png";
// import { IoFastFood } from "react-icons/io5";
// import { categories, dishes } from "../utils/data";
// // import CartContainer from "../components/CartContainer";

// const Home = () => {
//   const [filter, setFilter] = useState("chicken");

//   return (
//     <div className="bg-grey ">
//       <div className="bg-hero bg-center bg-cover bg-no-repeat w-full flex flex-col md:flex-row  px-4 md:px-8 py-2 lg:px-16 pt-10 gap-7">
//         <div className="flex flex-col gap-4 xl:gap-7 md:w-1/2 ">
//           <div className="bg-lightOrange flex items-center justify-center gap-2 px-4 py-1 rounded-3xl w-[50%] md:w-[55%] lg:w-[43%] xl:w-[30%]">
//             <p className="text-orange font-bold">Bike Delivery</p>
//             <div className="h-8 w-8 bg-white rounded-full flex justify-center items-center">
//               <img
//                 src={Deliver}
//                 alt=""
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           </div>
//           <div className="text-3xl lg:text-4xl xl:text-5xl">
//             <h1 className="font-bold">The Fastest Delivery in</h1>
//             <h1 className="text-orange font-bold">Your City</h1>
//           </div>
//           <div>
//             <p className="text-lightgrey text-base font-medium">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
//               illo. Maxime ipsa error dolorem minus, odio dolores quia, cum
//               voluptatum dolor expedita quas at corrupti. Debitis accusamus
//               ducimus porro eius!
//             </p>
//           </div>
//           <div>
//             <button className="bg-oracle w-full lg:w-[20%] py-1 rounded-lg">
//               Order now
//             </button>
//           </div>
//         </div>

//         <div className=" rounded-lg  pt-10 flex gap-2 justify-evenly items-center flex-wrap md:w-1/2 lg:w-[45%] xl:w-[30%]">
//           <Food
//             image={Ice}
//             heading="Icecream"
//             descritpion="Chocolate & vanilla"
//             price={5.25}
//           />
//           <Food
//             image={Strawbery}
//             heading="Strawberries"
//             descritpion="Fresh Strawberries"
//             price={10.25}
//           />
//           <Food
//             image={Kabab}
//             heading="Chicken Kebab"
//             descritpion="Mixed kebab plate"
//             price={8.25}
//           />
//           <Food
//             image={Fish}
//             heading="Fish Kebab"
//             descritpion="Mixed fish kebab"
//             price={5.25}
//           />
//         </div>
//       </div>

//       <div className="px-4 md:px-8 lg:px-16 py-5">
//         <h1 className="text-2xl font-bold xl:text-3xl">
//           Our Fresh & Healthy Fruits
//         </h1>

//         <div className="flex mt-10 justify-between flex-wrap">
//           <Item
//             image={I1}
//             heading="Pure Vanilla ice cream"
//             price={4.50}
//             description="Awesome creams with"
//           />
//           <Item
//             image={I2}
//             heading="Pure Vanilla ice cream"
//             price={3.75}
//             description="Awesome creams with"
//           />
//           <Item
//             image={I3}
//             heading="Pure Vanilla ice cream"
//             price={0.75}
//             description="Awesome creams with"
//           />
//           <Item
//             image={I4}
//             heading="Pure Vanilla ice cream"
//             price={1}
//             description="Awesome creams with"
//           />
//           <Item
//             image={I5}
//             heading="Pure Vanilla ice cream"
//             price={100}
//             description="Awesome creams with"
//           />
//         </div>
//       </div>

//       <div className="px-4 md:px-8 lg:px-16 py-5 flex-col">
//         <h1 className="text-2xl font-bold pb-5 xl:text-3xl">Menu</h1>

//         <div>
//           {/* Category Filter Section */}
//           <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 mt-6 overflow-x-scroll scrollbar-none">
//             {categories &&
//               categories.map((category) => (
//                 <div
//                   key={category.id}
//                   className={`group ${
//                     filter === category.urlParamName
//                       ? "bg-cartNumBg"
//                       : "bg-white"
//                   } bg-card w-24 min-w-[94px]  h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg duration-150 transition-all ease-in-out`}
//                   onClick={() => setFilter(category.urlParamName)}
//                 >
//                   <div
//                     className={`w-10 h-10 rounded-full bg-red ${
//                       filter === category.urlParamName ? "bg-white" : "bg-card"
//                     } group-hover:bg-white flex items-center justify-center `}
//                   >
//                     <IoFastFood
//                       className={`${
//                         filter === category.urlParamName
//                           ? "text-[#515151]"
//                           : "text-white"
//                       } text-lg group-hover:text-[#515151]`}
//                     />
//                   </div>
//                   <p
//                     className={`text-sm ${
//                       filter === category.urlParamName
//                         ? "text-white"
//                         : "text-[#515151]"
//                     } group-hover:text-white`}
//                   >
//                     {category.name}
//                   </p>
//                 </div>
//               ))}
//           </div>

//           {/* Filtered Dishes Section */}
//           <div className="flex flex-wrap justify-center gap-7">
//             {dishes
//               .filter((dish) => dish.category === filter)
//               .map((dish) => (
//                 <Item key={dish.id} {...dish} />
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from "react";
// import Deliver from "../images/delivery.png";
// import Food from "../components/Food";
// import Ice from "../images/i1.png";
// import Strawbery from "../images/f1.png";
// import Kabab from "../images/c3.png";
// import Fish from "../images/f1.png";
// import Item from "../components/Item";
// import I1 from "../images/i1.png";
// import I2 from "../images/i2.png";
// import I3 from "../images/i3.png";
// import I4 from "../images/i4.png";
// import I5 from "../images/i5.png";
// import { IoFastFood } from "react-icons/io5";
// import { categories, dishes } from "../utils/data";
// import Modal from "../components/Modal"; // Import the Modal component
// import { auth } from "../firebase"; // Firebase authentication
// import { useNavigate } from "react-router-dom"; // For navigation

// const Home = () => {
//   const [filter, setFilter] = useState("chicken");
//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
//   const [userName, setUserName] = useState(""); // User name state
//   const navigate = useNavigate();

//   // Check if the user is logged in when the Home page loads
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUserName(user.displayName || user.email); // Set the user's name
//         setIsModalOpen(true); // Open the modal if the user is logged in
//       } else {
//         navigate("/Login"); // Redirect to the login page if the user is not logged in
//       }
//     });

//     // Clean up the listener when the component unmounts
//     return () => unsubscribe();
//   }, [navigate]);

//   // Close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="bg-grey ">
//       <div className="bg-hero bg-center bg-cover bg-no-repeat w-full flex flex-col md:flex-row  px-4 md:px-8 py-2 lg:px-16 pt-10 gap-7">
//         <div className="flex flex-col gap-4 xl:gap-7 md:w-1/2 ">
//           <div className="bg-lightOrange flex items-center justify-center gap-2 px-4 py-1 rounded-3xl w-[50%] md:w-[55%] lg:w-[43%] xl:w-[30%]">
//             <p className="text-orange font-bold">Bike Delivery</p>
//             <div className="h-8 w-8 bg-white rounded-full flex justify-center items-center">
//               <img
//                 src={Deliver}
//                 alt=""
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           </div>
//           <div className="text-3xl lg:text-4xl xl:text-5xl">
//             <h1 className="font-bold">The Fastest Delivery in</h1>
//             <h1 className="text-orange font-bold">Your City</h1>
//           </div>
//           <div>
//             <p className="text-lightgrey text-base font-medium">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
//               illo. Maxime ipsa error dolorem minus, odio dolores quia, cum
//               voluptatum dolor expedita quas at corrupti. Debitis accusamus
//               ducimus porro eius!
//             </p>
//           </div>
//           <div>
//             <button className="bg-oracle w-full lg:w-[20%] py-1 rounded-lg">
//               Order now
//             </button>
//           </div>
//         </div>

//         <div className=" rounded-lg  pt-10 flex gap-2 justify-evenly items-center flex-wrap md:w-1/2 lg:w-[45%] xl:w-[30%]">
//           <Food
//             image={Ice}
//             heading="Icecream"
//             descritpion="Chocolate & vanilla"
//             price={5.25}
//           />
//           <Food
//             image={Strawbery}
//             heading="Strawberries"
//             descritpion="Fresh Strawberries"
//             price={10.25}
//           />
//           <Food
//             image={Kabab}
//             heading="Chicken Kebab"
//             descritpion="Mixed kebab plate"
//             price={8.25}
//           />
//           <Food
//             image={Fish}
//             heading="Fish Kebab"
//             descritpion="Mixed fish kebab"
//             price={5.25}
//           />
//         </div>
//       </div>

//       <div className="px-4 md:px-8 lg:px-16 py-5">
//         <h1 className="text-2xl font-bold xl:text-3xl">
//           Our Fresh & Healthy Fruits
//         </h1>

//         <div className="flex mt-10 justify-between flex-wrap">
//           <Item
//             image={I1}
//             heading="Pure Vanilla ice cream"
//             price={4.50}
//             description="Awesome creams with"
//           />
//           <Item
//             image={I2}
//             heading="Pure Vanilla ice cream"
//             price={3.75}
//             description="Awesome creams with"
//           />
//           <Item
//             image={I3}
//             heading="Pure Vanilla ice cream"
//             price={0.75}
//             description="Awesome creams with"
//           />
//           <Item
//             image={I4}
//             heading="Pure Vanilla ice cream"
//             price={1}
//             description="Awesome creams with"
//           />
//           <Item
//             image={I5}
//             heading="Pure Vanilla ice cream"
//             price={100}
//             description="Awesome creams with"
//           />
//         </div>
//       </div>

//       <div className="px-4 md:px-8 lg:px-16 py-5 flex-col">
//         <h1 className="text-2xl font-bold pb-5 xl:text-3xl">Menu</h1>

//         <div>
//           {/* Category Filter Section */}
//           <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 mt-6 overflow-x-scroll scrollbar-none">
//             {categories &&
//               categories.map((category) => (
//                 <div
//                   key={category.id}
//                   className={`group ${
//                     filter === category.urlParamName
//                       ? "bg-cartNumBg"
//                       : "bg-white"
//                   } bg-card w-24 min-w-[94px]  h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg duration-150 transition-all ease-in-out`}
//                   onClick={() => setFilter(category.urlParamName)}
//                 >
//                   <div
//                     className={`w-10 h-10 rounded-full bg-red ${
//                       filter === category.urlParamName ? "bg-white" : "bg-card"
//                     } group-hover:bg-white flex items-center justify-center `}
//                   >
//                     <IoFastFood
//                       className={`${
//                         filter === category.urlParamName
//                           ? "text-[#515151]"
//                           : "text-white"
//                       } text-lg group-hover:text-[#515151]`}
//                     />
//                   </div>
//                   <p
//                     className={`text-sm ${
//                       filter === category.urlParamName
//                         ? "text-white"
//                         : "text-[#515151]"
//                     } group-hover:text-white`}
//                   >
//                     {category.name}
//                   </p>
//                 </div>
//               ))}
//           </div>

//           {/* Filtered Dishes Section */}
//           <div className="flex flex-wrap justify-center gap-7">
//             {dishes
//               .filter((dish) => dish.category === filter)
//               .map((dish) => (
//                 <Item key={dish.id} {...dish} />
//               ))}
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       <Modal isOpen={isModalOpen} onClose={closeModal} userName={userName} />
//     </div>
//   );
// };

// export default Home;


// import React, { useState, useEffect } from "react";
// import Deliver from "../images/delivery.png";
// import Food from "../components/Food";
// import Ice from "../images/i1.png";
// import Strawbery from "../images/f1.png";
// import Kabab from "../images/c3.png";
// import Fish from "../images/f1.png";
// import Item from "../components/Item";
// import I1 from "../images/i1.png";
// import I2 from "../images/i2.png";
// import I3 from "../images/i3.png";
// import I4 from "../images/i4.png";
// import I5 from "../images/i5.png";
// import { IoFastFood } from "react-icons/io5";
// import { categories, dishes } from "../utils/data";
// import Modal from "../components/Modal"; // Import the Modal component
// import { auth } from "../firebase"; // Firebase authentication
// import { useNavigate } from "react-router-dom"; // For navigation

// const Home = () => {
//   const [filter, setFilter] = useState("chicken");
//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
//   const [userName, setUserName] = useState(""); // User name state
//   const navigate = useNavigate();

//   // Check if the user is logged in when the Home page loads
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUserName(user.displayName || user.email); // Set the user's name
//         setTimeout(() => setIsModalOpen(true), 1000); // Show the modal after 1 second
//       } else {
//         navigate("/Login"); // Redirect to the login page if the user is not logged in
//       }
//     });

//     // Clean up the listener when the component unmounts
//     return () => unsubscribe();
//   }, [navigate]);

//   // Close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="bg-grey ">
//       <div className="bg-hero bg-center bg-cover bg-no-repeat w-full flex flex-col md:flex-row  px-4 md:px-8 py-2 lg:px-16 pt-10 gap-7">
//         <div className="flex flex-col gap-4 xl:gap-7 md:w-1/2 ">
//           <div className="bg-lightOrange flex items-center justify-center gap-2 px-4 py-1 rounded-3xl w-[50%] md:w-[55%] lg:w-[43%] xl:w-[30%]">
//             <p className="text-orange font-bold">Bike Delivery</p>
//             <div className="h-8 w-8 bg-white rounded-full flex justify-center items-center">
//               <img
//                 src={Deliver}
//                 alt=""
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           </div>
//           <div className="text-3xl lg:text-4xl xl:text-5xl">
//             <h1 className="font-bold">The Fastest Delivery in</h1>
//             <h1 className="text-orange font-bold">Your City</h1>
//           </div>
//           <div>
//             <p className="text-lightgrey text-base font-medium">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
//               illo. Maxime ipsa error dolorem minus, odio dolores quia, cum
//               voluptatum dolor expedita quas at corrupti. Debitis accusamus
//               ducimus porro eius!
//             </p>
//           </div>
//           <div>
//             <button className="bg-oracle w-full lg:w-[20%] py-1 rounded-lg">
//               Order now
//             </button>
//           </div>
//         </div>

//         <div className=" rounded-lg  pt-10 flex gap-2 justify-evenly items-center flex-wrap md:w-1/2 lg:w-[45%] xl:w-[30%]">
//           <Food
//             image={Ice}
//             heading="Icecream"
//             descritpion="Chocolate & vanilla"
//             price={5.25}
//           />
//           <Food
//             image={Strawbery}
//             heading="Strawberries"
//             descritpion="Fresh Strawberries"
//             price={10.25}
//           />
//           <Food
//             image={Kabab}
//             heading="Chicken Kebab"
//             descritpion="Mixed kebab plate"
//             price={8.25}
//           />
//           <Food
//             image={Fish}
//             heading="Fish Kebab"
//             descritpion="Mixed fish kebab"
//             price={5.25}
//           />
//         </div>
//       </div>

//       <div className="px-4 md:px-8 lg:px-16 py-5">
//         <h1 className="text-2xl font-bold xl:text-3xl">
//           Our Fresh & Healthy Fruits
//         </h1>

//         <div className="flex mt-10 justify-between flex-wrap">
//           <Item
//             image={I1}
//             heading="Pure Vanilla ice cream"
//             price={4.50}
//             description="Awesome creams with"
//           />
//           <Item
//             image={I2}
//             heading="Pure Vanilla ice cream"
//             price={3.75}
//             description="Awesome creams with"
//           />
//           <Item
//             image={I3}
//             heading="Pure Vanilla ice cream"
//             price={0.75}
//             description="Awesome creams with"
//           />
//           <Item
//             image={I4}
//             heading="Pure Vanilla ice cream"
//             price={1}
//             description="Awesome creams with"
//           />
//           <Item
//             image={I5}
//             heading="Pure Vanilla ice cream"
//             price={100}
//             description="Awesome creams with"
//           />
//         </div>
//       </div>

//       <div className="px-4 md:px-8 lg:px-16 py-5 flex-col">
//         <h1 className="text-2xl font-bold pb-5 xl:text-3xl">Menu</h1>

//         <div>
//           {/* Category Filter Section */}
//           <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 mt-6 overflow-x-scroll scrollbar-none">
//             {categories &&
//               categories.map((category) => (
//                 <div
//                   key={category.id}
//                   className={`group ${
//                     filter === category.urlParamName
//                       ? "bg-cartNumBg"
//                       : "bg-white"
//                   } bg-card w-24 min-w-[94px]  h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg duration-150 transition-all ease-in-out`}
//                   onClick={() => setFilter(category.urlParamName)}
//                 >
//                   <div
//                     className={`w-10 h-10 rounded-full bg-red ${
//                       filter === category.urlParamName ? "bg-white" : "bg-card"
//                     } group-hover:bg-white flex items-center justify-center `}
//                   >
//                     <IoFastFood
//                       className={`${
//                         filter === category.urlParamName
//                           ? "text-[#515151]"
//                           : "text-white"
//                       } text-lg group-hover:text-[#515151]`}
//                     />
//                   </div>
//                   <p
//                     className={`text-sm ${
//                       filter === category.urlParamName
//                         ? "text-white"
//                         : "text-[#515151]"
//                     } group-hover:text-white`}
//                   >
//                     {category.name}
//                   </p>
//                 </div>
//               ))}
//           </div>

//           {/* Filtered Dishes Section */}
//           <div className="flex flex-wrap justify-center gap-7">
//             {dishes
//               .filter((dish) => dish.category === filter)
//               .map((dish) => (
//                 <Item key={dish.id} {...dish} />
//               ))}
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       <Modal isOpen={isModalOpen} onClose={closeModal} userName={userName} />
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import Deliver from "../images/delivery.png";
import Food from "../components/Food";
import Ice from "../images/i1.png";
import Strawbery from "../images/f1.png";
import Kabab from "../images/c3.png";
import Fish from "../images/fi1.png";
import Item from "../components/Item";
import F1 from "../images/f8.png";
import F2 from "../images/f2.png";
import F3 from "../images/f3.png";
import F4 from "../images/f4.png";
import F5 from "../images/f5.png";
import { IoFastFood } from "react-icons/io5";
import { categories, dishes } from "../utils/data";
import Modal from "../components/Modal"; // Import the Modal component
import { auth } from "../firebase"; // Firebase authentication
import { useNavigate } from "react-router-dom"; // For navigation

const Home = () => {

  const [filter, setFilter] = useState("chicken");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [userName, setUserName] = useState(""); // User name state
  const navigate = useNavigate();

  // Check if the user is logged in when the Home page loads
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Use displayName or fallback to email if displayName is not available
        setUserName( user.email|| user.displayName); 
        setIsModalOpen(true); // Show the modal once the Home page is loaded
      } else {
        navigate("/Login"); // Redirect to the login page if the user is not logged in
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [navigate]);

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-grey ">
      <div className="bg-hero bg-center bg-cover bg-no-repeat w-full flex flex-col md:flex-row  px-4 md:px-8 py-2 lg:px-16 pt-10 gap-7">
        <div className="flex flex-col gap-4 xl:gap-7 md:w-1/2 ">
          <div className="bg-lightOrange flex items-center justify-center gap-2 px-4 py-1 rounded-3xl w-[50%] md:w-[55%] lg:w-[43%] xl:w-[30%]">
            <p className="text-orange font-bold">Bike Delivery</p>
            <div className="h-8 w-8 bg-white rounded-full flex justify-center items-center">
              <img
                src={Deliver}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-3xl lg:text-4xl xl:text-5xl">
            <h1 className="font-bold">The Fastest Delivery in</h1>
            <h1 className="text-orange font-bold">Your City</h1>
          </div>
          <div>
            <p className="text-lightgrey text-base font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              illo. Maxime ipsa error dolorem minus, odio dolores quia, cum
              voluptatum dolor expedita quas at corrupti. Debitis accusamus
              ducimus porro eius!
            </p>
          </div>
          <div>
            <button className="bg-oracle w-full lg:w-[20%] py-1 rounded-lg">
              Order now
            </button>
          </div>
        </div>

        <div className=" rounded-lg  pt-10 flex gap-2 justify-evenly items-center flex-wrap md:w-1/2 lg:w-[45%] xl:w-[30%]">
          <Food
            image={Ice}
            heading="Icecream"
            descritpion="Chocolate & vanilla"
            price={5.25}
          />
          <Food
            image={Strawbery}
            heading="Strawberries"
            descritpion="Fresh Strawberries"
            price={10.25}
          />
          <Food
            image={Kabab}
            heading="Chicken Kebab"
            descritpion="Mixed kebab plate"
            price={8.25}
          />
          <Food
            image={Fish}
            heading="Fish Kebab"
            descritpion="Mixed fish kebab"
            price={5.25}
          />
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-16 py-5">
        <h1 className="text-2xl font-bold xl:text-3xl">
          Our Fresh & Healthy Fruits
        </h1>

        <div className="flex mt-10 justify-between flex-wrap">
          <Item
            image={F1}
            heading="Pure Vanilla ice cream"
            price={4.50}
            description="Awesome creams with"
          />
          <Item
            image={F2}
            heading="Pure Vanilla ice cream"
            price={3.75}
            description="Awesome creams with"
          />
          <Item
            image={F3}
            heading="Pure Vanilla ice cream"
            price={0.75}
            description="Awesome creams with"
          />
          <Item
            image={F4}
            heading="Pure Vanilla ice cream"
            price={1}
            description="Awesome creams with"
          />
          <Item
            image={F5}
            heading="Pure Vanilla ice cream"
            price={100}
            description="Awesome creams with"
          />
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-16 py-5 flex-col">
        <h1 className="text-2xl font-bold pb-5 xl:text-3xl">Menu</h1>

        <div>
          {/* Category Filter Section */}
          <div className="w-full flex items-center z-[-1000px] mb-10 justify-start lg:justify-center gap-8 py-6 mt-6 overflow-x-scroll lg:overflow-hidden scrollbar-none">
            {categories &&
              categories.map((category) => (
                <div
                  key={category.id}
                  className={`group ${
                    filter === category.urlParamName
                      ? "bg-cartNumBg"
                      : "bg-white"
                  } bg-card w-24 min-w-[94px]  h-28 cursor-pointer rounded-lg shadow-lg flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg duration-150 transition-all ease-in-out`}
                  onClick={() => setFilter(category.urlParamName)}
                >
                  <div
                    className={`w-10 h-10 rounded-full bg-red ${
                      filter === category.urlParamName ? "bg-white" : "bg-card"
                    } group-hover:bg-white flex items-center justify-center `}
                  >
                    <IoFastFood
                      className={`${
                        filter === category.urlParamName
                          ? "text-[#515151]"
                          : "text-white"
                      } text-lg group-hover:text-[#515151]`}
                    />
                  </div>
                  <p
                    className={`text-sm ${
                      filter === category.urlParamName
                        ? "text-white"
                        : "text-[#515151]"
                    } group-hover:text-white`}
                  >
                    {category.name}
                  </p>
                </div>
              ))}
          </div>

          {/* Filtered Dishes Section */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-7">
            {dishes
              .filter((dish) => dish.category === filter)
              .map((dish) => (
                <Item key={dish.id} {...dish} />
              ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} userName={userName} />
    </div>
  );
};

export default Home;


