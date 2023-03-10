import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav.jsx";
import Form from './components/Form/Form'
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail'
import Favorites from './components/Favorites/Favorites'

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const username = 'ejemplo@gmail.com';
  const password = '1password';

  const login = (userData) => {
    if (userData.username === username) {
      setAccess(true)
      navigate('/home')
    }
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access]);



  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname === '/' ? <Form login={ login } /> : <Nav onSearch={onSearch}/>}
      
      
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} /> } />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
     
      
    </div>
  );
}

export default App;
