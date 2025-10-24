import React, { useState, useEffect } from 'react';
import './App.css';
import AramaCubugu from './components/AramaCubugu';
import KategoriFiltre from './components/KategoriFiltre';
import KitapListe from './components/KitapListe';
import FavoriPaneli from './components/FavoriPaneli';

const KITAPLAR = [
  { id: 1, baslik: "React'e Giriş", yazar: "D. Usta", kategori: "Web" },
  { id: 2, baslik: "İleri JavaScript", yazar: "S. Kılıç", kategori: "Web" },
  { id: 3, baslik: "Veri Yapıları", yazar: "A. Demir", kategori: "CS" },
  { id: 4, baslik: "Algoritmalar", yazar: "E. Kaya", kategori: "CS" },
  { id: 5, baslik: "UI/UX Temelleri", yazar: "N. Akın", kategori: "Tasarım" }
];

function App() {
  const [aramaMetni, setAramaMetni] = useState('');
  const [kategori, setKategori] = useState('Tümü');
  const [favoriler, setFavoriler] = useState([]);

  // LocalStorage'dan veri yükle
  useEffect(() => {
    const kaydedilenArama = localStorage.getItem('aramaMetni');
    const kaydedilenFavoriler = localStorage.getItem('favoriler');
    
    if (kaydedilenArama) {
      setAramaMetni(kaydedilenArama);
    }
    
    if (kaydedilenFavoriler) {
      setFavoriler(JSON.parse(kaydedilenFavoriler));
    }
  }, []);

  // LocalStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('aramaMetni', aramaMetni);
  }, [aramaMetni]);

  useEffect(() => {
    localStorage.setItem('favoriler', JSON.stringify(favoriler));
  }, [favoriler]);

  // Favori toggle
  const toggleFavori = (kitapId) => {
    setFavoriler(prev => {
      if (prev.includes(kitapId)) {
        return prev.filter(id => id !== kitapId);
      } else {
        return [...prev, kitapId];
      }
    });
  };

  // Favoriyi kaldır (FavoriPaneli'nden)
  const favoriKaldir = (kitapId) => {
    setFavoriler(prev => prev.filter(id => id !== kitapId));
  };

  // Filtreleme
  const filtrelenmisKitaplar = KITAPLAR.filter(kitap => {
    const aramaUygun = kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
                       kitap.yazar.toLowerCase().includes(aramaMetni.toLowerCase());
    const kategoriUygun = kategori === 'Tümü' || kitap.kategori === kategori;
    
    return aramaUygun && kategoriUygun;
  }).map(kitap => ({
    ...kitap,
    favorideMi: favoriler.includes(kitap.id)
  }));

  const favoriKitaplar = KITAPLAR.filter(kitap => favoriler.includes(kitap.id));

  return (
    <div className="app">
      <div className="container">
        <h1 className="baslik">Mini Kitaplık</h1>
        
        <div className="kontroller">
          <AramaCubugu 
            value={aramaMetni} 
            onChange={setAramaMetni} 
          />
          <KategoriFiltre 
            value={kategori} 
            onChange={setKategori} 
          />
        </div>

        <div className="icerik">
          <div className="sol-panel">
            <KitapListe 
              kitaplar={filtrelenmisKitaplar}
              onToggleFavori={toggleFavori}
            />
          </div>
          
          <div className="sag-panel">
            <FavoriPaneli 
              favoriKitaplar={favoriKitaplar}
              onKaldir={favoriKaldir}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
