import React from 'react';
// import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TitlePage from './pages/titlePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TitlePage />} />
      </Routes>
    </Router>
  );
}


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