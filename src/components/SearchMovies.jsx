import React, { useState } from 'react'
import MovieList from './MovieList'
const SearchMovies = () => {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  const searchMovies = async (event) => {
    event.preventDefault()
    console.log('submitting')
    const url = `https://api.themoviedb.org/3/search/movie?api_key=9b3497e64b116ccad1e4da0ff3251bf0&language=en-US&query=${query}&page=1&include_adult=false`

    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      setMovies(data.results)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <form onSubmit={searchMovies} className="px-8">
        <div className="relative mx-8 rounded-full border border-gray-500 bg-white px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <label
            htmlFor="query"
            className="absolute -top-4 left-4 -mt-px inline-block  px-1 text-xs font-medium text-gray-900"
          >
            Movie Name
          </label>
          <input
            type="text"
            name="query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="block w-full border-0 bg-white p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="i.e. Jurassic Park"
          />
        </div>

        <div className="mx-8 py-3">
          <button
            type="submit"
            className="w-full items-center rounded-full border border-transparent bg-blue-600  py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Search
          </button>
        </div>
      </form>
      <div>
        <div className="mx-auto max-w-2xl px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 px-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {movies
              .filter((movie) => movie.poster_path && movie.overview)
              .map((movie) => (
                <MovieList movie={movie} key={movie.id} />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchMovies
