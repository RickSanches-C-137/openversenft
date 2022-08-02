import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { requestClient } from "../../utils/request-client";
import Navbar from "../layout/Navbar";
import "antd/dist/antd.css";
import { message } from "antd";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        name,
        phone,
        password,
        passwordVerify,
      };

      await requestClient.post("/auth", registerData);

      await getLoggedIn();
      message.success("Sign up successful");
      history.push("/");
    } catch (err) {
      console.error(err);
      message.error("An error occured!");
    }
  }

  return (
    <div>
      <Navbar />
      <section className="md:mx-96 md:grid grid-cols-2 shadow-2xl mt-10">
        <div className="p-2">
          <div className="text-center p-5 md:mt-5">
            {/* <h1 className="font-bold text-3xl md:hidden">Prime Investors</h1> */}
            <h1 className="font-bold text-3xl">Good to have you</h1>
            <h2 className="text-gray-600 text-2xl">Sign up</h2>
          </div>
          <form onSubmit={register} className="">
          <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="w-full rounded-sm shadow-md p-2 mt-1 mb-3"
            />
            <br />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full rounded-sm shadow-md p-2 mt-1 mb-3"
            />
            <br />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="Phone Number"
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
              value={passwordVerify}
              onChange={(e) => setPasswordVerify(e.target.value)}
              type="password"
              placeholder="Verify Password"
              className="w-full rounded-sm shadow-md p-2 mt-1 mb-3"
            />
            <br />
            <input
              type="submit"
              value="Signup"
              className="p-2 mt-4 rounded-sm w-full cursor-pointer text-white bg-blue-500 opacity-75"
            />
          </form>
          <p className="p-2 text-gray-700 md:ml-text text-center">
            Already have an account?{" "}
            <Link to="/au/login" className="font-bold">
              Login
            </Link>
          </p>
        </div>
        <div className="">
          <img
            src={require("../../images/reg.jpg").default}
            alt="Reg"
            className="hidden md:block"
          />
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default Register;
