// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// import About from './components/About.jsx'
// import Trainers from './components/Trainers.jsx'
// import Skills from './components/Skills.jsx'
// import Testimonials from './components/Testimonials.jsx'
// import Contact from './components/Contact.jsx'

// const router = createBrowserRouter([
//   {path: "/",
//   element: <App/>,
//   errorElement: <h1>ERROR!</h1>,
//   children:[
//     {
//       path: "/about",
//       element: <About/>
//     },
//     {
//       path: "/trainers",
//       element: <Trainers/>,
//     },
//     {
//       path: "/skills",
//       element: <Skills/>,
//     },
//     {
//       path: "/testimonials",
//       element: <Testimonials/>,
//     },
//     {
//       path: "/contact",
//       element: <Contact/>,
//     },
//   ]}
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//  <RouterProvider router = {router}/>
// )

import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About.jsx';
import Trainers from './components/Trainers.jsx';
import Skills from './components/Skills.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>ERROR!</h1>,
    children: [
      {
        index: true,
        element: (
          <>
            <About />
            <Trainers />
            <Skills />
            <Testimonials />
            <Contact />
          </>
        ),
      },
      {
              path: "/login",
              element: <Login/>,
            },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
