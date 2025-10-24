import React from 'react';
import './AramaCubugu.css';

function AramaCubugu({ value, onChange }) {
  return (
    <input
      type="text"
      className="arama-input"
      placeholder="Başlık veya yazar ara..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default AramaCubugu;
