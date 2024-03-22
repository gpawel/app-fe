import React, { useEffect, useState } from 'react';
import './App.css';
// Creating init-impl branch
function App() {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    fetch('http://localhost:8080/message')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(message => setMessage(message))
      .catch(error => console.error('There was a problem with your fetch operation:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {message}
      </header>
    </div>
  );
}

export default App;
