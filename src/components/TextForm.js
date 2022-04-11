import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function TextForm(props) {
    const [Text, setText] = useState("");
    const handleUpClick = ()=>{
        setText(Text.toUpperCase());
        props.showAlert("Converted to Upper case!", "success");
    }
    const handleLoClick = ()=>{
        setText(Text.toLowerCase());
        props.showAlert("Converted to Lower case!", "success");
    }
    const handleCopy = (e)=>{
        navigator.clipboard.writeText(Text);
        e.target.innerHTML = "Copied";
        props.showAlert("Copied to clipboard!", "success");
        setTimeout(() => {
            e.target.innerHTML = "Copy text"
        }, 2000);
    }
    const handleExtraspaces = ()=>{
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed all extra spaces!", "success");
    }
    const handleCleartext = ()=>{
        setText("");
        props.showAlert("Cleared the text!", "success");
    }
    return (
        <>
        <div className="container my-3">
                <h2 className="mb-4" style={{color: props.mode==="light" ? "black" : "white"}}>{props.heading}</h2>
                <div className="mb-3">
                    <textarea
                     className="form-control"
                        style={{ backgroundColor: props.mode === "light" ? "white" : "#13466e", color: props.mode === "light" ? "black" : "white"}}
                     id="exampleFormControlTextarea1"
                     value={Text}
                     placeholder="Enter Your text here"
                     onChange={(e)=>{setText(e.target.value)}}
                     rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" disabled= {Text.length === 0} onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 my-2" disabled= {Text.length === 0} onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2 my-2" disabled= {Text.length === 0} onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2 my-2" disabled= {Text.length === 0} onClick={handleExtraspaces}>Remove extra spaces</button>
                <button className="btn btn-primary mx-2 my-2" disabled= {Text.length === 0} onClick={handleCleartext}>Clear Text</button>
        </div>
            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
            <h2>Your Text summary</h2>
                <p>{Text.split(/\s+/).filter((element)=>{ return element.length !== 0}).length} Words and {Text.length} characters </p>
                <p>{0.08 * Text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{Text.length > 0 ? Text: "Nothing to preview"}</p>
        </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}
TextForm.defaultProps = {
    heading: "Heading"
}
