import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText );
        props.showAlert("Converted to Uppercase!","success")
        
    }

    const handleLoClick = ()=>{
      // console.log("uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText );
      props.showAlert("Converted to Lowercase!","success")

  }

  const handleClearClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = '';
    setText(newText );
    props.showAlert("Text has been Cleared!","success")

}

const handleCopy = ()=>{
var text = document.getElementById('myBox');
text.select();
navigator.clipboard.writeText(text.value)
props.showAlert("Copied to Clipboard","success")



}

const handleExtraSpace = ()=>{

let newText = text.split(/[ ]+/);

 setText (newText.join(" "));
 props.showAlert("Removed Spaces!","success")


}

    const handleOnChange = (event)=>{
        // console.log("on changed")
        setText(event.target.value)
    }
    const [text, setText] = useState("");

  return (

    <>
    <div className='container' style={{color: props.mode=== 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div class="mb-3">
  <label for="myBox" className="form-label"></label>
  <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white', color: props.mode=== 'dark'?'white':'black'}} rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to UpperCase</button>
<button className='btn btn-primary mx-2 my-1' onClick={handleLoClick}>Convert to LowerCase</button>
<button className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Clear Text </button>
<button className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy Text </button>
<button className='btn btn-primary mx-2 my-1' onClick={handleExtraSpace}>Remove Extra Space </button>





    </div>
    <div className='container my-4' style={{color: props.mode=== 'dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
      <p>{0.08 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text: "Enter Your Words to Preview!"}</p>
    </div>
    </>
  )
}
