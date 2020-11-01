import {useState} from 'react';
import Circle from './Components/Circle.js';
import Rectangle from './Components/Rectangle.js';
import './App.css';

const chooseShape = {
  Shape: ""
}

function App() {

  const [currShape, setCurrShape] = useState(chooseShape)

  let toRender;

  if (currShape.Shape === "circle"){
      toRender = <Circle />
    } else if (currShape.Shape === "rectangle"){
      toRender = <Rectangle />
    } 
  
  const handleChange = event => {
    setCurrShape({ ...currShape, [event.target.name]: event.target.value})
    // console.log(currShape)
  }
    
  return (
    <div className="App">
      <form>
        <label htmlFor="shapes">Choose a shape:</label>
        <select 
          name="Shape" 
          value={currShape.Shape} 
          onChange={handleChange}      
        >
          <option> -- </option>
          <option value="circle"> circle </option>
          <option value="rectangle"> rectangle </option>
        </select>
      </form>
      {toRender}
    </div>
  );
}

export default App;
