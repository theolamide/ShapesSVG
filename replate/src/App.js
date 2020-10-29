import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <label for="shapes">Choose a shape:</label>
        <select name="shapes">
          <option value="none"></option>
          <option value="circle">Circle</option>
          <option value="rectangle">Rectangle</option>
        </select>
      </form>
      
        <svg width="20rem" height="20rem" style={{border: "1px solid black"}}>
          <circle cx="10rem" cy="10rem" r="5rem" stroke="green" stroke-width="2" fill="yellow" />
        </svg>
        
    </div>
  );
}

export default App;
