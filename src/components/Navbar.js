import React from 'react'
import "./navbar.css"

export default function Navbar() {
  const WalletConnector = async() => {
    alert("wallet connector activated")
  }
  return (
    <div className='nav-div'>
    <div className='navbar'>
        <span>Shibx Prediction (Beta)</span>
        <button onClick={WalletConnector}>Connect Wallet</button>
        <button onClick={WalletConnector}>Get Test Shibx Token</button>
    </div>
    </div>
  )
}
