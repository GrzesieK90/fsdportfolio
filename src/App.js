import React from 'react';
import Welcome from './Components/Welcome/Welcome';
import AboutMe from './Components/AboutMe/AboutMe';
import Technology from './Components/Technology/Technology';
import MyProjects from './Components/MyProjects/MyProjects';
import ContactForm from './Components/ContactForm/ContactForm';
import Bg from './Components/Bg/Bg';
import './App.css';

function App() {
  return (
    <div className='sp'>
    <div className="App">
      <Bg />
      <Welcome />
      <AboutMe />
      <MyProjects />
      <Technology />
      <ContactForm />
    </div>
    </div>
  );
}

export default App;