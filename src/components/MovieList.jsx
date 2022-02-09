import React from 'react'

const MovieList = ({ movie }) => {
  return (
    <div className="group relative rounded-md bg-white p-3 shadow-lg">
      <div className="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80">
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + ' poster'}
          className="h-full w-full object-contain object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-700">{movie.title}</h3>
          <p className="text-sm font-medium text-gray-900">
            {movie.release_date}
          </p>
        </div>
        <p className="text-md mt-1 text-gray-500">{movie.overview}</p>
      </div>
    </div>
  )
}

export default MovieList
