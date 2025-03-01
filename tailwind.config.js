/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",  // Assurez-vous de spécifier correctement les chemins pour que Tailwind puisse purger les classes inutilisées.
  ],
  theme: {
    extend: {
      colors: {
        primary: "#314584",  // Couleur principale
        secondary: "#ff3946",  // Couleur secondaire
        tertiary: "#6e757a",  // Couleur tertiaire
      },
      fontFamily: {
        body: ["Work Sans", "sans-serif"],  // Police de base
      },
      fontSize: {
        navSize: "24px",  // Taille de police pour la navigation
        heroSize: "74px",  // Taille de police pour la bannière héro
        pSize: "18px",  // Taille de police pour les paragraphes
      },
    },
  },
  plugins: [],
}
