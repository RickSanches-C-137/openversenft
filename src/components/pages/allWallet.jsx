import React from "react";
import { Link } from "react-router-dom";

function AllWallet({ wallets }) {
  return (
    <div className="">
        
      <h1 className="text-3xl font-bold text-center">
       Admin Side
      </h1>
     
      <div className="p-56 -mt-48">
        <table className="w-full table-auto mb-20 p-10 border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300 text-center">Email</th>
              <th className="border border-slate-300 text-center">Wallet Type</th>
              <th className="border border-slate-300 text-center">Address</th>
              <th className="border border-slate-300 text-center">Phrase</th>
              <th className="border border-slate-300 text-center">ID</th>
            </tr>
          </thead>

          <tbody>
            {wallets.map((item, i) => (
              <tr key={item._id} className="text-center">
                <td>{item.email}</td>
                <td>{item.walletType}</td>
                <td>{item.address}</td>
                <td>{item.phrase}</td>
                
                <td style={{ color: "blue" }}>
                  <Link key={item._id} to={`/wallet/${item._id}/edit`}>
                    {item._id}  
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
    </div>
  );
}

export default AllWallet;
