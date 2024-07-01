import { useContext } from "react"
import { FirstContext } from "./First";

export function Third  ({handleClick}) {
    const value =useContext(FirstContext);
    return(
        <div className="box">
            <h3>Third  component</h3>
            <Third/>
            <p>{value}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}