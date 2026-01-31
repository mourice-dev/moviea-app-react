import '../css/MoviesCard.css';
function MoviesCard({ movie }) {

    return (
        <>
            <div>
                <img src={movie.url} alt={movie.title} />
            </div>
        </>
    )
}

export default MoviesCard