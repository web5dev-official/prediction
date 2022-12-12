import React from 'react'
import "./navbar.css"
import { WalletConnect } from '../blockchain/wallet'
import { useState } from 'react'

export default function Navbar() {
  const [ConnectStatus, setConnectStatus] = useState("Connect Wallet")
  const WalletConnector = async() => {
    await WalletConnect();
    setConnectStatus("Connected");
  }
  return (
    <div className='nav-div'>
    <div className='navbar'>
        <span>Shibx Prediction (Beta)</span>
        <button onClick={WalletConnector}>{ConnectStatus}</button>
        <button onClick={WalletConnector}>Get Test Shibx Token</button>
    </div>
    </div>
  )
}
