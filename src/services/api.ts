const baseURL = 'https://api.themoviedb.org/3';

// In a production scenario we never expose the apiKey
const APIKey = '9a239c8d628bedb86bb1a34d8a6c8703';

// https://api.themoviedb.org/3/movie/550?api_key=9a239c8d628bedb86bb1a34d8a6c8703
export const getMovies = () => {
  return fetch(`https://api.themoviedb.org/3/movie/550?api_key=${APIKey}`)
    .then(response => response.json())
    .then(json => {
      console.log('+++ json', json);

      return json.movies;
    })
    .catch(error => {
      console.error(error);
    });
};
