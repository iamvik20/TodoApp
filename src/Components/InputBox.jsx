import React,{useState} from 'react'

function InputBox(props) {
    const [inputText, setInputText] = useState("");
    const handleKeyPress = (e) => {
        if(e.keyCode === 13) {
            props.addList(inputText);
                setInputText("");
        }
    }
  return (
    <div className='input-container'>
        <input 
            type='text'
            className='input-todo-box'
            placeholder='Enter your task'
            value={inputText}
            onChange={(e) => {
                setInputText(e.target.value)
            }}
            onKeyDown={handleKeyPress}
        />
        <button className='add-todo' 
            onClick={() => {
                props.addList(inputText);
                setInputText("");
            }}
        >
            +
        </button>
    </div>
  )
}

export default InputBox