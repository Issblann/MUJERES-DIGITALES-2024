import React, { useState, useEffect } from 'react';
import './StarWarsCharacter.css';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader'; // Importamos el componente de Loader
import { Searcher } from '../Searcher/Searcher';

function StarWarsCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    'https://swapi.dev/api/people/'
  );
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const fetchCharacters = async (pageUrl) => {
    try {
      setLoading(true); // Activar el loader antes de hacer la solicitud
      const response = await fetch(pageUrl);
      const data = await response.json();
      console.log(data);
      setCharacters(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false); // Desactivar el loader cuando los datos se carguen
    }
  };

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  const handlePrevious = () => {
    if (prevPage) {
      setCurrentPage(prevPage);
    }
  };

  const handleNext = () => {
    if (nextPage) {
      setCurrentPage(nextPage);
    }
  };

  const handleSearch = async (term) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${term}`
      );
      const data = await response.json();
      setCharacters(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false); // Desactivar el loader cuando los datos se carguen
    }
  };

  if (loading) {
    return <Loader />; // Mostrar el loader mientras se cargan los datos
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const getCharacterImage = (url) => {
    const id = url.split('/').filter(Boolean).pop();
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  };

  return (
    <div className="characters-container">
      <h1 className="title">Star Wars Characters</h1>

      <Searcher onSearch={handleSearch} />

      <div className="character-list">
        {characters.map((character, index) => (
          <div key={index} className="character-card">
            <img
              src={getCharacterImage(character.url)}
              alt={character.name}
              className="character-image"
              onError={(e) =>
                (e.target.src =
                  'https://starwars-visualguide.com/assets/img/placeholder.jpg')
              }
            />
            <div className="character-info">
              <h2>{character.name}</h2>
              <p>
                <strong>Height:</strong> {character.height} cm
              </p>
              <p>
                <strong>Gender:</strong> {character.gender}
              </p>
              <p>
                <strong>Birth Year:</strong> {character.birth_year}
              </p>
              <p>
                <strong>Eye Color:</strong> {character.eye_color}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
  );
}

export default StarWarsCharacters;
