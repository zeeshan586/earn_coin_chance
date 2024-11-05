import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CombinedComponents from './components/Combine';
import myImage from './components/assest/Banner.png'; // Adjust the path as necessary
import { Team } from './components/Team';

import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <CombinedComponents/>
      <img 
        src={myImage} 
        alt="Description of the image" // Provide a meaningful alt text for accessibility
        style={{ width: '100%', height: 'auto', marginTop: '20px' }} // Adjust styles as needed
      />
      <Team/>
      {/* <br/> */}
      <Footer/>
    </div>
  );
}

export default App;
