import React from 'react'
import { useState } from 'react'

export default function Textform(props) {

    const [text, setText] = useState("");

    const handleUpClick = () => {
        console.log("Uppercase is called");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = () => {
        console.log("Lowercase is called");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("You are changing the event state");
        setText(event.target.value);
    }
    

    const handleClearClick=()=>{
        console.log("You are clearing the whole text message");
        let newText='';
        setText(newText);
    }

    return (
        <>
            <div className='container' style={{color:props.mode==='dark' ? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <div>
                    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className='btn btn-primary mx-2' onClick={handleDownClick}>Convert to Lowercase</button>
                    <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear text</button>
                    
                </div>
            </div>

            <div className='container my-3' style={{color:props.mode==='dark' ? 'white' : 'black'}}>
                <h2>Your Text Summary</h2>
                <p>Number of words are: {text.split(" ").length-1}</p>
                <p>Number of characters are: {text.length}</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}