
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
    let pdvEnnemi = 100;
    const pseudoUser = document.getElementById('pseudoUser').value;
    const pseudoEnnemi = document.getElementById('pseudoEnnemi').value;
    const reponseEx10 = document.getElementById("reponseEx10");
    reponseEx10.innerHTML = "";

    function dgtRandom(){
        let dgtEnnemi = Math.floor(Math.random()*60);
        let dgtUser = Math.floor(Math.random()*60);
        return {dgtUser, dgtEnnemi};
    }
    
    function affInner(whoStart, i, dmg, pdvUser, pdvEnnemi){ //On crée une fonction dans laquelle on y ajoute des parametre qui sont des variable établie plus tot dans la boucle avant l'appel de fonction. 
        if(whoStart === 1){
            reponseEx10.innerHTML += `<br><strong>Au combat n°${i}:</strong> </br>${pseudoEnnemi} inflige ${dmg.dgtEnnemi} dégats a ${pseudoUser}. <br>Il reste ${pdvUser} PV à ${pseudoUser} <br> <br>${pseudoUser} inflige ${dmg.dgtUser} dégats à ${pseudoEnnemi}. <br>Il reste ${pdvEnnemi} PV à ${pseudoEnnemi}. <br><br>`;
        }else{
            reponseEx10.innerHTML += `<br><strong>Au combat n°${i}:</strong> </br>${pseudoUser} inflige ${dmg.dgtUser} dégats a ${pseudoEnnemi}. <br>Il reste ${pdvUser} PV à ${pseudoEnnemi} <br> <br>${pseudoEnnemi} inflige ${dmg.dgtEnnemi} dégats à ${pseudoUser}. <br>Il reste ${pdvUser} PV à ${pseudoUser}. <br><br>`;
        }
    }
    
    if(pseudoUser ===""){
        reponseEx10.innerHTML = `Veuillez entrez un Pseudo pour vous Svp.`;
    }else if(pseudoEnnemi ===""){
        reponseEx10.innerHTML = `Veuillez entrez un Pseudo pour l'antagoniste Svp.`;
    } else {
        const whoStart = Math.floor(Math.random()*2);
        const playerOne = whoStart === 1 ? 'ennemi' : 'user';  // Ici structure conditionnelle si whoStart =1 alors 'ennemi' sinon 'user'
        reponseEx10.innerHTML = `${playerOne === 'ennemi' ? pseudoEnnemi : pseudoUser} Commence la partie.<br>`; // Meme structure conditionnelle sauf que si = 'ennemi' (récuperer au dessus) alors on affiche le pseudoEnnemi sinon pseudo joueur. 
        let i = 1;
        while(pdvUser > 0 && pdvEnnemi > 0){
                const dmg = dgtRandom(); //Appel de la fonction dgtRandom dans la constante dmg pour lui approter les dgt de chacun. 
                pdvUser = pdvUser - dmg.dgtEnnemi;  // on utilise les dgtEnnemi stocker dans dmg
                pdvEnnemi = pdvEnnemi - dmg.dgtUser; 
                affInner(whoStart, i, dmg ,pdvUser ,pdvEnnemi);
                i++;
            }
        if (pdvEnnemi <= 0 && pdvUser <= 0){
            reponseEx10.innerHTML += `<strong>${pseudoEnnemi} et ${pseudoUser} ont perdu la bataille ! ${pseudoEnnemi} et ${pseudoUser} sont mort après ${i} combats.</strong><br><button onclick="ex10()">Recommencez l'aventure.</button>`;
        } else if(pdvUser <= 0){
            reponseEx10.innerHTML += `<strong>${pseudoUser} a perdu la bataille ! ${pseudoUser} est mort après ${i} combats.</strong><br><button onclick="ex10()">Recommencez l'aventure.</button>`;
    } else if (pdvEnnemi <= 0){
        reponseEx10.innerHTML += `<strong>${pseudoEnnemi} a perdu la bataille ! ${pseudoEnnemi} est mort après ${i} combats.</strong><br><button onclick="ex10()">Recommencez l'aventure.</button>`;
    }
}
}

function changeBg(){
    const select = document.getElementById('selectBg').value;
    let backgroundImage = document.body.style.backgroundImage = select;
    document.body.style.backgroundColor = "rgba(40,40,40,.3)";
    document.body.style.backgroundBlendMode = "overlay"; 
    console.log(backgroundImage);
    localStorage.setItem('userBackground', backgroundImage);
}

function restoreBackground() {
    const savedBackground = localStorage.getItem('userBackground');
    if (savedBackground) {
        document.body.style.backgroundImage = savedBackground;
    }
}
window.onload = restoreBackground;

let quotesListIndex = 0;
const quotesList = [
    "Nous sommes ce qu nous faisons de manière répétitive, l'excellence n'est donc pas un acte mais une habitude. <br><q>Aristote</q>","Le meilleur moyen de réussir, c'est toujours d'essayer encore une fois.<br><q>Thomas Edison </q>","Aucun de nous ne sait ce que nous savons tous ensemble. <br><q>Euripide</q>"
];

function quotes(){
    const quote = document.getElementById("quote");
        if (quotesListIndex == 2){
            quotesListIndex =0;
        }else{
            quotesListIndex++;
        }
        quote.innerHTML = quotesList[quotesListIndex];
}

setInterval(quotes, 5000);