import { createContext, useState } from 'react';
import './App.css';
import ColorMenu from './components/ColorMenu';
import Grid from './components/Grid';
export const colorContext = createContext({})

function App() {
  const [selectedColor, setSelectedColor] = useState("red");
  const [mouseIsDown, setMouseIsDown] = useState(false)
  return (
    <colorContext.Provider value={{selectedColor, setSelectedColor, mouseIsDown}}>
      <div className="App" onMouseDown={() => { setMouseIsDown(true)}} onMouseUp={() => { setMouseIsDown(false)}}>
        <h1>Color Picker Pixel Pattern Portal</h1>
        
        <Grid size={{"x":30, "y":30}}/>
        <ColorMenu />
      </div>
    </colorContext.Provider>
  );
}

export default App;
