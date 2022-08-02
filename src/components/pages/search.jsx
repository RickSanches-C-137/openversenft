import axios from "axios";
import React, { useState } from "react";
import Footer from "../layout/Footer";
export default function Search() {
  const [wallet, setWallets] = useState([]);
  const [_id, setTrackingId] = useState("");

  async function searchWallet(e) {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:8080/wallet/${_id}`);
      setWallets(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="bg-secondary-100">
      <form onSubmit={searchWallet} className="md:ml-96 ml-3">
        <input
          value={_id}
          onChange={(e) => setTrackingId(e.target.value)}
          type="text"
          className="md:w-2/5 h-10 shadow-xl border-2 border-gray-700 p-2 mt-1 mb-3 text-gray-900"
          placeholder="Search Wallet"
        />
        <input
          type="submit"
          value="Search"
          className="bg-blue-900 text-white rounded-sm w-20 h-10"
        />
      </form>

      <div>
        <div className="">
          <h1 className="text-3xl font-bold text-center">Wallets</h1>
          <div className="md:p-56 md:-mt-48">
            <div className="grid grid-cols-4">
              <ul className="bg-gray-200 mx-5 p-5 shadow-xl rounded-sm font-bold">
                <h2 className="text-center text-xl font-extrabold">
                  Wallet Details
                </h2>
                <li className="mb-1">
                  Email: <span className="">{wallet.email}</span>
                </li>
                
                <li className="mb-1">{wallet._id}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
