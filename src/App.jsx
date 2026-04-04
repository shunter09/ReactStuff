import './App.css'
import MovieCard from "./MovieCard.jsx";

function App() {


  return (
      <>
        <MovieCard movie={{title: "I am Sam", release_date: "2001", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5AuCs3cudjvGPTC9Tfcb-Rksq-q1mxWXvU-pgOG4fgLfBlLA1gPkZPIBJyO75otzs6j6WHQ&s=10"}}/>
      </>
  );
}


export default App
