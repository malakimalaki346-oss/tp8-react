# TP API React - Comparaison fetch() vs Axios

## 📋 Description du projet

Ce projet a été réalisé dans le cadre d'un Travail Pratique visant à comprendre et implémenter les requêtes HTTP dans une application React. L'objectif est de comparer deux méthodes de récupération de données :

- **fetch()** : méthode native du navigateur
- **Axios** : bibliothèque externe simplifiant les requêtes HTTP

L'application affiche des données personnalisées avec des contenus en français et des noms marocains.

## 👩‍💻 Auteur

**Malak Nait Haddou**

## 📸 Captures d'écran

### Vue d'ensemble de l'application
<img width="1919" height="1075" alt="Capture d&#39;écran 2026-03-22 144617" src="https://github.com/user-attachments/assets/1f0afae6-9654-4e48-8d27-5617b6ed6605" />

### Section Fetch - Articles marocains
<img width="1920" height="1080" alt="Capture d&#39;écran 2026-03-22 144630" src="https://github.com/user-attachments/assets/4f17df15-9c53-458e-8ff3-76ae2b6791a1" />

*Affichage des articles avec des thèmes marocains en français*

### Section Axios - Utilisateurs marocains
<img width="1920" height="1080" alt="Capture d&#39;écran 2026-03-22 144641" src="https://github.com/user-attachments/assets/40fa1e11-19c6-4d77-b69b-78874dd154b0" />
<img width="1919" height="467" alt="Capture d&#39;écran 2026-03-22 144655" src="https://github.com/user-attachments/assets/9f93f726-17d2-4faf-9da4-84b206ace9cb" />

*Carnet d'utilisateurs avec noms marocains authentiques*
## 🎯 Objectifs pédagogiques

- Comprendre la différence entre fetch() et Axios
- Charger des données depuis une API
- Afficher des listes dynamiques dans React
- Gérer les états de chargement et les erreurs
- Structurer proprement son code React

## 🛠️ Technologies utilisées

- **React 18** - Bibliothèque JavaScript pour l'interface utilisateur
- **Axios** - Client HTTP pour les requêtes API
- **JSONPlaceholder** - API de test gratuite
- **CSS3** - Styles personnalisés

## 📦 Installation et configuration

### Prérequis

- Node.js (version 14 ou supérieure)
- npm (gestionnaire de paquets)

📁 Structure du projet
text
tp-api/
├── src/
│   ├── FetchData.js          # Composant avec fetch()
│   ├── AxiosData.js          # Composant avec Axios
│   ├── App.js                # Composant principal
│   ├── App.css               # Styles CSS
│   └── index.js              # Point d'entrée
├── package.json
└── README.md
🔧 Fonctionnalités
Composant FetchData (fetch())
Récupération des articles depuis l'API JSONPlaceholder

Transformation des données en français avec des sujets marocains

Gestion de l'état de chargement

Gestion des erreurs

Affichage des titres et contenus formatés

Composant AxiosData (Axios)
Récupération des utilisateurs via Axios

Personnalisation avec des noms marocains authentiques

Emails adaptés avec domaine .ma

Noms d'entreprises marocaines

Gestion des états de chargement et d'erreur

Composant App
Organisation de l'interface utilisateur

Présentation des deux composants côte à côte

Mise en page responsive

🎨 Aperçu des données
Articles affichés (Fetch)
Les secrets de la cuisine marocaine révélés par Fatima Zahra

Casablanca : La ville qui ne dort jamais - Reportage de Yassine Benjelloun

Comment réussir son tajine comme une véritable marocaine

L'avenir du tourisme au Maroc selon Karim Tazi

Les traditions ancestrales marocaines préservées par Aïcha El Mansouri

Utilisateurs marocains (Axios)

1.Fatima Zahra Benjelloun - fz.benjelloun@example.ma - Groupe Benjelloun & Fils

2.Yassine El Fassi - y.el fassi@example.ma - Holding El Fassi

3.Khadija Amrani - k.amrani@example.ma - Amrani Industries

4.Mohammed Tazi - m.tazi@example.ma - Tazi Corporation

5.Nadia El Mansouri - n.elm ansouri@example.ma - Mansouri Consulting

📊 Comparaison fetch() vs Axios
Caractéristique	fetch()	Axios
Installation	Intégré (pas besoin d'installer)	Nécessite npm install axios
Syntaxe	Plus verbeuse	Plus concise et intuitive
Gestion des erreurs	Nécessite vérification manuelle (response.ok)	Interception automatique
Transformation des données	response.json()	Accès direct via response.data
Compatibilité	Native	Fonctionne sur tous les navigateurs
Intercepteurs	Non supporté	Supporté
🚀 Gestion des états
L'application gère trois états pour chaque requête :

Chargement : Affichage d'un message "Chargement..."

Succès : Affichage des données récupérées

Erreur : Affichage d'un message d'erreur personnalisé

💡 Points d'apprentissage clés
Utilisation de useState pour gérer les états

Utilisation de useEffect pour les effets de bord

Gestion des promesses avec async/await

Try/catch pour la gestion des erreurs

Structure conditionnelle pour les états de chargement/erreur

🎯 Améliorations possibles
Ajout de pagination pour afficher plus d'articles

Formulaire pour ajouter/modifier des données

Utilisation d'intercepteurs Axios pour les requêtes

Mise en cache des données

Tests unitaires avec Jest

Utilisation de PropTypes pour la validation des props

📚 Ressources utiles
Documentation React

Documentation fetch()

Documentation Axios

JSONPlaceholder API

📝 Licence
Ce projet est réalisé dans un cadre pédagogique.

Malak Nait Haddou - 2026
