import {useState, useEffect} from 'react'
import abi from './contract/chai.json'
import {ethers} from 'ethers'
import Buy from './components/Buy'
import Memos from './components/Memos'
import chai from './chai1.png'


import './App.css';

function App() {

  const [state,setState] = useState({
      provider:null,
      signer:null,
      contract:null,
  });
 const [account,setAccount]=useState("None")
   useEffect(() => {
       const connnectWallet= async () => {
        const contractAddress ="0xB6dF0c41C9DC555B10d1E9D8e48a8cE8F9e82905";
        const contractABI =abi.abi;
        try {
          const {ethereum} = window;

          if(ethereum) {
            const account = await ethereum.request({
              method:"eth_requestAccounts",
            });
          
           window.ethereum.on("chainChanged",()=>{
            window.location.reload();
           })

           window.ethereum.on("accountsChanged",()=>{
            window.location.reload();
           })

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract =new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account)
          setState({provider,signer,contract});
          }else{
            alert("please intall Metamask");
          }
         } catch(error) {
          console.log(error);
         }

       };
       connnectWallet();
   },[])
//console.log(state);
  return ( 
      
    
    
    <div style={{ backgroundColor: "#EFEFEF", height: "100%" }}>
    <img src={chai}  alt=".." width="25%" style={{ marginLeft:'799px'}} />
  
    <p
      className="text-muted lead "
      style={{ marginTop: "10px", marginLeft: "5px" }}
    >
      <small>Connected Account - {account}</small>
    </p>
    <div className="container">
      <Buy state={state} />
      <Memos state={state} />
    </div>
   <footer style={{ position:" fixed", height: "100px", bottom: "0"}}>
     Made by Jayjeet
</footer>
  </div>
  );
}

export default App;
