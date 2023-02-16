import React, { useContext, useState } from 'react'
import {BsWallet2} from 'react-icons/bs'
import { AppState } from '../App'

const Header = () => {

  const App = useContext(AppState);


  return (
    <div className='max-w-[1240px] h-1/4 pt-4 m-auto flex justify-between items-center text-white'>
      <p className='text-[48px] ml-2 font-bold'>Tip.Me</p>

      <div className='flex justify-between items-center'>

        <div className="text-xl mr-2 font-sans border-opacity-60 border-2 border-blue-900 font-medium
        cursor-pointer bg-black px-4 py-2 rounded-lg">
          {`Balance : ${App.balance.slice(0,5)}`}
          </div>
        {/* wallet address section  */}
        <div className="text-xl mr-2 font-sans border-opacity-60 border-2 border-blue-900 font-medium cursor-pointer
        bg-black px-4 py-2 rounded-lg flex justify-between items-center">
          {App.address.slice(0,8)}...{App.address.slice(38)}
          <BsWallet2 size={25} className='ml-2' />
        </div>

      </div>

    </div>
  )
}

export default Header