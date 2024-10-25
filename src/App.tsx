import {useState} from 'react'
import './app.css'
import PlayerName from './component/PlayerName';
import Resource from './component/Resource'
import {Resourceprops} from './component/Resource'
function App() {
  //Megacredit
  const [Megacredit, setMegacredit] = useState<number>(0)
  const handleMegacreditChange=(increment:number)=>{
    setMegacredit(Megacredit+increment)
  }
  const MegacreditObj:Resourceprops = {
    name: "Megacredit",
    amount: Megacredit,
    onAmountChange:handleMegacreditChange,
  }
  //Steel
  const [Steel, setSteel] = useState<number>(0)
  const handleSteelChange=(increment:number)=>{
    setSteel(Steel+increment)
  }
  const SteelObj:Resourceprops = {
    name: "Steel",
    amount: Steel,
    onAmountChange:handleSteelChange,
  }
  

  return (
    
    <div className="container">
      <PlayerName/>
      <Resource {...MegacreditObj}></Resource>
      <Resource {...SteelObj}></Resource>
      
      
    </div>
  )
}

export default App
