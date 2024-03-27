import React, { useEffect, useState } from 'react';
import './App.css';
import HelloWorldFunction from './components/function/HelloWordFunction';
import HelloWorldClass from './components/class/HelloWorldClass';
import { getExternalMessage } from './requests/message';
// Creating init-impl branch
function App() {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    // fetch('http://localhost:8080/message')
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.text();
    //   })
    getExternalMessage()
    .then(message => setMessage(message))
    .catch(error => console.error('There was a problem with your fetch operation:', error))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {message}
        <HelloWorldFunction /> {/* Use the function component */}
        <HelloWorldClass /> {/* Use the class component */}
      </header>
    </div>
  );
}

export default App;
