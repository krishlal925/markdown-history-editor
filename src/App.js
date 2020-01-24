import React, {useState} from 'react';
import Marked from 'marked';
import './App.css';

function App() {
  const [text, setText]= useState('')
  let test = Marked(text);
  console.log(test)
  function updateText(ev){
    console.log(ev.target)
    setText(ev.target.value);
  }
  function createMarkup(){
    return {__html: Marked(text)};
  }

  return (
    <div className="container">
      <div className= "box">
        <textarea rows="10" value = {text} onChange= {updateText}/>
      </div >
      <div className= "box" dangerouslySetInnerHTML = {createMarkup()}>

      </div>
      <div>
        <button>Save</button>
      </div>
    </div>
  );
}

export default App;
