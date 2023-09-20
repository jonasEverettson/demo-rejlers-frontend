import "../../styles/search.css"

const Search = () => {
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Sök anställd</span>
        </label>

        <input 
        type="text"
        id="header-search"
        placeholder="Sök anställd"
        name="s"
        />
        <button type="submit">Sök</button>

    </form>
}

export default Search;


