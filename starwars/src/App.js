import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Bios from './components/bios.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const [charList, setCharList] = useState(' ');


  useEffect(() =>{
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {

        let list = Object.keys(response.data.results);
        setCharacters(response.data.results);
        setCharList(list.length.toString());

        // console.log(charList);
        // console.log(characters);


      })
      .catch(err =>{
        console.log(err);
      })
    }, []);

    // console.log(characters);

  return (


    <div className="App">
      <h1 className="Header">React Wars</h1>

      <Bios
        characters = {characters}

      />

    </div>
  );
}

export default App;
