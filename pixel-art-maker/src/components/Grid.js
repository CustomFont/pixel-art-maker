import '../styles/Grid.css'
import Square from './Square';

export default function Grid(props) {
    let cols = props.size.x;
    let rows = props.size.y;
    const createGrid = () => {
        let grid = [];
        
        for (let col = 0; col < cols; col++){
            grid.push([])
            for (let row = 0; row < rows; row++){
                grid[col].push({"x":row, "y":col})
            }
        }
        return grid;
    }
    
    
    let grid = createGrid(cols, rows)
    return(
        <div className="grid-container" >
            {grid.map(col=> {
                return col.map( tile => {
                    return(
                        <Square key={`${tile.x},${tile.y}`} x={tile.x} y={tile.y} />
                    )
                })
            })}
        </div>
    )
}