import SearchMovies from './components/SearchMovies'

function App() {
  return (
    <>
      <div className="mx-auto max-w-7xl bg-gray-200 sm:px-6 lg:px-8">
        <h1 className=" my-4 text-center text-3xl font-bold">
          React Movie Search
        </h1>
        <SearchMovies />
      </div>
    </>
  )
}

export default App
