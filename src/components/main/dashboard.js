import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import DashNav from "../layout/DashNav";
import { FaEthereum } from "react-icons/fa";
export default function Dashboard() {
  const nfts = [
    {
      name: "#1469 BORED APE",
      price: "6 ETH",
      img: "https://drive.google.com/uc?export=view&id=12i1x98MV_vWWcByLdJB9oIb50Msc8rSh",
      key: 1,
    },
    {
      name: "#1432 BORED APE",
      price: "8 ETH",
      img: "https://drive.google.com/uc?export=view&id=1H4lYfwp-pJnJsSVVj091ehbHz2J5jNb3",
      key: 2,
    },
    {
      name: "#1222 BORED APE",
      price: "5 ETH",
      img: "https://drive.google.com/uc?export=view&id=1FKJUpVK_duPZxkACJkUjFqiMCSJ4Lyhq",
      key: 3,
    },
    {
      name: "Craig Chain",
      price: "4 ETH",
      img: "https://drive.google.com/uc?export=view&id=1u0Sba25xLF5Y0zDxmxFxFsFka9V-LvNk",
      key: 4,
    },
    {
      name: "craig 034",
      price: "6 ETH",
      img: "https://drive.google.com/uc?export=view&id=1jYOREeFPShBC9f-eYB09Lxf7H8KtYK6n",
      key: 5,
    },
    {
      name: "craig 098",
      price: "4 ETH",
      img: "https://drive.google.com/uc?export=view&id=1rycPk6TeMRMd_FqLACPelLVbE2IfQudP",
      key: 6,
    },
    {
      name: "Craig Chain",
      price: "4 ETH",
      img: "https://drive.google.com/uc?export=view&id=1hIdxIvBfg9DWjbTQVetJMQXaqsy-BQUn",
      key: 7,
    },
    {
      name: "craig 034",
      price: "6 ETH",
      img: "https://drive.google.com/uc?export=view&id=1jYOREeFPShBC9f-eYB09Lxf7H8KtYK6n",
      key: 8,
    },
    
  ];
  const { loggedIn } = useContext(AuthContext);
  return (
    <div class="bg-gray-900 text-gray-800 h-full">
      {/* Content */}
      <div className="grid md:grid-cols-5">
        <DashNav />
        {/* End Nav */}
        <main class="px-16 py-6 md:col-span-4">
          <div className="card2 h-fit w-full p-2 shadow-2xl">
            <h2 className="mt-3 mr-10 p-2 text-gray-500 font-bold">
              Hello, {loggedIn.email}
            </h2>
            <h4 class="font-bold text-3xl text-gray-500 mt-2 text-center">
              WELCOME TO YOUR DASHBOARD
            </h4>
            
          </div>
          <header></header>

          <div>
            <h4 class="font-bold text-gray-500 text-2xl mt-10 pb-2">
              AVAILABLE <span className="text-green-500">NFTs</span> FOR YOU
            </h4>
            <div class="mt-8 grid lg:grid-cols-4 gap-5">
              {/* Cards go here */}
              {nfts.map((item) => (
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

                      <Link to="/etherpay">
                        <button className="bg-yellow-500 p-2 font-bold rounded-sm text-white">
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div class="mt-8 grid lg:grid-cols-3 gap-10">
              {/* Cards go here */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
