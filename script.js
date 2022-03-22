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
const btn = document.querySelector('#btn-standard');
const btnDarkMode = document.querySelector('#btn-darkmode')


btnDarkMode.addEventListener('click', function(){
    var element = document.body;
    element.classList.toggle("dark-mode");
   
});


// Ajout d'un commentaire via formulaire

const firstname = document.getElementById('name-input');
const commentary = document.querySelector('#comment-area');
const parentdiv = document.querySelector('#comment-container');



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
    const commentaryText = document.createElement("p");
    commentaryText.innerText = commentary.value;
    commentaryBox.appendChild(commentaryText);
    newComment.appendChild(commentaryBox);

    // Incrémentation compteur
    const commentCounter=document.querySelector(`.counter-title`);
    counterNumber = counterNumber+ 1;
    commentCounter.innerHTML=`5 - ${counterNumber} Commentaires`;


    // Nettoyage du formulaire apres publication
    commentary.value = "";
    firstname.value = "";
})
