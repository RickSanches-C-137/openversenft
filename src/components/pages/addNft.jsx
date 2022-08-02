import { requestClient } from "../../utils/request-client";
import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "antd/dist/antd.css";
import { message } from "antd";
import DashNav from "../layout/DashNav";

function AddNft() {
  const { loggedIn } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImage] = useState();

  async function saveNft(e) {
    alert("Request is processing! Kindly wait for response")
    e.preventDefault();
    const form = e.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const formData = new FormData();
    for (const file of fileInput.files) {
      formData.append("file", file);
    }
    formData.append("upload_preset", "nft_uploads");
    const data = await fetch(
      "https://api.cloudinary.com/v1_1/ricksanchez000777/image/upload",

      {
        method: "POST",
        body: formData,
      }
    ).then((res) => res.json());
    const img = data.url;
  
    try {
      const nftData = {
        name,
        price,
        img,
      };
     
      await requestClient.post("nft/", nftData, {
       
      });
      message.success("NFT added successfully!");
    } catch (err) {
      message.error("Error Adding NFT. Try again!");
    }
  }

  return (
    <div class="md:grid grid-cols-5 bg-gray-900 text-gray-800 h-full">
      <DashNav />
      {/* Content */}
      <main class="px-16 py-6 md:col-span-4">
        <header>
          <h1 className="text-xl text-white">Hi, {loggedIn.email}</h1>
          <h4 class="font-bold pb-2 text-white">Add/Sell NFT</h4>
        </header>

        <div className="">
          <h2 className="font-bold text-5xl uppercase pb-2 border-b border-gray-200 text-center text-white">
            Enter details below
          </h2>

          <form onSubmit={saveNft} className="" method="post">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">Add NFT for sale</h4>
                <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                  Kindly enter your NFT details below.
                </p>
                <div className="relative w-full mb-3 mt-8">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="border-0 px-3 py-3 mb-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="NFT Name"
                    style={{ transition: "all .15s ease" }}
                  />
                  <label className="text-red-500 font-bold">
                    Price should be in Eth
                  </label>
                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="text"
                    className="border-0 px-3 py-3 mb-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Price"
                    style={{ transition: "all .15s ease" }}
                  />
                  <input
                    value={img}
                    onChange={(e) => setImage(e.target.value)}
                    type="file"
                    className="border-0 mb-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    name="file"
                    style={{ transition: "all .15s ease" }}
                    
                  />
                </div>

                <div className="text-center mt-2">
                  <button
                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="submit"
                    style={{ transition: "all .15s ease" }}
                  >
                    Add NFT
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AddNft;
