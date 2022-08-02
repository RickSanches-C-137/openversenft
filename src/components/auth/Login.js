import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { requestClient } from "../../utils/request-client";
import Navbar from "../layout/Navbar";
import "antd/dist/antd.css";
import { message } from "antd";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await requestClient.post("/auth/login", loginData);

      await getLoggedIn();

      history.push("/");
    } catch (err) {
      console.error(err);
      message.error("Please check your credentials.");
    }
  }

  return (
    <div>
      <Navbar />
      <section className="md:mx-96 md:grid grid-cols-2 shadow-2xl mt-10">
        
        <div className="">
          <img
            src={require("../../images/reg.jpg").default}
            alt="Reg"
            className="hidden md:block"
          />
        </div>
        <div className="p-2">
          <div className="text-center p-5 md:mt-24">
            {/* <h1 className="font-bold text-3xl md:hidden">Prime Investors</h1> */}
            <h1 className="font-bold text-3xl">Welcome Back</h1>
            <h2 className="text-gray-600 text-2xl">Login</h2>
          </div>
          <form onSubmit={login} className="">
         
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full rounded-sm shadow-md p-2 mt-1 mb-3"
            />
            <br />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full rounded-sm shadow-md p-2 mt-1 mb-3"
            />
            <br />
            <input
              type="submit"
              value="Login"
              className="p-2 mt-4 rounded-sm w-full cursor-pointer text-white bg-blue-500 opacity-75"
            />
          </form>
          <p className="p-2 text-gray-700 md:ml-text text-center">
            Already have an account?{" "}
            <Link to="/au/signup" className="font-bold">
              Signup
            </Link>
          </p>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default Login;
