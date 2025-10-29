import React, { useState } from 'react'

const Card = (props) => {
    const [input, setInput] = useState('');
    const errorMessage = "valid email required";

    function hanldleClick() {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!input.trim() || !emailRegex.test(input)) {
            document.getElementById('error-message').textContent = errorMessage;
            document.querySelector('.input').classList.add('error');
        } else {
            props.handleFucntion(input);
        }       
    }

  return (
    <div className='card-container'>

        <div className='card-content'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <div className='list-container'>
                <div className='list'>
                    <img src={props.listIcon} alt=""/>
                    <p>{props.listText1}</p>
                </div>
                <div className='list'>
                    <img src={props.listIcon} alt=""/>
                    <p>{props.listText2}</p>
                </div>
                <div className='list'>
                    <img src={props.listIcon} alt=""/>
                    <p>{props.listText3}</p>
                </div>
            </div>

            <div>
                <div className='space-between'>
                    <small>{props.inputText}</small>
                    <small id='error-message'></small>
                </div>
                <input 
                    className='input'
                    type='text' 
                    placeholder={props.placeholder}
                    onChange={(e) => {
                        setInput(e.target.value);
                        document.querySelector('.input').classList.remove('error');
                        document.getElementById('error-message').textContent = "";                    
                    }}
                />
            </div>
            <button onClick={hanldleClick}>{props.buttonText}</button>

        </div>

        <div className='image-container'>
            <img src={props.image}/>
        </div>

    </div>
  )
}

export default Card