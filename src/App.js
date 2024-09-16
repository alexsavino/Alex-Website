import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DottedBackground from './DottedGraph'; 
// import TitlePage from './pages/TitlePage';
// import ContactUs from './pages/ContactUs';
import NavBar from './NavBar';

const App = () => {

  return (
    <div className="app-container">
      <DottedBackground />
      <Router>
        <Routes>
          {/* <Route path="/" element={<TitlePage />} /> */}
          {/* <Route path="/" element={<ContactUs />} /> */}
          <Route path="/" element={<NavBar />} />
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