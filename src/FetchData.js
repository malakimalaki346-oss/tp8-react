import React, { useState, useEffect } from 'react';

function FetchData() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();
        
        const articlesFrancais = data.slice(0, 5).map((article, index) => {
          const titresFrancais = [
            "Les secrets de la cuisine marocaine révélés par Fatima Zahra",
            "Casablanca : La ville qui ne dort jamais - Reportage de Yassine Benjelloun",
            "Comment réussir son tajine comme une véritable marocaine",
            "L'avenir du tourisme au Maroc selon Karim Tazi",
            "Les traditions ancestrales marocaines préservées par Aïcha El Mansouri"
          ];
          
          const contenusFrancais = [
            "Découvrez les épices et techniques qui font la renommée de la cuisine marocaine à travers le monde. Des recettes transmises de génération en génération...",
            "Un reportage exclusif sur la métropole casablancaise, son dynamisme économique et sa culture bouillonnante qui attirent chaque année des milliers de visiteurs...",
            "Apprenez les astuces pour préparer un tajine parfait : le choix des ingrédients, la cuisson lente et l'art de marier les saveurs comme le font les familles marocaines...",
            "Entretien avec l'expert du tourisme marocain qui nous dévoile les projets innovants pour valoriser le patrimoine culturel et naturel du royaume...",
            "Plongée au cœur des traditions marocaines : l'artisanat, la musique gnawa, les festivals et le savoir-faire unique qui font la fierté du pays..."
          ];
          
          return {
            ...article,
            title: titresFrancais[index],
            body: contenusFrancais[index]
          };
        });
        
        setArticles(articlesFrancais);
      } catch (err) {
        setHasError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (isLoading) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px', borderRadius: '8px' }}>
        <h2>📡 Malak Nait Haddou - Section Fetch</h2>
        <p>Chargement des articles en cours...</p>
      </div>
    );
  }

  if (hasError) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px', borderRadius: '8px' }}>
        <h2>📡 Malak Nait Haddou - Section Fetch</h2>
        <p style={{ color: 'red' }}>Erreur : {hasError}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px', borderRadius: '8px' }}>
      <h2>📡 Malak Nait Haddou - Section Fetch</h2>
      <h3>Articles du jour :</h3>
      <ul>
        {articles.map((article) => (
          <li key={article.id} style={{ marginBottom: '15px', listStyle: 'none', borderBottom: '1px solid #eee', padding: '10px 0' }}>
            <strong style={{ fontSize: '18px', color: '#2c3e50' }}>{article.title}</strong>
            <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#555', lineHeight: '1.5' }}>
              {article.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;