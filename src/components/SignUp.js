// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const SignupPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here (e.g., send data to a server)
//     console.log("Form submitted:", { name, email, password });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#dfd3b6]">
//       <div className="bg-[#bdb98d] p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-semibold text-[#6c6a50] text-center mb-8">
//           Sign Up
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-[#6c6a50] text-lg mb-2"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full p-3 border border-[#bdb98d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c6a50]"
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-[#6c6a50] text-lg mb-2"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full p-3 border border-[#bdb98d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c6a50]"
//             />
//           </div>

//           <div className="mb-6">
//             <label
//               htmlFor="password"
//               className="block text-[#6c6a50] text-lg mb-2"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-3 border border-[#bdb98d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c6a50]"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full p-3 bg-[#6c6a50] text-white text-lg font-semibold rounded-lg hover:bg-[#5a5740] transition duration-200"
//           >
//             Sign Up
//           </button>

//           <Link to="/Login " className="text-[#723512] underline">
//           Already have account
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { auth, createUserWithEmailAndPassword } from "../firebase"; // Import Firebase functions


// const SignupPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear any previous error

//     try {
//       // Firebase sign up
//       await createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           // Signed up successfully
//           const user = userCredential.user;
//           console.log("Signup Success:", user);
          
//           // Optionally, save user data to your database or navigate to another page
//           // For now, we'll just navigate to the login page after signup
//           navigate('/Login');
//         });
//     } catch (err) {
//       console.error("Error during signup:", err.message);
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#dfd3b6]">
//       <div className="bg-[#bdb98d] p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-semibold text-white text-center mb-8">
//           Sign Up
//         </h2>
//         <form onSubmit={handleSubmit}>
//           {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-[#6c6a50] text-lg mb-2"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full p-3 border border-[#bdb98d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c6a50]"
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-[#6c6a50] text-lg mb-2"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full p-3 border border-[#bdb98d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c6a50]"
//             />
//           </div>

//           <div className="mb-6">
//             <label
//               htmlFor="password"
//               className="block text-[#6c6a50] text-lg mb-2"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-3 border border-[#bdb98d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c6a50]"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full p-3 bg-[#6c6a50] text-white text-lg font-semibold rounded-lg hover:bg-[#5a5740] transition duration-200"
//           >
//             Sign Up
//           </button>

//           <Link to="/Login" className="text-[#723512] underline mt-4 block text-center">
//             Already have an account? Log in
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { auth, createUserWithEmailAndPassword } from "../firebase"; // Import Firebase functions


// const SignupPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false); // Track loading state

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear any previous error
//     setLoading(true); // Set loading to true when the user submits the form

//     try {
//       // Firebase sign up
//       await createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           // Signed up successfully
//           const user = userCredential.user;
//           console.log("Signup Success:", user);
          
//           // Optionally, save user data to your database (not implemented here)
//           // You can add additional code to save user data, e.g., to Firestore.

//           // Navigate to the login page after successful signup
//           setLoading(false); // Set loading to false after successful sign-up
//           navigate('/Login');
//         });
//     } catch (err) {
//       console.error("Error during signup:", err.message);
//       setError(err.message);
//       setLoading(false); // Set loading to false if there is an error
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#dfd3b6]">
//       <div className="bg-[#bdb98d] p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-semibold text-white text-center mb-8">
//           Sign Up
//         </h2>
//         <form onSubmit={handleSubmit}>
//           {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-[#6c6a50] text-lg mb-2"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full p-3 border border-[#bdb98d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c6a50]"
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-[#6c6a50] text-lg mb-2"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full p-3 border border-[#bdb98d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c6a50]"
//             />
//           </div>

//           <div className="mb-6">
//             <label
//               htmlFor="password"
//               className="block text-[#6c6a50] text-lg mb-2"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full p-3 border border-[#bdb98d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c6a50]"
//             />
//           </div>

//           {/* Show loading spinner when data is being processed */}
//           {loading ? (
//             <div className="text-center text-[#6c6a50] mb-4">Loading...</div>
//           ) : (
//             <button
//               type="submit"
//               className="w-full p-3 bg-[#6c6a50] text-white text-lg font-semibold rounded-lg hover:bg-[#5a5740] transition duration-200"
//             >
//               Sign Up
//             </button>
//           )}

//           <Link to="/Login" className="text-[#723512] underline mt-4 block text-center">
//             Already have an account? Log in
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from "../firebase"; // Import Firebase functions

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error
    setLoading(true); // Set loading to true when the user submits the form

    try {
      // Firebase sign up
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up successfully
          const user = userCredential.user;
          console.log("Signup Success:", user);
          
          // Optionally, save user data to your database (not implemented here)
          // You can add additional code to save user data, e.g., to Firestore.

          // Navigate to the login page after successful signup
          setLoading(false); // Set loading to false after successful sign-up
          navigate('/Login');
        });
    } catch (err) {
      console.error("Error during signup:", err.message);
      setError(err.message);
      setLoading(false); // Set loading to false if there is an error
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#dfd3b6]">
      <div className="bg-[#bdb98d] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-white text-center mb-8">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-[#6c6a50] text-lg mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-[#bdb98d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c6a50]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[#6c6a50] text-lg mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-[#bdb98d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c6a50]"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-[#6c6a50] text-lg mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-[#bdb98d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c6a50]"
            />
          </div>

          {/* Show the spinner when loading is true */}
          {loading ? (
            <div className="flex justify-center mb-4">
              <div className="spinner"></div>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full p-3 bg-[#6c6a50] text-white text-lg font-semibold rounded-lg hover:bg-[#5a5740] transition duration-200"
            >
              Sign Up
            </button>
          )}

          <Link to="/Login" className="text-[#723512] underline mt-4 block text-center">
            Already have an account? Log in
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

