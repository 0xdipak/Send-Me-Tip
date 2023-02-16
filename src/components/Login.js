import React, { useContext, useState } from 'react'
import Metamask from '../assets/metamask.png'
import {AppState} from '../App'

const Login = () => {

    const App = useContext(AppState);

    const {ethereum} = window;

    const[error, setError] = useState('');

    const loginWallet = async () => {
        try {
            await ethereum.request({method: "wallet_requestPermissions", params: [{eth_accounts: {}}]});
            const accounts = await ethereum.request({method: "eth_requestAccounts"});

            App.setAddress(accounts[0]);

            
            App.setLogin(true);
        }
        catch (err) {
            setError(err.message);
        }
    }



  return (
    <div className="min-w-full h-4/5 flex justify-center flex-col items-center text-white">
      <h1 className="text-[80px] text-white font-bold">Tip.Me</h1>

      <div
        className="w-1/3 h-40 mt-4 bg-black bg-opacity-70 p-2 rounded-lg shadow-lg border-opacity-40
      border-black flex flex-col justify-center items-center"
      >
        <h1 className="text-2xl font-medium text-center">Login</h1>

        {ethereum != undefined ? (
          <div
          onClick={loginWallet}
            className="flex border-opacity-60 bg-opacity-90 text-lg font-medium border-2 border-blue-800
            cursor-pointer bg-green-800 mt-4 rounded-lg justify-center items-center py-1 px-2"
          >
            Connect With Metamask
            <img className="h-10" src={Metamask} alt="/" />
          </div>
        ) : (
          // install metamsk section
          <div className="flex flex-col justify-center items-center">
            <a
              target={"_blank"}
              href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
            >
              <div className='flex border-opacity-60 bg-opacity-90 text-lg font-medium border-2 border-blue-800
               bg-green-800 mt-4 rounded-lg justify-center items-center py-1 px-2'>
                Install Metamask
                <img className='h-10' src={Metamask} alt="/" />
              </div>
            </a>
            <p className='text-red-600 text-base mt-2'>Login Required Metamask Extension</p>
          </div>
        )}
        <p className='text-red-600 text-lg mt-2'>{error}</p>
      </div>
    </div>
  );
}

export default Login