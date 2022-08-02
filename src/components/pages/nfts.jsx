import React from "react";
import DashNav from "../layout/DashNav";
import {FaEthereum} from "react-icons/fa"
import {FcRightUp2} from "react-icons/fc"
function MessagesList({ nfts }) {

  return (
    <div className="md:grid grid-cols-5 bg-gray-900">
      <DashNav />
      <div className="col-span-4">
        <div>
          <h1 className="text-3xl font-bold text-center text-gray-300 mt-14">
            MY NFTs
          </h1>
          <div className="p-10">
            <div className="md:grid grid-cols-4 gap-10">
              {nfts.map((item, i) => (
                <div className="card">
                <img
                  src={item.img}
                  alt="Craig"
                  className=""
                />
                <div className="">
                  <h1 className="text-white text-xl mt-3 italic">
                    {item.name}
                  </h1>
                  <div className="flex justify-around">
                    <span className="flex">
                      <h1 className="text-white text-xl ">{item.price}</h1>
                      <FaEthereum className="text-gray-500 text-2xl mt-1" />
                    </span>

                    <span className="flex">
                      <h1 className="text-white text-xl ">Outgoing</h1>
                      <FcRightUp2 className="text-gray-500 text-2xl mt-1" />
                    </span>
                  </div>
                </div>
              </div>
                
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default MessagesList;
