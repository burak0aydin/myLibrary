import React from 'react';
import KitapKarti from './KitapKarti';
import './KitapListe.css';

function KitapListe({ kitaplar, onToggleFavori }) {
  return (
    <div className="kitap-liste">
      {kitaplar.map(kitap => (
        <KitapKarti
          key={kitap.id}
          {...kitap}
          onToggleFavori={onToggleFavori}
        />
      ))}
      {kitaplar.length === 0 && (
        <p className="bos-mesaj">Kitap bulunamadı.</p>
      )}
    </div>
  );
}

export default KitapListe;
