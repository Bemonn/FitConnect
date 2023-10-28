import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Trainers from "./components/Trainers";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Login from "./components/Login";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Trainers />
      <Skills />
      <Testimonials />
      <Contact />
      <Login />
    </main>
  );
}