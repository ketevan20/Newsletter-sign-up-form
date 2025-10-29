import React, { useState } from 'react'

const SuccessMessage = (props) => {
  function HandleOnClick() {
    props.handleFunction();
  }

  return (
    <div className='success-container'>
      <img src='./images/icon-success.svg' />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <span style={{fontWeight: 'bold'}}>{props.email}. </span> 
        Please open it and click the button inside to confirm your subscription.
      </p>
      <button onClick={HandleOnClick}>Dismiss message</button>
    </div>
  )
}

export default SuccessMessage