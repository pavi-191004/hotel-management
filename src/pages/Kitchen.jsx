import { useState } from 'react';
import Header from '../components/Header';

import FilterBar from '../components/FilterBar';
import MenuCard from '../components/MenuCard';

import dishes from '../components/Dishes';   

export default function Kitchen() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = dishes.filter(d => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'All' || d.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="kitchen-page">
      <Header title="Kitchen Menu" />
    
      <FilterBar
        search={search}
        onSearch={setSearch}
        category={category}
        onCategory={setCategory}
      />

      <div className="menu-grid">
        {filtered.map(item => (
          <MenuCard key={item.name} {...item} />
        ))}
      </div>

      
    </div>
  );
}
