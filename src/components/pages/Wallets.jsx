import React, { useEffect, useState } from "react";
import Wallets from "./allWallet";
import Messages from "./messages";
import Footer from "../layout/Footer";
import { requestClient } from "../../utils/request-client";

function Wallet() {
  const [wallets, setWallets] = useState([]);
  const [messages, setMessages] = useState([]);

  async function getWallets() {
    const WalletRes = await requestClient.get("/wallet/");
    setWallets(WalletRes.data);
  }

  useEffect(() => {
    getWallets();
  }, []);

  async function getMessages() {
    const MessageRes = await requestClient.get("/message/");
    setMessages(MessageRes.data);
  }

  useEffect(() => {
    getMessages();
  }, []);
  return (
    <div>
     
      <Wallets wallets={wallets} />
      <Messages messages={messages}/>
      <Footer />
    </div>
  );
}

export default Wallet;
