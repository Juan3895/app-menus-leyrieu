// Fonction pour basculer entre les onglets
function afficherOnglet(nomOnglet) {
  document.querySelectorAll('.onglet').forEach(el => el.classList.remove('active'));
  document.getElementById(nomOnglet).classList.add('active');
  
  if (nomOnglet === 'courses') {
    genererListeCourses();
  }
}

// Génération de la liste de courses basée sur les repas de la semaine
async function genererListeCourses() {
  const ulCourses = document.getElementById('liste-courses');
  ulCourses.innerHTML = 'Chargement...';

  // 1. Récupérer les repas prévus dans le planning de la semaine
  // 2. Pour chaque repas, récupérer les ingrédients associés
  // 3. Fusionner les ingrédients identiques et cumuler les quantités

  /* Exemple de rendu HTML : */
  const ingredients = [
    { nom: "Pâtes", quantite: 500, unite: "g" },
    { nom: "Sauce Tomate", quantite: 2, unite: "briques" },
    { nom: "Œufs", quantite: 6, unite: "" }
  ];

  ulCourses.innerHTML = ingredients.map(ing => `
    <li>
      <label>
        <input type="checkbox"> ${ing.quantite} ${ing.unite} ${ing.nom}
      </label>
    </li>
  `).join('');
}