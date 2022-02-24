import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


function Header() {
  const [currentPage, setCurrentPage] = useState('About');
  //render the correct page based on currentPage state
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };
  //set up function to adjust the currentPage state to be the page that was clicked on
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <h1>Caitlin Wall</h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default Header;