
// MAJ de la page bar d'apres le tableau d'objet barList

const barList = [
    
    {
        pictureBar: "url(assets/19143272_1205279886242831_4465527839130197464_o.jpg)",
        nameBar: "The Smoking Barrel",
        textBar:"Bar d’ambiance au cœur du quartier Saint Cyp, belle carte de cocktails, originales bières pression et vins du sud ouest tapas maison et de saisons .L’ambiance y est joviale et chaleureuse !",
        openBar:"Horraires d’ouverture : 17:00 - 02:00 <br> Adresse : 5 Pl. Jean Diebold, 31300 <br> Téléphone : 05 31 22 32 95",
        latBar : 43.597643165207685,
        longBar: 1.4290755653899188,
    },

    {
        pictureBar: "url(assets/bistrologue.jpg)",
        nameBar: "Le Bistrologue",
        textBar:"Le Bistrologue est un bar à tapas festif où vous pourrez déguster des mini plats accompagnés de délicieuses bières belges.",
        openBar:"Horraires d’ouverture : 16:00 - 02:00 <br> Adresse : 2 Pl. du Ravelin, 31300<br> Téléphone : 05 61 52 66 80",
        latBar : 43.5987240, 
        longBar: 1.4287731,
    }

    ,{
        pictureBar: "url(/assets/vasco-le-gamme.png)",
        nameBar: "Vasco Le Gamma",
        textBar:"Bar culturel et intergénérationnel, lieu de mixité sociale et culturelle. Pour en savoir plus, venez le découvrir et le redécouvrir !",
        openBar:"Horraires d’ouverture : 17:00 - 02:00 <br> Adresse : 1 Pl. de l'Estrapade, 31300 <br> Téléphone : 05 61 52 66 80",
        latBar : 43.5987501,
        longBar: 1.4332711,
    },

    {
        pictureBar: "url(assets/cachuete-lmq.jpg)",
        nameBar: "La Cacahuète",
        textBar:"Cacahuète. Quelque chose de simple et qui reprend cette tradition des bars aux noms un peu particuliers, sans pour autant tomber dans l’alambiqué ! Et il faut dire que pour évoquer l’apéro, difficile de penser à quelque chose de plus approprié.",
        openBar:"Horraires d’ouverture : 08:00 - 02:00 <br> Adresse : 21 rue Réclusane, 31300 <br> Téléphone : 09 85 00 96 15",
        latBar : 43.5987140,
        longBar: 1.4328430,
    }
]

const queryParams=window.location.search.split("?")[1].split("&").map(element =>element.split("=")).reduce((memo, value)=>{memo[value[0]] = value[1]; return memo},{});

/* Méthode alternative :

const queryParamsArrayOfKeysAndValues=window.location.search.split("?")[1].split("&").map(element =>element.split("="));
/const queryParams={};

queryParamsArrayOfKeysAndValues.forEach(([key, value])=>{
    queryParams[key]=value;
})

queryParamsArrayOfKeysAndValues.forEach((value)=>{

    queryParams[value[0]]=value[1]
 })

*/

const barIndex=queryParams.barIndex;
const barData=barList[barIndex];

// MAJ Nom du bar
const barNameElement= document.querySelector("#barName");
barNameElement.innerText=barData.nameBar;

// // MAJ Texte du bar
const barTextElement= document.querySelector("#barText");
barTextElement.innerText=barData.textBar;

// // MAJ Image du bar
const barPicDivElement= document.querySelector(".card");
barPicDivElement.style.backgroundImage=barData.pictureBar;

const barOpen=document.querySelector("#barOpen");
barOpen.innerHTML=barData.openBar;




const title = document.querySelector('.titlenav');
const containerImage = document.querySelector('.card:hover');
const nav = document.querySelector('nav')
window.addEventListener('scroll', function(){
    var scroll = this.scrollY; 
    if (scroll > 400){
    title.style.opacity = `${scroll - 400}%`;
    nav.style.backgroundColor =`rgba(5 32 74 / ${scroll - 400}%)`;
    }
    else{
        title.style.opacity = `0%`;
        nav.style.backgroundColor =`rgba(5 32 74 / 0%)`;
        
    }
})


// var lat = 43.597643165207685;
// var lon = 1.4290755653899188;

var lat = barData.latBar;
var lon = barData.longBar;
var macarte = null;
// Fonction d'initialisation de la carte
function initMap() {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 16);
    L.marker([lat,lon]).addTo(macarte);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);
}
window.onload = function(){
// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
initMap(); 
};

// MAJ de la liste des commentaites avec "afficher plus"

const btnShow = document.querySelector(".btn-show-more");
const hiddenComment = document.querySelector(".hidden-comment");
let hidden=true;

btnShow.addEventListener("click", function(){
if(hidden===true){
hiddenComment.classList.toggle("hidden-comment");
btnShow.innerHTML="Afficher moins";
hidden=false;  
}
else{
hiddenComment.classList.toggle("hidden-comment");
btnShow.innerHTML="Afficher plus";
hidden=true;  
}

});


// Ajout d'un commentaire via formulaire

const firstname = document.getElementById('name-input');
const commentary = document.querySelector('#comment-area');
const parentdiv = document.querySelector('#comment-container');
const btn = document.querySelector('#btn-standard');
const btnDarkMode = document.querySelector('#btn-darkmode')

let counterNumber =3; // compteur de commentaire initialisé à 2

//TODO : empecher la validation du formulaire si pas de nom/msg

// fonction liée au clic
btn.addEventListener("click", function(){

const newComment = document.createElement("div");
newComment.classList.add("comment-box");
parentdiv.appendChild(newComment);

const profileCom = document.createElement('div');
profileCom.classList.add('profile-com');
newComment.appendChild(profileCom);

//Ajout de la photo de profile
const profilePicture = document.createElement('img');
profilePicture.classList.add('profile-pic');
profilePicture.src='assets/circle-pic-3.png';
profileCom.appendChild(profilePicture);

const profileDetails = document.createElement('div');
profileDetails.classList.add('profile-details');
profileCom.appendChild(profileDetails);

//Création des éléments avec nom et date
const profileName = document.createElement('p');
profileName.classList.add('profile-nom');
profileName.innerText = firstname.value;
profileDetails.appendChild(profileName);

const profileDate = document.createElement('p');
profileDate.classList.add('profile-date');
profileDate.innerText = '40 decembre';
profileDetails.appendChild(profileDate);

//Ajout du commentaire final
const commentaryBox = document.createElement("div");
commentaryBox.classList.add('commentaire');
commentaryBox.innerText = commentary.value;
newComment.appendChild(commentaryBox);

// Incrémentation compteur
const commentCounter=document.querySelector(`.counter-title`);
counterNumber = counterNumber+ 1;
commentCounter.innerHTML=`5 - ${counterNumber} Commentaires`;


// Nettoyage du formulaire apres publication
commentary.value = "";
firstname.value = "";
})
const burgerBg = document.querySelector('.menu__box');
btnDarkMode.addEventListener('click', function(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    firstname.classList.toggle("dark");
    commentary.classList.toggle("dark");
    burgerBg.classList.toggle('dark')
});
const btnRainbow = document.querySelector('#btn-rainbowmode');
const cardsBtn = document.querySelectorAll('.button-card')

btnRainbow.addEventListener('click', function(){
    burgerBg.classList.toggle('wrapper');
    var element = document.body;
    element.classList.toggle("wrapper");
    nav.classList.toggle('wrapper');
    for (let title of cardsTitle) {
        title.classList.toggle('wrapper');
    }
    
   
})

// Etoiles du commentaire

const star1=document.querySelector("#star1");
const star2=document.querySelector("#star2");
const star3=document.querySelector("#star3");
const star4=document.querySelector("#star4");
const star5=document.querySelector("#star5");

let activeStar1=false;
let activeStar2=false;
let activeStar3=false;
let activeStar4=false;
let activeStar5=false;

star1.addEventListener(`click`,function(){

    if (!activeStar1){
        star1.src= "assets/star.png";
        star1.alt= "full star";
        activeStar1=true;
    }
    else{       
            star1.src= "assets/star-border.png";
            star1.alt= "border star";
            activeStar1=false;
        }
    }
);
star2.addEventListener(`click`,function(){

    if (!activeStar2){
        star1.src= "assets/star.png";
        star1.alt= "full star";
        star2.src= "assets/star.png";
        star2.alt= "full star";
        activeStar2=true;
    }
    else{       
            star2.src= "assets/star-border.png";
            star2.alt= "border star";
            activeStar2=false;
        }
    }
);

star3.addEventListener(`click`,function(){

    if (!activeStar3){
        star1.src= "assets/star.png";
        star1.alt= "full star";
        star2.src= "assets/star.png";
        star2.alt= "full star";
        star3.src= "assets/star.png";
        star3.alt= "full star";
        activeStar3=true;
    }
    else{       
            star3.src= "assets/star-border.png";
            star3.alt= "border star";
            activeStar3=false;
        }
    }
);
star4.addEventListener(`click`,function(){
    if (!activeStar4){
        star1.src= "assets/star.png";
        star1.alt= "full star";
        star2.src= "assets/star.png";
        star2.alt= "full star";
        star3.src= "assets/star.png";
        star3.alt= "full star";
        star4.src= "assets/star.png";
        star4.alt= "full star";
        activeStar4=true;
    }
    else{       
            star4.src= "assets/star-border.png";
            star4.alt= "border star";
            activeStar4=false;
        }
    }
);
star5.addEventListener(`click`,function(){
    if (!activeStar5){
        star1.src= "assets/star.png";
        star1.alt= "full star";
        star2.src= "assets/star.png";
        star2.alt= "full star";
        star3.src= "assets/star.png";
        star3.alt= "full star";
        star4.src= "assets/star.png";
        star4.alt= "full star";
        star5.src= "assets/star.png";
        star5.alt= "full star";
        activeStar5=true;
    }
    else{       
        star5.src= "assets/star-border.png";
            star5.alt= "border star";
            activeStar5=false;
        }
    }
);

// *************************************Menu*************************************
const quartiersBtn = document.querySelector("#dropbtn")
const menuBox =document.querySelector('.menu__box');
const quartierLi = document.querySelector('.dropdown_quartier')
const quartierA = document.querySelectorAll('.a-quartier')
const font = document.querySelector('#font')
let click = 0;
quartiersBtn.addEventListener('click', function(){
    click++
    quartierLi.classList.toggle('dropdown_quartier_visible');
    var classes = font.classList;
    if (click % 2 > 0){
    classes.replace("fa-hand-point-down", "fa-hand-point-up");
    }else {
    classes.replace("fa-hand-point-up", "fa-hand-point-down");
    }
   for (let a of quartierA){
    a.classList.toggle('a-quartier-visible')
   }
    
})
