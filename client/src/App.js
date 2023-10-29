// import About from "./components/About";
// import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";
// import Trainers from "./components/Trainers";
// import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";
// import Login from "./pages/Login";
// import Booking from "./pages/Booking";

// export default function App() {
//   return (
//     <main className="text-gray-400 bg-gray-900 body-font">
//       <Navbar />
//       <About />
//       <Trainers />
//       <Skills />
//       <Testimonials />
//       <Contact />
//       <Login />
//       <Booking />
//     </main>
//   );
// }

import React from "react";
import "./styles.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_35p114pH8oNuHX72SmrvsFqh00Azv3ZaIA");

const App = () => {
  return (
    <div className="App">
      <div className="product">
        <img
          src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
          alt="laptop"
          style={{ width: "100%", height: "auto" }}
        />
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default App;