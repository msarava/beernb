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
    'card-smoking' : 'bar.htmlbarIndex=0',
    'card-bistrologue' : 'bar.html?barIndex=1',
    'card-cacahuete' : 'bar.html?barIndex=2',
    'card-gamma' : 'bar.html?barIndex=3',
}

const myClassCards = document.querySelectorAll('.card')
for(let myClassCard of myClassCards){
    myClassCard.addEventListener('click', function() {
        const url = myCardUrl[myClassCard.classList.item(1)]
        window.open(url, "_self")
        })
} 

/* Mene DropDown du menu burger */

