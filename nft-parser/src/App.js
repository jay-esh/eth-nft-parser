// import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState, useTransition } from "react";
import "./App.css" 
import NftCont from "./NftDis.js"
import Display from "./Display";

// import { ethers } from "ethers";
function Connect() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [nfts, setnftdata] = useState([]);
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
  * Implement your connectWallet method here
  */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      // const provider = new ethers.providers.Web3Provider(window.ethereum)
      // let blockno = await provider.getBlockNumber()
      // console.log("block number:", blockno)
      

    } catch (error) {
      console.log(error)
    }
  }

  async function shownfts(){
    try{
      const { ethereum } = window;
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      // console.log("Connected", accounts[0]);
      const request = await fetch('https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:'+accounts[0]);
      const data = await request.json();
      // console.log(data);
      setnftdata(data.items);
      setCurrentAccount(accounts[0]);
      // return data;

    }
    catch (error) {
      console.log(error)
    }
  }

  async function renderurls()  {
    const data = await connectWallet();
    let links = [];
    // console.log(data.items);
    for (let i = 1; i < data.total; i++) {
      for (let j = 0; j < data.items[i].meta.content.length; j++) {
        // links.append(data.items[i].meta.content[j].url);
        links.push(data.items[i].meta.content[j].url);
      }
      // console.log(data.items[i].meta.content);
    }
    console.log(links);
    // return links;
    // console.log(data);
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  return (
    <div className="App">
      <header className= "myhead" >
        <h1 className="heading"> Show me your NFTs!</h1>
      </header>
      <div className = "connectwall">
        <p>Firstly connect your Metamask wallet.</p>
        <button className="connectwalletbtn" onClick={connectWallet}>
          <p className="text1">Connect Wallet</p>
        </button>
        <div>
          <button className="showNfts" onClick={shownfts}>
            Show NFTs
          </button>
        </div>
        {/* <Display /> */}
        <NftCont data={nfts}/>
      </div>
    </div>
  );
}

export default Connect
