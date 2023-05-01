import React from "react";
import MovieCard from "./MovieCard";

// parent component w poster omitted uses default value from the moviecard prop key
function App() {
  const title = "Mad Max";
  const posterURL  =

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];
  return (
    <div className="App">
      {/* posterSrc is omitted, so the default value will be used instead */}
      <MovieCard title={title} genres={genresArr} />
    </div>
  );
}
/* child component
function MovieCard(props) {
  return (
    <div className="movie-card">
      <img src={props.posterSrc} alt={props.title} />
      <h2>{props.title}</h2>
      <small>{props.genres.join(", ")}</small>
    </div>
  );
} */

export default App;
