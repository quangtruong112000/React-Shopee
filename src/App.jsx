import './App.scss';
import React from 'react';
import Header from './components/Header/Header'
import Routes from './config/Routes'
import Footer from './components/Footer/Footer'


function App() {
  const location = window.location.pathname;
  return (
      <div className="wrapper">
          {
            location === '/register' || location === '/login' || location === '/download' ? null : <Header/>
          }
          <Routes/>
          {
            location === '/download' ? null :   <Footer/>
          }
      </div>
  );
}

export default App;
