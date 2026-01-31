import '../css/Home.css';
import MoviesCard from "../components/MoviesCard.jsx"
import { useState } from "react";

function Home() {
    const movies = [
        { id: 1, title: "Venom", release_date: "2020" },
        { id: 2, title: "Spider-Man", release_date: "2021" },
        { id: 3, title: "Iron Man", release_date: "2019" }
    ];

    const [searchTerm, setSearchTerm] = useState("");

    function handlSearch(e) {
        e.preventDefault();
        alert(searchTerm);
        setSearchTerm("")
    }
    return (
        <div className="home">
            <div className="search_bar">
                <form onSubmit={handlSearch}>
                    <input type="text" placeholder="Search movies..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="movie_grid">
                {movies.map((movie) => <MoviesCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    );
}
export default Home