if(window.innerWidth > 600) {
    const allCards = document.querySelectorAll('.text-card')

    for(let card of allCards){
        card.addEventListener('mouseenter', function (event){
           
            card.style.height = '13rem';
            card.addEventListener('click',() => {
            })
        })    
        card.addEventListener('mouseleave', function (event){
             card.style.height = '2.5rem'
        })
    
    
    }
}
    else {
        const textCards = document.querySelectorAll('.text-card');
       
        for(let card of textCards){
    card.style.display = 'none'
    }
}

const myCardUrl = {
    'card-smoking' : 'bar.html',
    'card-bistrologue' : 'bar.html',
    'card-cacahuete' : 'bar.html',
    'card-gamma' : 'bar.html',
}

const myClassCards = document.querySelectorAll('.card')
for(let myClassCard of myClassCards){
    myClassCard.addEventListener('click', function() {
        const url = myCardUrl[myClassCard.classList.item(1)]
        window.open(url, "_self")
        })
} 
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