//Main réalisé pour le TP
//Variable de déclaration pour les différentes valeurs

var paris = null;
var numberMax = 100;
var number = Math.floor(Math.random() * numberMax);

//Savoir si l'utilisateur est entrain de jouer
var isPlay = true;

$('document').ready(function() {

    //Lancement du compteur aléatoire
    $('.numberMax').html(numberMax);

    $('#start').click(function() {
        //$('.reponse').html('Le bon nombre est :')
        $('#paris').css({ 'visibility': 'visible', 'opacity': '1' });
        result();
    });

    //Suite à la saisie du nombre, si la réponse est supérieure ou inférieure ou bonne
    function result() {
        paris = $('#nombre').val();

        if (paris == number) {
            $('.reponse').html('Gagné !')
            alert(reponse);
            //Le joueur ne joue plus vu qu'il a gagné
            isPlay = false;
        } else if (paris < number) {
            $('.reponse').html('Plus Grand !')
        } else {
            $('.reponse').html('Plus Petit !')
        }

        $('#nombre').val('');

    };

});

//Fonction Reset de l'application

function resetForm() {
    document.getElementById("paris").reset();
}