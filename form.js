


/************* Menu************/


//Dark Mode

const btnDarkMode = document.querySelector('#btn-darkmode')
const cardsTitle = document.querySelectorAll('.card-title')
const cardsBtn = document.querySelectorAll('.button-card')
const burgerBg = document.querySelector('.menu__box')
btnDarkMode.addEventListener('click', function(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    burgerBg.classList.toggle('dark')
    for (let title of cardsTitle) {
        title.classList.toggle('dark');
    }
    for (let btn of cardsBtn) {
        btn.classList.toggle('dark');
    }
   
});

//Rainbow mode

const btnRainbow = document.querySelector('#btn-rainbowmode');
btnRainbow.addEventListener('click', function(){
    burgerBg.classList.toggle('wrapper');
    for (let title of cardsTitle) {
        title.classList.toggle('wrapper');
    }
    for (let btn of cardsBtn) {
        btn.classList.toggle('wrapper');
    }
    nav.classList.toggle('wrapper');
    var element = document.body;
    element.classList.toggle("wrapper");
})

//drop menu
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

// Alerte formulaire

const lastNameIn = document.querySelector("#lastNameIn");
const firstNameIn = document.querySelector("#firstNameIn");
const mailIn = document.querySelector("#mailIn");
const btnSend = document.querySelector("#btn-standard");

btnSend.addEventListener('click',function(){

if (lastNameIn.value && firstNameIn.value && mailIn.value){

    alert(`Merci ${firstNameIn.value} ${lastNameIn.value} !\nVotre adresse est bien enregistr??e`);

    // Nettoyage du formulaire apres validation

    lastNameIn.value = "";
    firstNameIn.value = "";
    mailIn.value = "";
    }
else { alert("Merci de compl??ter tous les champs")};

})








