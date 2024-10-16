import { useState } from "react"


const PlayerName = () => {

    const [isPlayerEdit, setPlayerEdit]= useState(true)
    const handlerPlayerEdit = ()=>{
          setPlayerEdit(!isPlayerEdit)}
  return (
    <div>
    {isPlayerEdit?(
        <div onClick={handlerPlayerEdit} className="Playername">
          <h1>Player Name</h1>
        </div>):
        (<form>
        <input type="text" name="" id=""/>
        <button type='button'>Save</button>
        </form>)
      }
    </div>
  )
}

export default PlayerName