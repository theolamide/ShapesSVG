import {useState} from 'react';
import Circle from './Components/Circle.js';
import Rectangle from './Components/Rectangle.js';
import SavedRender from './Components/SavedRender.js';
import './App.css';

const chooseShape = {
  Shape: ""
}

function App() {

  const [currShape, setCurrShape] = useState(chooseShape)
  
  //Save shapes function to save shape data in localStorage
  const saveShapes = (object, value) => {
    var existingShapes = JSON.parse(localStorage.getItem(object)) || []
    console.log(typeof existingShapes, existingShapes)
    existingShapes.push(value)
    console.log(existingShapes)
    localStorage.setItem(object, JSON.stringify(existingShapes))
  }
  
  let toRender;

  if (currShape.Shape === "circle"){
      toRender = <Circle saveShapes={saveShapes} />
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

      <SavedRender />
      
    </div>
  );
}

export default App;
