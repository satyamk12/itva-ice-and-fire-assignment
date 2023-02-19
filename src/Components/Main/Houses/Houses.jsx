import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Houses = () => {
  const [houses, setHouses] = useState([]);
  const [currentHouse, setCurrentHouse] = useState(null);

  // API call

  useEffect(() => {
    axios.get('https://www.anapioficeandfire.com/api/houses')
      .then(response => {
        setHouses(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // Show and Hide 
  
  const handleClick = (house) => {
    if (currentHouse === house) {
      setCurrentHouse(null);
    } else {
      setCurrentHouse(house);
    }
  };

  return (
    <div className="container mt-5">
      <h1>All Houses</h1>
      <div className="row">

        {/* Map Method */}

        {houses.map((house, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{house.name}</h5>
                <p className="card-text">Region: {house.region}</p>
                {currentHouse === house && (
                  <div>
                    <p className="card-text">Coat of Arms: {house.coatOfArms}</p>
                    <p className="card-text">Words: {house.words}</p>
                    <p className="card-text">Founded: {house.founded}</p>
                  </div>
                )}
                <button className="btn btn-primary" onClick={() => handleClick(house)}>
                  {currentHouse === house ? 'Hide Details' : 'Show Details'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Houses;
