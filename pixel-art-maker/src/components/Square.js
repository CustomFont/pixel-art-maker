import { useContext, useState } from 'react'
import '../styles/Square.css'
import {colorContext} from '../App'
export default function Square(props){
    const [currentColor, setCurrentColor] = useState('white')
    let localColorContext = useContext(colorContext)
    let selectedColor = localColorContext.selectedColor;
    let mouseIsDown = localColorContext.mouseIsDown;
    const handleClick = (e) => {
        setCurrentColor(selectedColor)
    }
    const mouseEnter = () => {
        if(mouseIsDown === true){
            setCurrentColor(selectedColor)
        } else{
            return
        }
    }
    return(
        <div className="square" x={props.x} y={props.y} onMouseDown={handleClick} style={{ "backgroundColor": `${currentColor}` }} onMouseOver={mouseEnter}>
             
        </div>
    )
}