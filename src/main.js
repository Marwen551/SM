var app = angular.module('MonApp', []);

app.controller('MainController', function($scope) {
    $scope.calculerEtAfficherResultat = function() {
        // Vérifie si un profil est choisi
        if (!$scope.choixProfil) {
            alert("Veuillez choisir un profil avant de calculer.");
            return; // Arrête la fonction si aucun profil n'est choisi
        }

        // Vérifie si le TJM est renseigné
        if (!$scope.tjm) {
            alert("Veuillez saisir le TJM (Taux Journalier Moyen) pour effectuer le calcul.");
            return; // Arrête la fonction si le TJM n'est pas renseigné
        }

        // Calcul du résultat en fonction du profil, du TJM, de l'impôt et des nouveaux éléments
        var impot = 0.09 * $scope.tjm; // 9% de l'impôt
        var tauxVariable = ($scope.choixProfil === 'securite') ? 0.15 : 0.3;
        var fraisSociete = 0.04; // 4% de frais de société
        var mutuelle = 5;

        $scope.resultat = $scope.tjm - impot - ($scope.tjm * tauxVariable) - ($scope.tjm * fraisSociete) - mutuelle;
    };
});

