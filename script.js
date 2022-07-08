$(document).ready(function () {
  // Ajouter un défilement fluide à tous les liens
  $("a").on("click", function (event) {
    // Empêcher le comportement de clic d'ancrage par défaut
    event.preventDefault();

    var hash = this.hash;

    // Utilisation de la méthode animate() de jQuery pour ajouter un défilement de page fluide
    // Le nombre facultatif (500) spécifie le nombre de millisecondes nécessaires pour faire défiler jusqu'à la zone spécifiée
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      500,
      function () {
        window.location.hash = hash;
      }
    );
  });
});
