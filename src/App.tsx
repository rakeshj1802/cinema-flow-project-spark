
import React from 'react'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-movie-dark text-movie-text p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-movie-accent mb-4">MovieHub</h1>
      <p className="text-xl text-center mb-8">Download High Quality Movies</p>
      <div className="max-w-md w-full bg-movie-gray p-6 rounded-lg shadow-lg">
        <p className="text-center mb-4">Welcome to MovieHub! Your source for high-quality movie downloads.</p>
        <div className="flex justify-center">
          <button className="bg-movie-accent hover:bg-movie-accent-light text-white py-2 px-4 rounded transition-colors">
            Browse Movies
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
