import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { arr } from './database/data';
import { WalletConnect } from './blockchain/wallet';

function App() {
  // const walletconnect = async() => {
  //   const obj = await WalletConnect();
  //   console.log(obj)
  // }
  //  function Click_me() {
  //    console.log(arr);
  //    arr.arr_01.tf(1,4);
  //  }
  return (
    <div>
      <Navbar ClassName = "bg-white"></Navbar>
      <Card></Card>
      {/* <button className='bg-blue-700' onClick={Click_me}>Click Me</button> */}
    </div>
  );
}

export default App;
