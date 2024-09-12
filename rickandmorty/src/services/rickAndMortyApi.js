export const rickAndMortyApi = () => {
    return fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => data.results);
}