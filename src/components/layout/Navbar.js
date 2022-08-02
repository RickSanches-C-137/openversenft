import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import {GiCyberEye} from "react-icons/gi";
function Navbar() {
  const [nav, setNav] = useState(true);
  const { loggedIn } = useContext(AuthContext);

  return (
    <div class="bg-gray-900">
      <div class="h-24">
        <nav class="md:flex md:justify-between ">
          <div class="flex justify-between ml-10">
            <GiCyberEye className="text-green-500 text-6xl mt-4"/>
            <h1 class="font-bold uppercase p-4 text-white text-4xl mt-3">
              <a href="/" class="hover:text-gray-200">
              Openverse_nft
              </a>
            </h1>
            <div
              class="cursor-pointer md:hidden mx-10 mt-6"
              onClick={() => setNav(!nav)}
            >
              <svg
                class="w-6 ml-2"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
          </div>
          {nav && (
            <ul class="text-md md:mt-8 md:flex md:justify-around mr-10">
              <li className="py-1">
                {!loggedIn && (
                  <>
                    <Link to="/au/signup">
                      <span className="md:ml-5 p-3 rounded-md text-gray-200 font-bold text-sm md:ring-2 ring-green-500 md:bg-white md:text-green-900 hover:text-green-500 duration-700">
                        Open account
                      </span>
                    </Link>
                    <Link
                      to="/au/login"
                      className="md:ml-5 p-3 rounded-md text-gray-200 font-bold text-sm md:ring-2 ring-green-500  hover:bg-white hover:text-gray-900 duration-700"
                    >
                      Sign in
                    </Link>
                  </>
                )}
                {loggedIn && (
                  <>
                    <Link
                      to="/dashboard"
                      className="text-gray-200 font-bold mr-10"
                    >
                      Dashboard
                    </Link>

                    <LogOutBtn />
                  </>
                )}
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
