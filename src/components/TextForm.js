
import React, {useState} from 'react'


export default function TextForm(props) {

 
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handlelowClick =()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleclearClick =()=>{
       let clear = '';
       setText(clear);
       props.showAlert("Text removed","success");
   }
   const handlecopyClick =()=>{
     let copy = document.getElementById("MyBox");
    //  copy.select();
     navigator.clipboard.writeText(copy.value);
     document.getSelection().removeAllRanges();
     props.showAlert("Copied to Clickboard","success");
 }
 const handleremoveClick =()=>{
   let remove = text.split(/[ ]+/);
   setText(remove.join(" "));
   props.showAlert("Extra space removed","success");
}

    const handleOnChange =(event)=>{
        console.log("On Change");
        setText(event.target.value);
        
    }
  const [text,setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#162e51'}}>
  <h1 className='mb4'>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode==='dark'?'#131c39':'white',color: props.mode==='dark'?'white':'#162e51'}} id="MyBox" rows="9"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>  
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlelowClick}>Convert to lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclearClick}>Clear Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlecopyClick}>Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleremoveClick}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#162e51'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} <b>words</b> {text.length} <b>characters</b></p>
      <p>{0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} <b>Minutes read</b></p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
