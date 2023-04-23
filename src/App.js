import React from 'react';
import LoginSSO from './LoginSSO';

function App() {
  const isLogin = localStorage.getItem('isLogin')
  if(isLogin === "true") {
    window.location.replace('http://localhost/')
  }
  return <LoginSSO />;
}

export default App;