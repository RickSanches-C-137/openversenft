import React, { useEffect, useState } from "react";
import Nfts from "./nfts"
import { requestClient } from "../../utils/request-client";
import Footer from "../layout/Footer";

function Collection() {
  const [nfts, setNfts] = useState([]);
 
  async function getNfts() {
    const NftRes = await requestClient.get("/nft/user");
    setNfts(NftRes.data);
  }

  useEffect(() => {
    getNfts();
  }, []);
  return (
    <div>
      <Nfts nfts={nfts} />
      <Footer/>
    </div>
  );
}

export default Collection;
