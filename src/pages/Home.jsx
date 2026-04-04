import MovieCard from "../components/MovieCard.jsx";

function Home() {
    const movies = [
        {id: 1, title: "I Am Sam", release_date: "2001"},
        {id: 2, title: "Goodfellas", release_date: "1990"},
        {id: 3, title: "ATL", release_date: "2006"},
        {id: 4, title: "Grown Ups", release_date: "2010"},
        {id: 5, title: "Superbad", release_date: "2007"},
        {id: 6, title: "You Don't Mess with the Zohan", release_date: "2008"},
        {id: 7, title: "White Chicks", release_date: "2004"},
    ]

    const handleSearch = () => {};
    return (
        <div  className="Home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search..." className="search-input" />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies.grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default Home