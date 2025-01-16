// import React, { useState } from "react";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login form submission (e.g., send data to a server)
//     console.log("Login Submitted:", { email, password });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#dfd3b6]">
//       <div className="bg-[#bdb98d] p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-semibold text-[#6c6a50] text-center mb-8">
//           Log In
//         </h2>
//         <form onSubmit={handleSubmit}>
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
//             Log In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// import React, { useState } from "react";
// import { auth, signInWithEmailAndPassword } from "../../src/firebase"; // Import Firebase auth functions
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirecting after login

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // State to hold error message

//   const navigate = useNavigate(); // For redirecting after login success

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Try to authenticate using Firebase
//       await signInWithEmailAndPassword(auth, email, password);

//       // Redirect to Home page upon successful login
//       navigate("/Home");
//     } catch (err) {
//       // Handle login errors
//       setError("Invalid email or password. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#dfd3b6]">
//       <div className="bg-[#bdb98d] p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-semibold text-[#6c6a50] text-center mb-8">
//           Log In
//         </h2>

//         {/* Display error message if there is any */}
//         {error && (
//           <p className="text-red-500 text-center mb-4">{error}</p>
//         )}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-[#6c6a50] text-lg mb-2">
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
//             <label htmlFor="password" className="block text-[#6c6a50] text-lg mb-2">
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
//             Log In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// import React, { useState } from "react";
// import { auth, signInWithEmailAndPassword } from "../firebase"; // Import Firebase auth functions
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirecting after login


// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // State to hold error message
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
//   const [userName, setUserName] = useState(""); // Store the user's name for the modal

//   const navigate = useNavigate(); // For redirecting after login success

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Try to authenticate using Firebase
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Assuming the user's displayName is set on Firebase (You can set it in your Firebase Authentication user settings)
//       setUserName(user.displayName || email); // Use email if displayName is not set

//       // Show the modal after successful login
//       setIsModalOpen(true);

//       // Optionally, you can navigate to the Home page after a small delay
//       setTimeout(() => {
//         navigate("/Home"); // Redirect after the modal is closed
//       }, 2000); // Change the delay time if needed

//     } catch (err) {
//       // Handle login errors
//       setError("Invalid email or password. Please try again.");
//     }
//   };

 

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#dfd3b6]">
//       <div className="bg-[#bdb98d] p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-semibold text-[#6c6a50] text-center mb-8">
//           Log In
//         </h2>

//         {/* Display error message if there is any */}
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-[#6c6a50] text-lg mb-2">
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
//             <label htmlFor="password" className="block text-[#6c6a50] text-lg mb-2">
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
//             Log In
//           </button>
//         </form>
//       </div>

     
//     </div>
//   );
// };

// export default LoginPage;

// import React, { useState } from "react";
// import { auth, signInWithEmailAndPassword } from "../firebase"; // Import Firebase auth functions
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirecting after login
// import { ClipLoader } from "react-spinners"; // Import ClipLoader spinner from react-spinners

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // State to hold error message
//   const [loading, setLoading] = useState(false); // State to manage loading spinner visibility

//   const navigate = useNavigate(); // For redirecting after login success

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Show the spinner when login starts
//     setError(""); // Clear any previous errors

//     try {
//       // Try to authenticate using Firebase
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Optionally, you can set the user's display name or email
//       // Here, we use the email if displayName is not set
//       const userName = user.displayName || email;

//       // Simulate a short delay to show the spinner before redirecting
//       setTimeout(() => {
//         setLoading(false); // Hide the spinner
//         navigate("/Home"); // Redirect to Home page
//       }, 1500); // Adjust the delay if needed

//     } catch (err) {
//       // Handle login errors
//       setError("Invalid email or password. Please try again.");
//       setLoading(false); // Hide the spinner after an error
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#dfd3b6]">
//       <div className="bg-[#bdb98d] p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-semibold text-[#6c6a50] text-center mb-8">
//           Log In
//         </h2>

//         {/* Display error message if there is any */}
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-[#6c6a50] text-lg mb-2">
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
//             <label htmlFor="password" className="block text-[#6c6a50] text-lg mb-2">
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

//           {/* Show the spinner when loading is true */}
//           {loading ? (
//             <div className="flex justify-center mb-4">
//               <ClipLoader color="#6c6a50" loading={loading} size={50} />
//             </div>
//           ) : (
//             <button
//               type="submit"
//               className="w-full p-3 bg-[#6c6a50] text-white text-lg font-semibold rounded-lg hover:bg-[#5a5740] transition duration-200"
//             >
//               Log In
//             </button>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../firebase"; // Import Firebase auth functions
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirecting after login

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to hold error message
  const [loading, setLoading] = useState(false); // State to manage loading spinner visibility

  const navigate = useNavigate(); // For redirecting after login success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show the spinner when login starts
    setError(""); // Clear any previous errors

    try {
      // Try to authenticate using Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Optionally, you can set the user's display name or email
      // Here, we use the email if displayName is not set
      const userName = user.displayName || email;

      // Simulate a short delay to show the spinner before redirecting
      setTimeout(() => {
        setLoading(false); // Hide the spinner
        navigate("/Home"); // Redirect to Home page
      }, 1500); // Adjust the delay if needed

    } catch (err) {
      // Handle login errors
      setError("Invalid email or password. Please try again.");
      setLoading(false); // Hide the spinner after an error
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#dfd3b6]">
      <div className="bg-[#bdb98d] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-[#6c6a50] text-center mb-8">
          Log In
        </h2>

        {/* Display error message if there is any */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#6c6a50] text-lg mb-2">
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
            <label htmlFor="password" className="block text-[#6c6a50] text-lg mb-2">
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
              <div className="spinner"></div> {/* Custom spinner */}
            </div>
          ) : (
            <button
              type="submit"
              className="w-full p-3 bg-[#6c6a50] text-white text-lg font-semibold rounded-lg hover:bg-[#5a5740] transition duration-200"
            >
              Log In
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;



// import React, { useState } from "react";
// import { auth, signInWithEmailAndPassword } from "../firebase"; // Firebase functions
// import { useNavigate } from "react-router-dom"; // For page navigation

// const LoginPage = () => {
//   const [emailOrUsername, setEmailOrUsername] = useState(""); // State for email/username input
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // State for error messages
//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
//   const [userName, setUserName] = useState(""); // User name for the modal

//   const navigate = useNavigate(); // To navigate to Home after successful login

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       let userCredential;

//       if (emailOrUsername.includes("@")) {
//         // If the input contains "@", treat it as an email
//         userCredential = await signInWithEmailAndPassword(auth, emailOrUsername, password);
//       } else {
//         // If the input is not an email, treat it as a username
//         // First, get the user by the username (displayName)
//         const usersSnapshot = await auth.getUsers();
//         const users = usersSnapshot.docs;
//         let user = null;

//         // Find the user with the matching displayName
//         for (let doc of users) {
//           if (doc.displayName === emailOrUsername) {
//             user = doc;
//             break;
//           }
//         }

//         if (user) {
//           // Now, authenticate using the email associated with that user
//           userCredential = await signInWithEmailAndPassword(auth, user.email, password);
//         } else {
//           throw new Error("No user found with that username.");
//         }
//       }

//       const user = userCredential.user;
//       setUserName(user.displayName || emailOrUsername); // Set name for modal
//       setIsModalOpen(true); // Show the modal

//       // Redirect to the Home page after a delay
//       setTimeout(() => {
//         navigate("/Home");
//       }, 2000); // You can adjust the delay time

//     } catch (err) {
//       setError("Invalid email/username or password. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#dfd3b6]">
//       <div className="bg-[#bdb98d] p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-semibold text-[#6c6a50] text-center mb-8">
//           Log In
//         </h2>

//         {/* Display error message if there's an error */}
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="emailOrUsername" className="block text-[#6c6a50] text-lg mb-2">
//               Email or Username
//             </label>
//             <input
//               type="text"
//               id="emailOrUsername"
//               value={emailOrUsername}
//               onChange={(e) => setEmailOrUsername(e.target.value)}
//               required
//               className="w-full p-3 border border-[#bdb98d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c6a50]"
//             />
//           </div>

//           <div className="mb-6">
//             <label htmlFor="password" className="block text-[#6c6a50] text-lg mb-2">
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
//             Log In
//           </button>
//         </form>
//       </div>

//       {/* Modal for success */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//             <h2 className="text-xl font-semibold">Welcome, {userName}!</h2>
//             <p className="mt-2">We're glad to have you here.</p>
//             <button
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
//               onClick={() => setIsModalOpen(false)}
//             >
//               Okay
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginPage;



