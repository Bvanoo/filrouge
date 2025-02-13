
function ex1(){
    const prenom = document.getElementById("prenom").value;
    const nom = document.getElementById("nom").value;
    const reponseEx1 = document.getElementById("reponseEx1");
    reponseEx1.innerHTML = "Bonjour " + prenom + " " + nom + ", comment allez-vous ? ";
}

function ex2(){
    const prix = parseFloat(document.getElementById("prix").value);  //parseFloat, parseInt pour transformer un input en number de plus si l'utilisateur renvois qqch non transformable en nombre pour faire le calcul, ca renverras NaN pour Not a Number.
    const qteArt = parseFloat(document.getElementById("qteArt").value);
    const tauxTva = parseFloat(document.getElementById("tauxTva").value);
    const tvac = prix*qteArt*(1+tauxTva/100);
    const reponseEx2 = document.getElementById("reponseEx2");
    reponseEx2.innerHTML = "Le prix total tvac est de : " +tvac.toFixed(2)+ "€"; //toFixed(2) pour arrondir a 2 chiffres après la virgule.
    console.log(typeof(prix));
}

function ex3(){
    const nbre1 = parseFloat(document.getElementById("nbre1").value);
    const nbre2 = parseFloat(document.getElementById("nbre2").value);
    const reponseEx3 = document.getElementById("reponseEx3");
    const somme = nbre1+nbre2;
    const diff = nbre1-nbre2;
    const produit = nbre1*nbre2;
    const quotient = nbre1/nbre2;
    reponseEx3.innerHTML = `La somme de ces nombres vaut ${somme}.<br>
    La différence de ces nombres vaut ${diff}.<br>
    Le quotient de ces nombres vaut ${quotient}.<br>
    Le produit de ${nbre1} par ${nbre2} vaut ${produit}.`;
}

function ex4(){
    const nbreUser = parseInt(document.getElementById("nbreUser").value);
    const reponseEx4 = document.getElementById("reponseEx4");
    if (nbreUser > 10){
        reponseEx4.innerHTML = `Votre chiffre ${nbreUser} est plus grand que 10`;
    } else if (nbreUser < 10){
        reponseEx4.innerHTML = `Votre chiffre ${nbreUser} est plus petit que 10`;
    } else{
        reponseEx4.innerHTML = `Votre chiffre ${nbreUser} est egal à 10`;
    }
}

// function ex5(){
//     const reponseEx5 = document.getElementById("reponseEx5");
//     const annUser = parseInt(document.getElementById("annUser").value);
//     if(annUser%4 == 0 && annUser%100 != 0){ // Il manque la vérification %400 = 0
//         reponseEx5.innerHTML = `Votre année ${annUser} est bissextile.`;
//     } else if(annUser%100 == 0 && annUser%400 == 0){ // Il manque la vérification %4 == 0
//         reponseEx5.innerHTML = `Votre année ${annUser} est bissextile.`;
//     } else {
//         reponseEx5.innerHTML = `Votre année ${annUser} n'est pas bissextile.`;
//     }
// }

function ex5(){ // CORRECTION (SIMPLIFICATION)
    const reponseEx5 = document.getElementById("reponseEx5");
    const annUser = parseInt(document.getElementById("annUser").value);
    if((annUser%4 == 0 && annUser%400 == 0) && annUser%100 != 0){
        reponseEx5.innerHTML = `Votre année ${annUser} est bissextile.`;
    } else {
        reponseEx5.innerHTML = `Votre année ${annUser} n'est pas bissextile.`;
    }
}

function ex6(){
    const reponseEx6 = document.getElementById("reponseEx6");
    const ageUser = parseInt(document.getElementById("ageUser").value);
    if(ageUser <= 0){
        reponseEx6.innerHTML = `T'est pas encore né mon gars.`;
    }
    else if(ageUser < 18){ // SI TU METS -2 -> PROBLEME
        reponseEx6.innerHTML = `Vous n'êtes pas encore majeur. Vous avez ${ageUser} ans`;
    } else if(ageUser < 50){
        reponseEx6.innerHTML = `Vous êtes majeur mais pas encore senior. Vous avez ${ageUser} ans`;
    } else if(ageUser < 65){
        reponseEx6.innerHTML = `Vous êtes senior mais pas encore retraité. Vous avez ${ageUser} ans`;
    } else {
        reponseEx6.innerHTML = `Vous êtes retraité profitez de votre temps libre. Vous avez ${ageUser} ans`;
    }
}

function ex7(){
    const reponseEx7 = document.getElementById("reponseEx7");
    const dateNaissUser = parseInt(document.getElementById("dateNaissUser").value);
    const annAct = new Date().getFullYear; // new Date().getFullYear() Permet de récuperer l'année actuelle
    const ageAct = annAct-dateNaissUser
    if(annAct-dateNaissUser >= 18 && annAct-dateNaissUser <= 35){
        reponseEx7.innerHTML = `Vous pouvez participer a la formation. Vous avez ${ageAct} ans en l'an ${annAct}`;
    } else if (ageAct < 18){ // Le moins 2 n'est pas pris en compte
        reponseEx7.innerHTML = `Vous êtes trop jeune pour participer a la formation. Vous avez ${ageAct} ans`;
    } else if (ageAct <= 100){
        reponseEx7.innerHTML = `Vous êtes trop vieux pour participer a la formation. Vous avez ${ageAct} ans`;
    } else{
        reponseEx7.innerHTML = `Vous êtes Voldemort ? Ou ce trouve la fontaine de jouvence ?  Vous avez ${ageAct} ans`;
    }
}

// Calculatrice.

const calcScreen = document.getElementById("calcScreen");
const btn = document.querySelectorAll(".case");

let inputUser = "";
let histo = [];
// Permet de crée un boucle "forEach" qui a comme attribut function(touche) et donc pour chaque .case récuperer le script va rechercher la valeur présente dans le data-value, reprise par le dataset.value
btn.forEach(function(touche) {
    touche.addEventListener("click",function() {
        const caseCalc = touche.dataset.value;
        if (caseCalc === '='){ // Ici on verifie si la touche entrée est = et si c'est un égal et si c'est égal j'utilise un objet Function qui va permettre de faire l'expression du resultat grace au return
            try {
                let result = new Function('return ' + inputUser)(); // dans ma variable result je lui ajoute un function avec comme parametre return + mon input user ce qui permet de realiser l'expression de l'input user, ensuite j'appelle imédiatement la fonction dans ma variable ce qui lui attribue automatiquement la valeur qui sort de cette fonction et donc la variable result passe de type objet a type number.
                if (Number.isFinite(result)){                
                if(Number.isInteger(result)){ // si il est entier pas de restriction sur les virgules 
                    calcScreen.innerHTML =`${result}`; 
                    histo.push(`${inputUser} = ${result}`); // Ajoutez l'expression et le résultat à l'historique //.push permet d'ajouter dans le histo []
                    inputUser = `${result}`;
                } else {
                    calcScreen.innerHTML =`${result.toFixed(6)}`;  // si il est décimal, max 6 décimale ( a modifier en math round p-e ? pour ne pas avoir 6 décimale sur un .50 par exemple.)
                    // inputUser = `${result.toFixed(6)}`;
                } 
            }else{
                throw new Error("Resultat infinis ou invalide");
            }
        } catch (error) {
            calcScreen.innerHTML = "Erreur : veuillez clear."; // j'aurais pu mettre error.mesasge pour afficher le message lier a l'erreur présente.
        }
        } else if (caseCalc === 'C') { //si c on supprime tout.
            inputUser = "";
            calcScreen.innerHTML = "";
        }else if (caseCalc ==='del'){
            inputUser = inputUser.slice(0, -1); //supprime la derniere entrée 
            calcScreen.innerHTML = inputUser;
        }else if (caseCalc ==='switch'){ // change le symbole de l'entree par un - et si c'est - ca fait + .
            if(inputUser !== ""){
                inputUser = -parseFloat(inputUser);
                calcScreen.innerHTML = `${inputUser}`;
            }else{
                inputUser += caseCalc;
                calcScreen.innerHTML = `${inputUser}`;
                histo.push(`${inputUser} = ${calcScreen.innerHTML}`);
            }
        }else {
            inputUser += caseCalc;
            calcScreen.innerHTML = `${inputUser}`;
        }
        // Affiche dans une autres div comme pour garder un historique (pas encore en place.)
        if (caseCalc === '=') { // Si "=" est pressé, ajoutez l'expression et le résultat à l'historique
            let resultat = new Function('return ' + inputUser)();
            if(Number.isInteger(resultat)) {
                calcScreen.innerHTML = `${resultat}`;
            } else {
                calcScreen.innerHTML = `${resultat.toFixed(6)}`;
            }

            // Récuperation de l'expression et du résultat dans un historique avec une limite de 10 calcul.
            const repCalc = document.getElementById("repCalc");
            repCalc.innerHTML = histo.join('<br>').split(); // Affiche chaque entrée de l'historique sur une nouvelle ligne
            if (histo.length > 10){
                repCalc.innerHTML = histo.join('<br>').split(); // Affiche chaque entrée de l'historique sur une nouvelle ligne
                histo = histo.splice(1, 1);
                repCalc.innerHTML = histo.join('<br>').split(); // Affiche chaque entrée de l'historique sur une nouvelle ligne
            }
        }
    })
});

//Switch de tiroir. 

function ex8(){

const tiroir = Number(document.getElementById("tiroir").value);
const reponseEx8 = document.getElementById("reponseEx8");

switch(tiroir){
    case 1:
        reponseEx8.innerHTML=`Un Stress-Reliever Keyboard voici une image <br><img src="img/stress.jpg" alt="stress reliever kbd">`;
        break;
    case 2:
        reponseEx8.innerHTML=`Un MousePad Pizza <img src="img/pizza.jpg" alt="tapis de souris pizza">`;
        break;
    case 3:
        reponseEx8.innerHTML=`Code Debugger en peluche : Un petit coussin en forme de bug géant avec des yeux tout mignons, que tu peux 'hugger' à chaque fois qu'un code ne marche pas comme prévu. C’est censé apaiser les développeurs pendant les moments de frustration, tout en apportant une touche de réconfort un peu absurde. <img src="img/ours.jpg" alt="ourson debugger">`;
        break;
    case 4:
        reponseEx8.innerHTML=`Une boite a excuse qui donne aléatoirement une excuse de dev <br>'Sur ma machine ca marche'<br>'Tout fonctionnais hier'<br>'Je l'ai fait sur ma machine tout a l'heure mais j'ai tout supprimer <img src="img/boite.jpg" alt="une boite a excuse">`;
        break;
    default:
        reponseEx8.innerHTML="Quand t'as pas d'idée, chatgpt est ton ami et si tu vois ce message c'est que t'as démonter mon armoire saligaud";
}
}

function ex9(){
    const reponseEx9 = document.getElementById("reponseEx9");
    let i = 0;
    reponseEx9.innerHTML ="";
    while (i<10){
        reponseEx9.innerHTML += `i vaut: ${i} <br>`;
        i += 1;
    }
}

function ex9bis(){
    const reponseEx9bis = document.getElementById("reponseEx9bis");
    reponseEx9bis.innerHTML ="";
    for (i=0;i<10;i++){
        reponseEx9bis.innerHTML += `i vaut: ${i} <br>`;
    }
}


function ex10(){
    let pdvUser = 100;
    let continuer = "oui";
    const prenom = "Alain";
    const ennemi = "Sebastien !VAN HOUTEN! ";
    const reponseEx10 = document.getElementById("reponseEx10");
    let pdvEnnemi = 100;
    let i = 1;
    reponseEx10.innerHTML = "";
    while(pdvUser > 0 && pdvEnnemi > 0){
        // continuer = prompt("Que voulez-vous faire ? Tapez 'oui' pour continuer le combat ou 'potion' pour utiliser une potion.");        
        // if(continuer)
        let dgtUser = Math.floor(Math.random()*60);
        let dgtEnnemi = Math.floor(Math.random()*60);
        pdvUser = pdvUser - dgtEnnemi; 
        pdvEnnemi = pdvEnnemi - dgtUser; 
        reponseEx10.innerHTML += `<strong>Au combat n°${i}:</strong> </br>${ennemi} inflige ${dgtEnnemi} dégats a ${prenom}. <br>Il reste ${pdvUser} PV à ${prenom} <br> <br>${prenom} inflige ${dgtUser} dégats à ${ennemi}. <br>Il reste ${pdvEnnemi} PV à Dragon. <br><br>`;
        i++;
    }
    if(pdvUser <= 0){
        reponseEx10.innerHTML += `<strong>${prenom} a perdu la bataille ! ${prenom} est mort après ${i} combats.</strong><br><button onclick="ex10()">Recommencez l'aventure.</button>`;
    } else if (pdvEnnemi <= 0){
        reponseEx10.innerHTML += `<strong>${ennemi} a perdu la bataille ! ${ennemi} est mort après ${i} combats.</strong><br><button onclick="ex10()">Recommencez l'aventure.</button>`;
    }
}