import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './pages/Main';
import Colors from './pages/Colors';
import Accordion from './pages/Accordion';
import './App.css';

function App() {
  const [colorIndex, setColorIndex] = useState(2);
  const [sightings, setSightings] = useState(0)

  const rainbow = [
    "#8C00FC",
    "#3500FF",
    "#01FE01",
    "#FFFE37",
    "#FF8600",
    "#ED0003",
  ];
  
  return (
    <div className="App">
      <Router>
      <Nav color={rainbow[colorIndex]}/>
      <div className='content'>

        <Routes>
          <Route path="colors" element={<Colors rainbow={rainbow} colorIndex={colorIndex} setColorIndex={setColorIndex} />} />
          <Route path="cool-page" element={<Accordion rainbow={rainbow} sightings={sightings} setSightings={setSightings} />} />
          <Route exact path="/" element={<Main color={rainbow[colorIndex]} sightings={sightings} />} />
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
