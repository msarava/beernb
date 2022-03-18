const title = document.querySelector('.titlenav');

window.addEventListener('scroll', function(){
    var scroll = this.scrollY;
    console.log(scroll)
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