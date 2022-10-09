const { createContext, useReducer, useContext } = require('react');

export const MoviesContext = createContext(null);
export const useMoviesContext = () => {
  return useContext(MoviesContext);
};

function moviesReducer(state, action) {
  switch (action.type) {
    case 'setMovies': {
      return { ...state, movies: action.movies };
    }
    case 'clear': {
      return { ...state, movies: [] };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function MoviesContextProvider({ children }) {
  const [auth, dispatch] = useReducer(moviesReducer, { movies: [], list: [] });
  return (
    <MoviesContext.Provider
      value={{ movies: auth.movies, dispatch, list: auth.list }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
