import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {

  return (
    <div className='d-flex flex-column container'>
      <Header>
        <Nav />
      </Header>
      <Footer></Footer>
    </div>
  );
}

export default App;