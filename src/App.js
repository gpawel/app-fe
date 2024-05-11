import React, { useEffect, useState } from 'react';
import './App.css';
import HelloWorldFunction from './components/function/HelloWordFunction';
import HelloWorldClass from './components/class/HelloWorldClass';
import { getExternalMessage } from './requests/message';
// Creating init-impl branch
function App() {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    getExternalMessage()
    .then(message => setMessage(message))
    .catch(error => console.error('There was a problem with your fetch operation:', error))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2 id="backend">{message}</h2>
        <HelloWorldFunction /> {/* Use the function component */}
        <HelloWorldClass /> {/* Use the class component */}
      </header>
    </div>
  );
}

export default App;
