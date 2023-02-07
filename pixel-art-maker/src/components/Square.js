import { useContext, useState } from 'react'
import '../styles/Square.css'
import {colorContext} from '../App'
export default function Square(props){
    const [currentColor, setCurrentColor] = useState('white')
    let localColorContext = useContext(colorContext)
    let selectedColor = localColorContext.selectedColor;
    let mouseIsDown = localColorContext.mouseIsDown;
    let brushOrFill = localColorContext.brushOrFill;
    const handleMouseDown = (e) => {
        if(brushOrFill === "brush"){
            setCurrentColor(selectedColor)
        } else if (brushOrFill === "fill"){
            
        }
    }
    const mouseEnter = () => {
        if(mouseIsDown === true && brushOrFill ==="brush"){
            setCurrentColor(selectedColor)
        } else{
            return
        }
    }
    return(
        <div className="square" id={`${props.x},${props.y}`} x={props.x} y={props.y} onMouseDown={handleMouseDown} style={{ "backgroundColor": `${currentColor}` }} onMouseOver={mouseEnter}>
             
        </div>
    )
}