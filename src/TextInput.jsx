import { useState } from 'react';
import TextArea from './TextArea';
import Alert from './Alert';
import './TextInput.css';
export default function TextInput({ dark }) {
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleUpperConvert = () => {
    if (text) setText(text.toUpperCase());
  }
  const handleLowerConvert = () => {
    if (text) setText(text.toLowerCase());
  }
  const handleSpaces = () => {
    let newText = text;
    while (newText.indexOf("\n\n") !== -1) {
      newText = newText.replace("\n\n", "\n");
    }
    newText = newText.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleEmails = () => {
    let newText = text;
    let emails = "";
    while (newText.indexOf("\n") !== -1) {
      newText = newText.replace("\n", " ");
    }
    newText = newText.split(/[ ]+/);
    for (let i = 0; i < newText.length; i++) {
      if (newText[i].indexOf("@") !== -1) {
        emails += newText[i] + "\n";
      }
    }
    if (emails) {
      setText(emails);
    } else {
      showAlert("No email IDs found", "warning");
    }
  }
  const handleClear = () => {
    setText("");
  }
  const handleCopy = () => {
    showAlert("Text copied to clipboard", "success");
    navigator.clipboard.writeText(text);
  }
  const countChars = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " " && str[i] !== "\n" && str[i] !== "\t") {
        count++;
      }
    }
    return count;
  }
  const textStyle = {
    display: 'inline-block',
    width: 'fit-content'
  }
  const handleCommaSeparate = () => {
    let newText = text;
    while (newText.indexOf("\n") !== -1) {
      newText = newText.replace("\n", " ");
    }
    newText = newText.split(/[ ]+/);
    setText(newText.join(", "));
  }
  const handleSemicolonSeparate = () => {
    let newText = text;
    while (newText.indexOf("\n") !== -1) {
      newText = newText.replace("\n", " ");
    }
    newText = newText.split(/[ ]+/);
    setText(newText.join("; "));
  }
  const countWords = (str) => {
    let count = 0;
    str = str.trim();
    while (str.indexOf("\n") !== -1) {
      str = str.replace("\n", " ");
    }
    while (str.indexOf("\t") !== -1) {
      str = str.replace("\t", " ");
    }
    while (str.indexOf("  ") !== -1) {
      str = str.replace("  ", " ");
    }
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        count++;
      }
    }
    return count === 0 && !(str) ? 0 : (count + 1);
  }
  return (
    <>
      <div className={`my-3 container`}>
        <Alert alert={alert} />
        <label htmlFor="inputText" className={`form-label text-${!dark ? 'dark' : 'light'}`}><h3>Enter your text below</h3></label>
        <textarea style={{backgroundColor: `${dark ? 'cornsilk' : 'white'}`}} onChange={(e) => handleOnChange(e)} className="form-control" id="inputText" rows="8" value={text}></textarea>
        <button className={`btn ${text ? '' : 'disabled'} ${dark ? 'dark' : 'light'} success btn-outline-success mt-2 me-3`} onClick={handleUpperConvert}>UpperCase</button>
        <button className={`btn ${text ? '' : 'disabled'} ${dark ? 'dark' : 'light'} success btn-outline-success mt-2 me-3`} onClick={handleLowerConvert}>LowerCase</button>
        <button className={`btn ${text ? '' : 'disabled'} ${dark ? 'dark' : 'light'} success btn-outline-success mt-2 me-3`} onClick={handleEmails}>Fetch Email IDs</button>
        <button className={`btn ${text ? '' : 'disabled'} ${dark ? 'dark' : 'light'} success btn-outline-success mt-2 me-3`} onClick={handleCommaSeparate}>Comma Separate words</button>
        <button className={`btn ${text ? '' : 'disabled'} ${dark ? 'dark' : 'light'} success btn-outline-success mt-2 me-3`} onClick={handleSemicolonSeparate}>SemiColon Separate words</button>
        <button className={`btn ${text ? '' : 'disabled'} ${dark ? 'dark' : 'light'} info btn-outline-info mt-2 me-3`} onClick={handleSpaces}>Remove extra spaces</button>
        <button className={`btn ${text ? '' : 'disabled'} ${dark ? 'dark' : 'light'} danger btn-outline-danger mt-2 me-3`} onClick={handleClear}>Clear Text</button>
        <button className={`btn ${text ? '' : 'disabled'} ${dark ? 'dark' : 'light'} primary btn-outline-primary mt-2 me-3`} onClick={handleCopy}>Copy Text</button>
        <TextArea value={'Words:  ' + countWords(text) + '\nCharacters:  ' + countChars(text)} color={`${dark ? 'cornsilk' : 'white'}`}/>
      </div>
    </>
  )
}