// le .filter(), comme le .map(), crée une copie du tableau sur le lequel il est appelé.

const words = ["spray", "elite", "exuberant", "destruction", "present"];

// "word.length > 6" est la condition que doivent rescpecter les éléments pour être 'gardé' dans le tableau
const wordsFilter = words.filter((word) => word.length > 6);

console.log(wordsFilter);

// Exemple: recherche avec une entrée utilisateur
const filtreTexte = (entreeUtilisateur) =>
  words.filter((word) => word.indexOf(entreeUtilisateur) !== -1);

const entreeUtilisateur = "ra";

console.log(filtreTexte(entreeUtilisateur));
