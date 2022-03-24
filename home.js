if(window.innerWidth > 600) {
    const allCards = document.querySelectorAll('.text-card')

    for(let card of allCards){
        card.addEventListener('mouseenter', function (event){
           
            card.style.height = '13rem';
            card.addEventListener('click',() => {
            console.log('test')
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
    'card-saint-cyprien' : 'quartiers.html',
    'card-carmes' : 'quartiers.html',
    'card-saint-pierre' : 'quartiers.html',
    'card-capitole' : 'quartiers.html',
}

const myClassCards = document.querySelectorAll('.card')
for(let myClassCard of myClassCards){
    myClassCard.addEventListener('click', function() {
        const url = myCardUrl[myClassCard.classList.item(1)]
        window.open(url, "_self")
        })
} 