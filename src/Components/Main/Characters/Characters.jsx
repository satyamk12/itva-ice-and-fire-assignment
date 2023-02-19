import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(null);


  // API call

  useEffect(() => {
    axios.get('https://www.anapioficeandfire.com/api/characters')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  // Show and Hide 

  const handleClick = (character) => {
    if (currentCharacter === character) {
      setCurrentCharacter(null);
    } else {
      setCurrentCharacter(character);
    }
  };

  return (
    <div className="container mt-5">
      <h1>All Characters</h1>
      <div className="row">

        {/* Map Method */}

        {characters.map((character, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{character.aliases.join(', ')}</p>
                {currentCharacter === character && (
                  <div>
                    <p className="card-text">Gender: {character.gender}</p>
                    <p className="card-text">Born: {character.born}</p>
                    <p className="card-text">Died: {character.died}</p>
                  </div>
                )}
                <button className="btn btn-primary" onClick={() => handleClick(character)}>
                  {currentCharacter === character ? 'Hide Details' : 'Show Details'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
