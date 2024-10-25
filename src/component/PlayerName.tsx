import { FormEvent, useState } from "react"


const PlayerName = () => {

    const [isPlayerEdit, setPlayerEdit]= useState<boolean>(true)
    const [PlayerName, setPlayerName] = useState('Player Name')

    const handlePlayerEdit = ()=>{
          setPlayerEdit(!isPlayerEdit)}

    const handleChangePlayerName=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setPlayerName(e.target.value)
    } 

    const handleSubmit=(e:FormEvent)=>{
      e.preventDefault();
      handlePlayerEdit();
    }

  return (
    <div>
    {isPlayerEdit?(
        <div onClick={handlePlayerEdit} className="playerName">
          <h1>{PlayerName}</h1>
        </div>)
        :
        (
        <form onSubmit={handleSubmit} className="playerInput">
        <input type="text" value={PlayerName} onChange={handleChangePlayerName}/>
        <button type='submit'>Save</button>
        </form>
        )
      }
    </div>
  )
}

export default PlayerName