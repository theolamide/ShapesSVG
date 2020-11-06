import {useState, useRef} from 'react';
import Circle from './Components/Circle.js';
import Rectangle from './Components/Rectangle.js';
import SavedRender from './Components/SavedRender.js';
import './App.css';

const chooseShape = {
  Shape: ""
}

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

function App() {

  const [currShape, setCurrShape] = useState(chooseShape)

  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
  
  //Save shapes function to save shape data in localStorage
  const saveShapes = (object, value) => {
    var existingShapes = JSON.parse(localStorage.getItem(object)) || []
    existingShapes.push(value)
    localStorage.setItem(object, JSON.stringify(existingShapes))
    window.location.reload()
    alert("Shape Added")
  }
  
  // Conditional render of shapes form
  let toRender;
  if (currShape.Shape === "circle"){
      toRender = <Circle saveShapes={saveShapes} executeScroll={executeScroll} />
    } else if (currShape.Shape === "rectangle"){
      toRender = <Rectangle saveShapes={saveShapes} executeScroll={executeScroll} />
    } 
  
  const handleChange = event => {
    setCurrShape({ ...currShape, [event.target.name]: event.target.value})
  }

    return (
    <div className="App">
      <div className = "rootFormAndRender">

        <form className="chooseShape">
            <label htmlFor="shapes">Choose a Shape:</label>
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

        {/* Shape Creation Canvas */}
        {toRender}

      </div>
      <div className="shapesRenderBoard" >        
        <SavedRender myRef={myRef}/>
      </div>
      
    </div>
  );
}

export default App;
