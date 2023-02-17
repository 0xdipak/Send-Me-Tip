import { createContext, useEffect, useState } from "react";
import Login from "./components/Login";
import Main from "./components/Main";
import Header from "./components/Header";
import swal from "sweetalert";
import { ethers } from "ethers";
import ABI from './artifacts/contracts/TipMe.sol/TipMe.json'

const AppState = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);


  const contractAddress = "0x454bD015fC99d416b87C432A16247C398D0820f6";
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const tipMeContract = new ethers.Contract(contractAddress, ABI.abi, signer);
  console.log(tipMeContract);



  const getBalance = async () => {
    const balance = await signer.getBalance();
    setBalance(ethers.utils.formatEther(balance));
  }


  const transferTip = async (e) => {
    setLoading(true);

    try{
      const tx = await tipMeContract.sendTip(name, message, {
        value: ethers.utils.parseEther(amount),
      });
      await tx.wait();
      swal({
        title: "Operation Successful",
        icon: "success",
        buttons: false,
        timer: 3000,
      });

      setName("");
      setMessage("");
      setAmount("");

    }
    catch(err) {
      setMessage(err.message);
    }

    setLoading(false);
  };

  useEffect(() => {

    getBalance();

  },[])

  return (
    <AppState.Provider
      value={{
        login,
        setLogin,
        address,
        setAddress,
        balance,
        tipMeContract,
        getBalance,
        transferTip,
        name,
        setName,
        message,
        setMessage,
        amount,
        setAmount,
        loading,
        setLoading,
      }}
    >
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
