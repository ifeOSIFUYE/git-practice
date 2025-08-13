import './SearchBar.css';

export const SearchBar = ({ query, setQuery }) => {

    return (
        <>
            <input className="search-bar" type="text" placeholder="Enter search params..." value={query} onChange={e => setQuery(e.target.value)} />
        </>
    )
}