import { useState, useContext } from "react";
import { ethers } from "ethers"
import AuthContext from "../context/AuthContext";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";
import "antd/dist/antd.css";
import { message } from "antd";
import DashNav from "../components/layout/DashNav";

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether),
    });
    // console.log({ ether, addr });
    //console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    //setError(err.message);
    message.error("Somthing went wrong!");
  }
};

 const App = ()=> {
  const { loggedIn } = useContext(AuthContext);
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr"),
    });
  };

  return (
    <div className="md:grid grid-cols-5 bg-gray-900 h-fit">
      <DashNav/>
      {/* End Nav */}
      <main class="px-16 py-6 md:col-span-4">
        <header>
          <h2 className="text-white">Hi, {loggedIn.email}</h2>
          <h4 class="font-bold pb-2 text-white">DEPOSIT ETHEREUM (WEB3)</h4>
        </header>

        <div>
          <h4 class="font-bold mt-12 pb-2 text-white">
            Kindly enter the amount you wish to send below and hit "Pay Now".
          </h4>
          <h4 class="font-bold pb-2 border-b border-gray-200 text-red-500 text-xl">
            NOTE: You must have a MetaMask extention on your browser to continue with this option.
          </h4>
        </div>
        <form className="m-4" onSubmit={handleSubmit}>
          <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
            <main className="mt-4 p-4">
              <h1 className="text-xl font-semibold text-gray-700 text-center">
                Send ETH payment
              </h1>
              <div className="">
                <div className="my-3">
                  <input
                    type="text"
                    name="addr"
                    value="0x24621856FE42Fd6eAFf7589617a3fC092930D9b3"
                    //disabled
                    className="input input-bordered block w-full focus:ring focus:outline-none border border-gray-200 rounded-md"
                    placeholder=" Recipient Address"
                  />
                </div>
                <div className="my-3">
                  <input
                    name="ether"
                    type="number"
                    className="input input-bordered block w-full focus:ring focus:outline-none border border-gray-200 rounded-md"
                    placeholder=" Price in ETH"
                  />
                </div>
              </div>
            </main>
            <footer className="p-4">
              <button
                type="submit"
                className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
              >
                Pay now
              </button>
              <ErrorMessage message={error} />
              <TxList txs={txs} />
            </footer>
          </div>
        </form>
      </main>
      
    </div>
  );
}
export default App