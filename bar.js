var lat = 43.597643165207685;
var lon = 1.4290755653899188;
var macarte = null;
// Fonction d'initialisation de la carte
function initMap() {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 16);
    L.marker([43.597643165207685, 1.4290755653899188]).addTo(macarte);
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
initMap(); utt
};

// MAJ de la liste des commentaites avec "afficher plus"

const btnShow = document.querySelector(".btn-show-more");
const hiddenComment = document.querySelector(".hidden-comment");
let hidden=true;

btnShow.addEventListener("click", function(){
if(hidden===true){
hiddenComment.classList.toggle("hidden-comment");
btnShow.innerHTML="afficher moins";
hidden=false;  
}
else{
hiddenComment.classList.toggle("hidden-comment");
btnShow.innerHTML="afficher plus";
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
btnDarkMode.addEventListener('click', function(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    firstname.classList.toggle("dark");
    commentary.classList.toggle("dark");
});