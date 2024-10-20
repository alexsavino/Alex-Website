import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DottedBackground from './generals/DottedGraph'; 
// import NavBar from './generals/NavBar';
import NavBarLayout from './generals/NavBarLayout';
// jhbjhhjgjh
import TitlePage from './pages/TitlePage';
import ContactMe from './pages/ContactMe';
import AboutMe from './pages/AboutMe';
import WorkProjects from './pages/WorkProjects';
import CreativeProjects from './pages/CreativeProjects';
import TechnicalSkills from './pages/TechnicalSkills'
import NotFound from './pages/NotFound';

const App = () => {

  return (
    <div className="app-container">
      <DottedBackground />
      <Router>
        <Routes>
          <Route path="/" element={<TitlePage />} />
          <Route path="/contact-me" element={<ContactMe />} />
          {/* <Route path="/contact-me" element={<NavBarLayout><ContactMe /></NavBarLayout>} /> */}
          <Route path="/about-me" element={<AboutMe />} />
          {/* <Route path="/about-me" element={<NavBarLayout><AboutMe /></NavBarLayout>} /> */}
          <Route path="/recent-projects" element={<WorkProjects />}/>
          <Route path="/creative-projects" element={<CreativeProjects />} />
          <Route path="/technical-skills" element={<TechnicalSkills />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
    
  );

};

export default App;












/*
const App = () => {

  const [items, setItems] = useState([4, 6, 3])

  const title = "YMCA thats what im taukin bouttttt"
  const subtitle = 'SuBtItLe'

  return (
    <div>
      <h1>{title}</h1>
      <Pee items={items} subtitle={subtitle} setItems={setItems}/>
    </div>
  )
}

const Pee = (props) => {
  return (
    <div>
      {props.subtitle}
      {props.items.map((item) => <div>Item: {item}</div>)}
      <button onClick={() => props.setItems([1,2,3,4,5])}>Change Items</button>
    </div>
  )
}
*/