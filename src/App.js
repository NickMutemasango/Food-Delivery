// import "./App.css";
// import Header from "./components/Navbar";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Menu from "./pages/Menu";
// import Services from "./pages/Services";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="About" element={<About />}></Route>
//           <Route path="Menu" element={<Menu />}></Route>
//           <Route path="Services" element={<Services />}></Route>
//         </Routes>
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import Header from "./components/Navbar";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Menu from "./pages/Menu";
// import Services from "./pages/Services";
// import { CartProvider } from "./context/stateProvider"; // Correct import
//  // Import the StateProvider

// function App() {
//   return (
//     // Wrap your app with the StateProvider
//     <CartProvider>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="About" element={<About />} />
//           <Route path="Menu" element={<Menu />} />
//           <Route path="Services" element={<Services />} />
//         </Routes>
//       </div>
//     </CartProvider>
//   );
// }

// export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Menu from "./pages/Menu";
// import Services from "./pages/Services";
// import { StateProvider } from "./context/stateProvider";  // Import the StateProvider
// import { CartProvider } from "./context/cartProvider";  // Import the CartProvider
// import Landing from './components/Landing'

// function App() {
//   return (
//     // Wrap your app with both the StateProvider and CartProvider
//     <StateProvider>
//       <CartProvider>
//         <div className="App">
//           <Header />
//           <Routes>
//             <Route path="/" element={<Landing />} />
//             <Route path="Home" element={<Home />} />
//             <Route path="About" element={<About />} />
//             <Route path="Menu" element={<Menu />} />
//             <Route path="Services" element={<Services />} />
//           </Routes>
//         </div>
//       </CartProvider>
//     </StateProvider>
//   );
// }

// export default App;

// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Header from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Menu from "./pages/Menu";
// import Services from "./pages/Services";
// import { StateProvider } from "./context/stateProvider";  // Import the StateProvider
// import { CartProvider } from "./context/cartProvider";  // Import the CartProvider
// import Login from './components/Login'
// import Landing from "./components/Landing";
// import SignUp from "./components/SignUp";

// function App() {
//   const location = useLocation(); // Get the current location (route)

//   return (
//     // Wrap your app with both the StateProvider and CartProvider
//     <StateProvider>
//       <CartProvider>
//         <div className="App">
//           {/* Conditionally render the Navbar based on the current route */}
//           {location.pathname !== "/" && <Header />}  {/* Hide on Landing page */}

//           <Routes>
//             <Route path="/" element={<Landing />} />  {/* Default page */}
//             <Route path="Home" element={<Home />} />
//             <Route path="About" element={<About />} />
//             <Route path="Menu" element={<Menu />} />
//             <Route path="Services" element={<Services />} />
//             <Route path="Login" element={<Login />} />
//             <Route path="SignUp" element={<SignUp />} />
//           </Routes>
//         </div>
//       </CartProvider>
//     </StateProvider>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Services from "./pages/Services";
import { StateProvider } from "./context/stateProvider";  // Import the StateProvider
import { CartProvider } from "./context/cartProvider";  // Import the CartProvider
import Login from './components/Login';
import Landing from "./components/Landing";
import SignUp from "./components/SignUp";

function App() {
  const location = useLocation(); // Get the current location (route)

  return (
    // Wrap your app with both the StateProvider and CartProvider
    <StateProvider>
      <CartProvider>
        <div className="App">
          {/* Conditionally render the Navbar based on the current route */}
          {location.pathname !== "/" && location.pathname !== "/Login" && location.pathname !== "/SignUp" && <Header />}  {/* Hide on Landing, Login, and SignUp pages */}

          <Routes>
            <Route path="/" element={<Landing />} />  {/* Default page */}
            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Menu" element={<Menu />} />
            <Route path="Services" element={<Services />} />
            <Route path="Login" element={<Login />} />
            <Route path="SignUp" element={<SignUp />} />
          </Routes>
        </div>
      </CartProvider>
    </StateProvider>
  );
}

export default App;


