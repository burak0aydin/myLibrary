import React from 'react';
import './KategoriFiltre.css';

function KategoriFiltre({ value, onChange }) {
  return (
    <select 
      className="kategori-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="Tümü">Tümü</option>
      <option value="Web">Web</option>
      <option value="CS">CS</option>
      <option value="Tasarım">Tasarım</option>
    </select>
  );
}

export default KategoriFiltre;
