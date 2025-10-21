export default function FilterBar({ search, onSearch, category, onCategory }) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search dishes..."
        value={search}
        onChange={e => onSearch(e.target.value)}
      />
      <select value={category} onChange={e => onCategory(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="chappati">chappati</option>
        <option value="Pizza">Pizza</option>
        <option value="Salads">Salads</option>
      </select>
    </div>
  );
}
