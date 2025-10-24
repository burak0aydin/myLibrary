import React from 'react';
import './FavoriPaneli.css';

function FavoriPaneli({ favoriKitaplar, onKaldir }) {
  return (
    <div className="favori-panel">
      <h2 className="favori-baslik">Favoriler ({favoriKitaplar.length})</h2>
      
      {favoriKitaplar.length === 0 ? (
        <p className="favori-bos">Henüz favori kitap yok.</p>
      ) : (
        <ul className="favori-liste">
          {favoriKitaplar.map(kitap => (
            <li key={kitap.id} className="favori-item">
              <div className="favori-bilgi">
                <span className="favori-baslik-text">{kitap.baslik}</span>
              </div>
              <button 
                className="kaldir-btn"
                onClick={() => onKaldir(kitap.id)}
              >
                Kaldır
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoriPaneli;
