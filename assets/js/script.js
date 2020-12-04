let nombreEssai = 0;
let aleaNombre = Math.floor(10 * Math.random());

function choix() {

    let nombre = document.getElementById("reponse").value;

    nombreEssai++;

    if (nombre < aleaNombre) { // c'est plus 
        document.getElementById("reponse").value = "";
        let coucou = document.createElement("p");
        coucou.innerHTML = "C'est plus";
        document.getElementById("myList").append(coucou);

    }

    if (nombre > aleaNombre) { // c'est moins
        document.getElementById("reponse").value = "";
        let coucou2 = document.createElement("p");
        coucou2.innerHTML = "C'est moins";
        document.getElementById("myList").append(coucou2);

    }
    if (nombre == aleaNombre) { // c'est gagné 
        document.getElementById("reponse").value = "";
        let coucou3 = document.createElement("p");
        coucou3.innerHTML = "Félicitation, tu auras à Noël " + aleaNombre + ` <i class="fas fa-gift"></i>` + " <br>Tu as gagné en " + nombreEssai + " coup(s)";
        document.getElementById("myList").append(coucou3)
    }

}