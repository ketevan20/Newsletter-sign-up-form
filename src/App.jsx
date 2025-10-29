import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import './App.css'
import SuccessMessage from './components/SuccessMessage';

const App = () => {
  const [imageToRender, setImage] = useState('/images/illustration-sign-up-desktop.svg');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 700) {
        setImage('./images/illustration-sign-up-mobile.svg');
      } else {
        setImage('./images/illustration-sign-up-desktop.svg');
      }

    window.addEventListener('resize', () => {
      if (window.innerWidth < 700) {
        setImage('./images/illustration-sign-up-mobile.svg');
      } else {
        setImage('./images/illustration-sign-up-desktop.svg');
      }
    })
  }, [])

  function DisplayMessage(email) {
    setEmail(email);
    setSent(!sent);
  }

  function ReturnBack() {
    setSent(!sent);
    setEmail('');
  }


  return (
    <div>
      {email ? <SuccessMessage email={email} handleFunction={ReturnBack}/> : ''}
      {!sent ? <Card
        title="Stay updated!"
        text="Join 60,000+ product managers receiving monthly updates on:"
        listIcon="./images/icon-list.svg"
        listText1="Product discovery and building what matters"
        listText2="Measuring to ensure updates are a success"
        listText3="And much more!"
        inputText="Email address"
        placeholder="email@company.com"
        buttonText="Subscribe to monthly newsletter"
        image={imageToRender}
        handleFucntion={DisplayMessage}
      /> : ''}
    </div>
  )
}

export default App