import { useState } from "react";
import AuthService from '../utils/auth';
import { useMutation } from "@apollo/client";
import emailjs from '@emailjs/browser';
import { ADD_USER, LOGIN_USER } from "../utils/mutations";

export default function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'client'
  });

  const [activeForm, setActiveForm] = useState("login");
  const [loginUser] = useMutation(LOGIN_USER);
  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (e, setStateFunc) => {
    const { name, value } = e.target;
    setStateFunc(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ variables: loginData });
      if (data && data.login && data.login.token) {
        AuthService.login(data.login.token);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (signupData.password !== signupData.confirmPassword) {
      console.error("Passwords do not match!");
      return;
    }
    const { firstName, lastName, email, password, role } = signupData;
    function sendWelcomeEmail() {
      //sent to their email
      const templateParams = {   
        to_email: signupData.email,
        to_name: signupData.firstName
      };

      // Use the email service library to send the email
      emailjs
        .send('service_trawbdm', 'template_qp5k9ug', templateParams, 'XePbch_hrvL5A6TRM')
        .then((result) => {
          console.log('Welcome email sent successfully', result);
        }, (error) => {
          console.log('Welcome email sending failed', error)
        });
    }
    sendWelcomeEmail(signupData)
    try { 
      const { data } = await addUser({ variables: { firstName, lastName, email, password, role } });
      if (data && data.addUser && data.addUser.token) {
        AuthService.login(data.addUser.token);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

return (
  <div className="container mx-auto bg-gray-900">
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <button
            className={`mr-4 p-2 ${
              activeForm === "login" ? "bg-blue-500" : "bg-blue-300"
            }`}
            onClick={() => setActiveForm("login")}
          >
            Login
          </button>
          <button
            className={`p-2 ${
              activeForm === "signup" ? "bg-green-500" : "bg-green-300"
            }`}
            onClick={() => setActiveForm("signup")}
          >
            Sign Up
          </button>
        </div>

        {activeForm === "login" && (
          <form
            onSubmit={handleLoginSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                  required
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="*********"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Log In
                </button>
              </div>
          </form>
        )}

        {activeForm === "signup" && (
          <form
            onSubmit={handleSignupSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                name="firstName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="First Name"
                required
                value={signupData.firstName}
                onChange={(e) => handleInputChange(e, setSignupData)}
              />
            </div>

            <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  name="lastName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                  value={signupData.lastName}
                  onChange={(e) =>
                    setSignupData({ ...signupData, lastName: e.target.value })
                  }
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                  pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}"
                  title="Please enter a valid email address"
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="role"
                >
                  Role
                </label>
                <select
                  name="role"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="role"
                  value={signupData.role}
                  onChange={(e) =>
                    setSignupData({ ...signupData, role: e.target.value })
                  }
                >
                  <option value="client">Client</option>
                  <option value="trainer">Trainer</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  name="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="*********"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  type="password"
                  placeholder="*********"
                  onChange={(e) => handleInputChange(e, setSignupData)}
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
          </form>
        )}
      </div>
    </div>
  </div>
);
}