"use clint"
import {useState} from 'react'

export const Button = () => {

    const [clicked, setClicked] = useState(false)
   
    
    const handleClick = () => {
        setClicked((prev)) => {
            return !prev 
        }
        console.log(clicked)
    }
    return (
        <button onclick ={handleClick} >
            {cliked ? "Clicked" : "Click me"}
            </button>
    )

}