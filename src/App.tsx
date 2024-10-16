import './app.css'
import PlayerName from './component/PlayerName';
function App() {
  
  return (
    
    <div className="container">
      <PlayerName/>
      <div className="resourceContainer">
        <p>Acél: <span>50</span></p>
        <div className="buttonContainer">
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
      </div>

      <div className="resourceContainer">
        <p>Acél: <span>50</span></p>
        <div className="buttonContainer">
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
      </div>

      <div className="resourceContainer">
        <p>Acél: <span>50</span></p>
        <div className="buttonContainer">
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
      </div>
    </div>
  )
}

export default App
