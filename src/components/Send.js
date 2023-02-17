import { ethers } from 'ethers';
import React, { useContext, useState } from 'react'
import { Bars } from 'react-loader-spinner';
import { AppState } from '../App';

const Send = () => {

    const App = useContext(AppState);


  return (
    <div className="w-full m-auto">
      <form>
        <div>
          <div className="flex flex-col justify-center items-center m-auto">
            <input
              className="w-1/4 p-3 bg-black border-2 border-blue-900 border-opacity-60 bg-opacity-70 outline-none
            rounded-lg placeholder:pl-1 mt-1"
              onChange={(e) => App.setName(e.target.value)}
              type="text"
              placeholder="Your Name"
            />
            <input
              className="w-1/4 p-3 bg-black border-2 border-blue-900 border-opacity-60 bg-opacity-70 outline-none
            rounded-lg placeholder:pl-1 mt-5"
              onChange={(e) => App.setMessage(e.target.value)}
              type="text"
              placeholder="Your Message"
            />
            <input
              className="w-1/4 p-3 bg-black border-2 border-blue-900 border-opacity-60 bg-opacity-70 outline-none
            rounded-lg placeholder:pl-1 mt-5"
              onChange={(e) => App.setAmount(e.target.value)}
              type="text"
              placeholder="Your Tip Amount"
            />
          </div>
          <div className="flex justify-center items-center m-auto my-8">
            {App.loading ? (
              <div
                className="w-1/5 flex mt-4 cursor-pointer justify-center items-center p-2 bg-green-700 bg-opacity-70
      border-2 border-blue-900 border-opacity-80 text-xl font-medium rounded-lg"
              >
                <Bars width={30} height={40} color="white" />
              </div>
            ) : (
              <div
                onClick={App.transferTip}
                className=" w-1/5flex mt-4 cursor-pointer justify-center items-center px-6 py-3 bg-green-700 bg-opacity-70
      border-2 border-blue-900 border-opacity-80 text-xl font-medium rounded-lg"
              >
                Send Tip
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Send