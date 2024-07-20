export function SearchQuery({ query, handleQueryChange }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search for a movie..."
      value={query}
      onChange={handleQueryChange}
    />
  );
}
