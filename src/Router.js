import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./test/app";

import Index from "./components/main/index";
import Dashboard from "./components/main/dashboard";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Wallet from "./components/pages/Wallets";
import Collection from "./components/pages/collection";
import Faqs from "./components/pages/faqs";
import WalletForm from "./components/pages/walletForm";
import AddNft from "./components/pages/addNft";
import Messages from "./components/pages/messages";
import Help from "./components/pages/help";
import AuthContext from "./context/AuthContext";
import Search from "./components/pages/search";
import { Update } from "./components/pages/updateWallet";
import Navbar from "./components/layout/Navbar";
import PageNotFound from "./components/pages/pageNotFound";
function Router() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Index />
        </Route>
       
        <Route path="/search">
          <Search />
        </Route>
        <Route exact path="/faqs">
          <Faqs />
        </Route>
        {!loggedIn && (
          <>
            <Route path="/au/signup">
              <Register />
            </Route>
            <Route path="/au/login">
              <Login />
            </Route>
          </>
        )}
        {loggedIn && (
          <>
            <Route exact path="/transaction">
              <Navbar />
              <Wallet />
            </Route>
            <Route path="/etherpay">
              <App />
            </Route>
            <Route exact path="/collections">
              <Collection />
            </Route>
            <Route exact path="/connectwallet">
              <WalletForm />
            </Route>
            <Route exact path="/sellnft">
              <AddNft />
            </Route>
            <Route exact path="/transaction/:id/edit">
              <Update />
            </Route>
            <Route exact path="/dashboard">
              {/* <Navbar/> */}
              <Dashboard />
            </Route>
            <Route exact path="/help">
              <Help />
            </Route>
            <Route exact path="/messages">
              <Messages />
            </Route>
          </>
        )}
         <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
