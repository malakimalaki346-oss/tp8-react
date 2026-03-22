import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosData() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        
        const utilisateursMarocains = response.data.slice(0, 5).map((user, index) => {
          const nomsMarocains = [
            { nom: "Fatima Zahra Benjelloun", email: "fz.benjelloun@example.ma", entreprise: "Groupe Benjelloun & Fils" },
            { nom: "Yassine El Fassi", email: "y.el fassi@example.ma", entreprise: "Holding El Fassi" },
            { nom: "Khadija Amrani", email: "k.amrani@example.ma", entreprise: "Amrani Industries" },
            { nom: "Mohammed Tazi", email: "m.tazi@example.ma", entreprise: "Tazi Corporation" },
            { nom: "Nadia El Mansouri", email: "n.elm ansouri@example.ma", entreprise: "Mansouri Consulting" }
          ];
          
          return {
            ...user,
            name: nomsMarocains[index].nom,
            email: nomsMarocains[index].email,
            company: { name: nomsMarocains[index].entreprise }
          };
        });
        
        setUsers(utilisateursMarocains);
      } catch (err) {
        setHasError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px', borderRadius: '8px' }}>
        <h2>🔌 Malak Nait Haddou - Section Axios</h2>
        <p>Téléchargement des profils utilisateurs...</p>
      </div>
    );
  }

  if (hasError) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px', borderRadius: '8px' }}>
        <h2>🔌 Malak Nait Haddou - Section Axios</h2>
        <p style={{ color: 'red' }}>Problème technique : {hasError}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px', borderRadius: '8px' }}>
      <h2>🔌 Malak Nait Haddou - Section Axios</h2>
      <h3>Carnet des utilisateurs marocains :</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: '20px', listStyle: 'none', borderBottom: '1px solid #eee', padding: '12px 0' }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#2c3e50' }}>
              👤 {user.name}
            </div>
            <div style={{ marginTop: '5px', color: '#555' }}>
              📧 {user.email}
            </div>
            <div style={{ marginTop: '5px', color: '#555' }}>
              🏢 {user.company.name}
            </div>
            <div style={{ marginTop: '5px', fontSize: '12px', color: '#888' }}>
              📍 Maroc
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosData;