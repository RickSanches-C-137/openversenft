import React from "react";
import { Link } from "react-router-dom";
import bg from "../../images/art1.png";
import { SiBinance } from "react-icons/si";
import { SiBlockchaindotcom } from "react-icons/si";
import { FcLike } from "react-icons/fc";
export default function Index() {
  const nfts1 = [
    {
      name: "craig 01",
      img: "https://drive.google.com/uc?export=view&id=14etDtIndwU5os_Ea8WTxv1e14p26X3Ad",
      likes: "740",
      key: 1,
    },
    {
      name: "craig 04",
      img: "https://drive.google.com/uc?export=view&id=10-RUBVje0dHOfYQcxHNQwnZz3qnrlRta",
      likes: "618",
      key: 2,
    },
    {
      name: "craig 02",
      img: "https://drive.google.com/uc?export=view&id=1A1uOij0rldmdWhHKUOD1gwDRhaLXKdDp",
      likes: "890",
      key: 3,
    },
    {
      name: "craig 05",
      img: "https://drive.google.com/uc?export=view&id=17dmWbk7ltpXfnyXQAL0SD8WrT7GY7a7I",
      likes: "240",
      key: 6,
    },
    {
      name: "craig 03",
      img: "https://drive.google.com/uc?export=view&id=1kwfBHMSUDLCrxPsCa5O_7LsyFu2mi8p9",
      likes: "800",
      key: 4,
    },
   
  ];
  const nfts2 = [
    {
      name: "craig-BA 012",
      img: "c1",
      likes: "1240",
      key: 1,
    },
    {
      name: "craig-BA 087",
      img: "c18",
      likes: "2680",
      key: 2,
    },
    {
      name: "craig-BA 353",
      img: "c8",
      likes: "940",
      key: 3,
    },
    {
      name: "craig-BA 04",
      img: "c9",
      likes: "1940",
      key: 4,
    },
  ];
  return (
    <div className="bg-gray-900">
      <section
        className="md:flex justify-around top-0 w-full h-full bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="p-10">
          <h1 className="text-7xl mt-56 text-white">
            CRAIG NFT
            <br /> COLLECTIONS
            <br /> FOR EVERYONE
          </h1>
          <p className="text-gray-400 text-xl mb-10">
            Your NFT item's Uniqueness is what gives it value and fame,
            <br /> therefore being a part of our collection is a top notch
            advantage for you.
          </p>
          <Link to="/connectwallet" className="">
            <span className="mt-56 md:ml-5 p-3 uppercase text-white font-bold border-2 border-green-300 md:bg-green-300 hover:text-green-500 hover:bg-white hover:border-white">
              Connect Wallet
            </span>
          </Link>
        </div>
        <div className="pt-10">
          <img
            src={require("../../images/img.png").default}
            alt="Craig"
            className=""
          />
        </div>
      </section>
      <section className="md:flex justify-around h-full">
        <div className="mt-28 mx-10">
          <h4 className="text-green-300 font-bold text-xl">ABOUT US</h4>
          <h1 className="text-white font-bold text-5xl my-10">
            WHAT IS CRAIG?
          </h1>
          <p className="mb-10 text-xl text-gray-400">
            Craig NFT is a global metaverse platform that enables individuals or
            a group of persons to own/posses a collection of NFT items which is
            unique to only them.
            <br /> Craig NFTs is in collaboration with well known companies who
            run the metaverse and ethereum Blockchain.
          </p>
          <Link to="/register" className="">
            <span className="mt-56 md:ml-5 p-3 uppercase text-white font-bold text-xl border-2 border-green-300 md:bg-transparent hover:text-green-500 hover:bg-white hover:border-white">
              GET NFTs
            </span>
          </Link>
        </div>
        <div className="mt-28 mx-10">
          <div className="border-2 border-green-700 p-3 mb-5 bg-gray-800">
            <h2 className="text-white text-2xl font-bold mb-3">
              Unique, 1/1 Generated
            </h2>
            <p className="text-gray-400 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim minim
              veniam nostrud exercitation.
            </p>
          </div>
          <div className="border-2 border-green-700 p-3 mb-5 bg-gray-800">
            <h2 className="text-white text-2xl font-bold mb-3">
              Unique, 1/1 Generated
            </h2>
            <p className="text-gray-400 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim minim
              veniam nostrud exercitation.
            </p>
          </div>
          <div className="border-2 border-green-700 p-3 bg-gray-800">
            <h2 className="text-white text-2xl font-bold mb-3">
              Unique, 1/1 Generated
            </h2>
            <p className="text-gray-400 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim minim
              veniam nostrud exercitation.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-10 mt-28">
        <div className="grid lg:grid-cols-5 gap-10 ">
          {nfts1.map((item) => (
            <div className="card">
              <img
                src={item.img}
                alt="Craig"
                className=""
              />
              <span className="flex justify-between">
                <h1 className="text-white text-xl">{item.name}</h1>

                <span className="text-white text-xl flex">
                  <FcLike className="mt-1" />
                  {item.likes}
                </span>
              </span>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-4 gap-10 mx-10 mt-10">
          {nfts2.map((item) => (
            <div className="card">
              <img
                src={require("../../images/c1/" + item.img + ".jpeg").default}
                alt="Craig"
                className=""
              />
              <span className="flex justify-between">
                <h1 className="text-white text-xl italic">{item.name}</h1>

                <span className="text-white text-xl flex ">
                  <FcLike className="mt-1" />
                  {item.likes}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-32">
        <h4 className="text-green-300 font-bold text-xl ml-10">HOW WE WORK</h4>
        <h1 className="text-white font-bold text-5xl my-10 ml-10">
          HOW TO USE OPENVERSE_NFT
        </h1>

        <div className="md:grid grid-cols-4 gap-10 mx-10">
          <div className="card mb-3">
            <h1 className="text-white font-bold text-3xl">
              Set Up Your Wallet
            </h1>
            <h1 className="text-white font-bold text-6xl -mt-10 opacity-25">
              01
            </h1>
            <p className="text-white text-xl">
              To become a member of the Craig Openverse_nft, One needs to
              connect their ethereum wallet to the Openverse_nft. This will give
              accessible features to user.
            </p>
          </div>
          <div className="card mb-3">
            <h1 className="text-white font-bold text-3xl">
              Buy Your Collection
            </h1>
            <h1 className="text-white font-bold text-6xl -mt-10 opacity-25">
              02
            </h1>
            <p className="text-white text-xl">
              To buy you NFT collection from on Openverse_nft, Connect your
              ethereum wallet, make payment and proceed to check your
              collection.
            </p>
          </div>
          <div className="card mb-3">
            <h1 className="text-white font-bold text-3xl">Add Your NFTs</h1>
            <h1 className="text-white font-bold text-6xl -mt-10 opacity-25">
              03
            </h1>
            <p className="text-white text-xl">
              Logon to your dashboard and click the "ADD" option on the menu and
              proceed to follow the steps to Adding your NFT character to the
              Openverse_nft.
            </p>
          </div>
          <div className="card mb-3">
            <h1 className="text-white font-bold text-3xl">Sell Your NFTs</h1>
            <h1 className="text-white font-bold text-6xl -mt-10 opacity-25">
              04
            </h1>
            <p className="text-white text-xl">
              Logon to your dashboard and click the "SELL" option on the menu
              and proceed to follow the steps to selling your NFT character to
              the Openverse_nft.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-32">
        <h4 className="text-green-300 font-bold text-xl ml-10 text-center">
          PARTNERS
        </h4>
        <h1 className="text-white font-bold text-5xl my-5 ml-10 text-center">
          CRAIG INVESTORS
        </h1>

        <div className="md:flex justify-around  items-center">
          <div className="md:flex justify-around">
            <SiBinance className="text-yellow-500 text-4xl mr-2" />
            <h2 className="text-yellow-500 text-2xl">Binance</h2>
          </div>
          <div className="md:flex mr-2">
            <img
              src={require("../../images/open.png").default}
              alt="Craig"
              className="w-12 h-12 mr-2"
            />
            <h2 className="text-white text-2xl">OpenSea</h2>
          </div>
          <div className="md:flex justify-around">
            <img
              src={require("../../images/meta.png").default}
              alt="Craig"
              className="w-12 h-12 mr-2"
            />
            <h2 className="text-white text-2xl">MetaMask</h2>
          </div>
        </div>
        <div className="md:flex justify-around">
          <div className="md:flex justify-around">
            <SiBlockchaindotcom className="text-blue-500 text-4xl mr-2 mt-10" />
            <h2 className="text-white text-2xl mt-10">Blockchain</h2>
          </div>
          <div className="">
            <img
              src={require("../../images/coinbase.png").default}
              alt="Craig"
              className="w-32 mt-8"
            />
          </div>
        </div>
      </section>
      {/* <section className="mt-32">
        <h4 className="text-green-300 font-bold text-xl ml-10">FAQs</h4>
        <h1 className="text-white font-bold text-5xl my-5 ml-10">
          LOOKING FOR ANSWERS?
        </h1>
        <div>
          <h3>What Are The NFTs?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div></div>
      </section> */}
      <section className="mt-32 mb-10 bg-gray-800">
        <h1 className="text-white text-center text-3xl">
          Don’t Miss Out, Join Now For Early Access
        </h1>
        <form className="flex justify-around md:mx-80">
          <input
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            type="text"
            required
            placeholder="Enter Your Email Address"
            className="text-gray-900 border-green-600  bg-transparent md:w-4/5 p-2"
          />

          <input
            type="submit"
            value="Send"
            className="p-2  rounded-sm w-fit md:w-1/5 cursor-pointer text-white bg-green-600 opacity-75 hover:bg-transparent"
          />
        </form>

        <p className="text-white text-xl text-center mt-7 pb-5">
          Copyright © {new Date().getFullYear()} | All Rights Reserved |{" "}
          <a href="/" className="hover:text-gray-400">
            OPENVERSE_NFT
          </a>
        </p>
      </section>
    </div>
  );
}
