import {FormEvent, useState} from 'react'
import './app.css'
import PlayerName from './component/PlayerName';
import Resource from './component/Resource'
import {Resourceprops} from './component/Resource'
function App() {
  //Megacredit
  const [Megacredit, setMegacredit] = useState<number>(0)
  const [MegacreditProduction,setMegacreditProduction]=useState<number>(0)
 
  const handleMegacreditChange=(increment:number)=>{
    setMegacredit(Megacredit+increment)
  }
  const handleMegacreditProsuctionChange=(increment:number)=>{
    setMegacreditProduction(MegacreditProduction+increment)
  }
  const MegacreditObj:Resourceprops = {
    name: "Megacredit",
    amount: Megacredit,
    production:MegacreditProduction,
    onAmountChange:handleMegacreditChange,
    onProductionChange:handleMegacreditProsuctionChange
  }
  //Steel
  const [Steel, setSteel] = useState<number>(0)
  const [SteelProduction, setSteelProduction] = useState<number>(0)
  
  const handleSteelChange=(increment:number)=>{
    setSteel(Steel+increment)
  }
  const handleSteeltProsuctionChange=(increment:number)=>{
    setSteelProduction(SteelProduction+increment)
  }
  const SteelObj:Resourceprops = {
    name: "Steel",
    amount: Steel,
    production: SteelProduction,
    onAmountChange:handleSteelChange,
    onProductionChange: handleSteeltProsuctionChange,
  }
  //Titan

  const [Titan, setTitan] = useState<number>(0)
  const [TitanProduction, setTitanProduction] = useState<number>(0)
  const handleTitanChange=(increment:number)=>{
    setTitan(Steel+increment)
  }
  const handleTitanProsuctionChange=(increment:number)=>{
    setTitanProduction(TitanProduction+increment)
  }
  const TitanObj:Resourceprops = {
    name: "Titan",
    amount: Titan,
    production:TitanProduction,
    onAmountChange:handleTitanChange,
    onProductionChange:handleTitanProsuctionChange
  }
  
  const handleSubmit=(e:FormEvent)=>{
    e.preventDefault()
    setMegacredit(Megacredit+MegacreditProduction)
    setSteel(Steel+SteelProduction)
    setTitan(Titan+TitanProduction)
  }

  return (
    
    <form onSubmit={handleSubmit} className="container">
      <PlayerName/>
      <Resource {...MegacreditObj}></Resource>
      <Resource {...SteelObj}></Resource>
      <Resource {...TitanObj}></Resource>
      <button type="submit" className=''>Next Round</button>
    </form>
  )
}

export default App
