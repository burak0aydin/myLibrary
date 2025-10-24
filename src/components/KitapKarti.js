import React from 'react';
import './KitapKarti.css';

function KitapKarti({ id, baslik, yazar, kategori, favorideMi, onToggleFavori }) {
  return (
    <div className="kitap-kart">
      <div className="kitap-bilgi">
        <h3 className="kitap-baslik">{baslik}</h3>
        <p className="kitap-detay">{yazar} · {kategori}</p>
      </div>
      <button
        className={`favori-btn ${favorideMi ? 'aktif' : ''}`}
        onClick={() => onToggleFavori(id)}
      >
        <span className="yildiz">★</span> {favorideMi ? 'Favoride' : 'Favori Ekle'}
      </button>
    </div>
  );
}

export default KitapKarti;
