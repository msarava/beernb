const title = document.querySelector('.titlenav');
const containerImage = document.querySelector('.card:hover');
window.addEventListener('scroll', function(){
    var scroll = this.scrollY;
    
    if (scroll > 400){
    title.style.opacity = `${scroll - 400}%`;}
    else{
        title.style.opacity = `0%`;
    }
})
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
		initMap(); 
            };

const firstname = document.getElementById('name-input')
const commentary = document.querySelector('#comment-area')
const parentdiv = document.querySelector('#comment-container')
const btn = document.querySelector('#btn-standard');
btn.addEventListener("click", function(){
 const newComment = document.createElement("div")
        newComment.classList.add("comment-box");
        parentdiv.appendChild(newComment);
  const profileCom = document.createElement('div');
         profileCom.classList.add('profile-com');
         newComment.appendChild(profileCom);
  const profilPicture = document.createElement('img');
         profilPicture.classList.add('profile-pic');
         profilPicture.src='assets/circle-pic-2.png'
         profileCom.appendChild(profilPicture);
     
  
  
  
         const profilDetails = document.createElement('div');
        profilDetails.classList.add('profile-details');
        profileCom.appendChild(profilDetails);
    



    const profilName = document.createElement('p');
    profilName.classList.add('profil-nom');
    profilName.innerText = firstname.value;
    profilDetails.appendChild(profilName)
  
    const profilDate = document.createElement('p');
    profilDate.classList.add('profil-date');
    profilDate.innerText = '40 decembre';
    profilDetails.appendChild(profilDate)
  
    


        const commentaryBox = document.createElement("div");
        commentaryBox.classList.add('commentaire')
        commentaryBox.innerText = commentary.value
        newComment.appendChild(commentaryBox);
})