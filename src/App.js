import { createContext, useEffect, useState } from "react";
import Login from "./components/Login";
import Main from "./components/Main";
import Header from "./components/Header";
import { ethers } from "ethers";

const AppState = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');



  const getBalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const balance = await signer.getBalance();
    setBalance(ethers.utils.formatEther(balance));
  }

  useEffect(() => {

    getBalance();

  },[])

  return (
    <AppState.Provider value={{login, setLogin, address, setAddress, balance}}>
      <div className="min-w-full h-screen">
        {login ? (
          <div className="min-w-full min-h-full">
            <Header />
            <Main />
          </div>
        ) : (
          <Login />
        )}
      </div>
    </AppState.Provider>
  );
}

export default App;

export {AppState}



// Contract deployed to :  0x454bD015fC99d416b87C432A16247C398D0820f6
