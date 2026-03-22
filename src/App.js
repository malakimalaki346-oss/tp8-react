import React from 'react';
import FetchData from './FetchData';
import AxiosData from './AxiosData';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{ textAlign: 'center', margin: '20px 0', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h1>📱 Application de démonstration API</h1>
        <p style={{ fontSize: '18px', color: '#555' }}>
          <strong>Malak Nait Haddou</strong> - Comparaison entre fetch() et Axios
        </p>
        <p style={{ fontSize: '14px', color: '#777', marginTop: '10px' }}>
          Contenu personnalisé avec des données marocaines 🇲🇦
        </p>
        <hr style={{ margin: '15px auto', width: '80%', border: '1px solid #ddd' }} />
      </header>
      <main style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <FetchData />
        <AxiosData />
      </main>
    </div>
  );
}

export default App;