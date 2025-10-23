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
        <option value="paani poori">paani poori</option>
        <option value="idly">idly</option>
        <option value="meals">meals</option>
        <option value="parotta">parotta</option>
      </select>
    </div>
  );
}
