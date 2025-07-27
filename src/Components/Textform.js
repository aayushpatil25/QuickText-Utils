import React,{useState} from 'react'

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("Uppercase was clicked and text converted to uppercase");
    setText(text.toUpperCase()); // actually convert to uppercase
    props.showAlert(":\n Text converted to UpperCase ","success")
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked and text converted to lowercase");
    setText(text.toLowerCase()); // actually convert to lowercase
    props.showAlert(":\n Text converted to LowerCase ","success")
  };

  const handleClearText = () => {
    console.log("Clear text was clicked and it clears the text");
    setText(" "); // actually clears the text
     props.showAlert(":\n Text cleared successfully","success")
  };

  const handleOnChange = (event) => {
    console.log("On change"); // updates text as user types
    setText(event.target.value);
  };

  const handleCopy = () => {
    const text = document.getElementById("myForm");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert(":\n Text copied successfully","success");
  }

  
  return (
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myForm" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#696969':'white',color:props.mode === 'dark'?'white':'black'}} value={text} rows="8"/>
      </div>
      
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
     
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length - 1 } word and {text.length} characters</p>
        <p>{0.008 * text.split("").length } Minutes to read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

