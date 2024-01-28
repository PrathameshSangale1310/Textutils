import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  // const switchGmode=()={
  //   if(mode==='light'){
  //     setMode('green')
  //     document.body.style.backgroundColor='green';
  //     showAlert("Green Mode has been enabled","success");
  //   }
  // }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#07252b';
      showAlert("Dark Mode has been enabled", "success");
    }

    // else if (mode === 'red') {
    //   setMode('dark')
    //   document.body.style.backgroundColor = '#07252b';
    //   showAlert("Dark Mode has been enabled", "success");
    // }
    // else if (mode === 'green') {
    //   setMode('dark')
    //   document.body.style.backgroundColor = '#07252b';
    //   showAlert("Dark Mode has been enabled", "success");
    // }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");

    }
  }

  // const toggleModeGreen = () => {
  //   if (mode === 'light') {
  //     setMode('green')
  //     document.body.style.backgroundColor = 'green';
  //     showAlert("Green Mode has been enabled", "success");
  //   }
  //   // else if (mode === 'red') {
  //   //   setMode('green')
  //   //   document.body.style.backgroundColor = 'green';
  //   //   showAlert("Green Mode has been enabled", "success");
  //   // }
  //   // else if (mode === 'dark') {
  //   //   setMode('green')
  //   //   document.body.style.backgroundColor = 'green';
  //   //   showAlert("Green Mode has been enabled", "success");
  //   // }
  //   else {
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light Mode has been enabled", "success");

  //   }
  // }

  // const toggleModeRed = () => {
  //   if (mode === 'light') {
  //     setMode('red')
  //     document.body.style.backgroundColor = '#c72828';
  //     showAlert("Red Mode has been enabled", "success");
  //   }
  //   // else if (mode === 'dark') {
  //   //   setMode('red')
  //   //   document.body.style.backgroundColor = 'red';
  //   //   showAlert("Red Mode has been enabled", "success");
  //   // }
  //   // else if (mode === 'green') {
  //   //   setMode('red')
  //   //   document.body.style.backgroundColor = 'red';
  //   //   showAlert("Red Mode has been enabled", "success");
  //   // }
  //   else {
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light Mode has been enabled", "success");
  //   }
  // }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container" my-3="true">
          <Switch>
            <Route exact path="/about">
              <About  mode={mode}/>
            </Route> 
            <Route exact path="/">
              <TextForm heading="Textutils- Word counter, Character counter, Clear text" showAlert={showAlert} mode={mode} />
            </Route>
          </Switch>
        </div >
      </Router>
    </>
  );
}

export default App;

// switchGmode={switchGmode}3