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
const btnDarkMode = document.querySelector('#btn-darkmode')
const cardsTitle = document.querySelectorAll('.card-title')
const cardsBtn = document.querySelectorAll('.button-card')

btnDarkMode.addEventListener('click', function(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    for (let title of cardsTitle) {
        title.classList.toggle('dark');
    }
    for (let btn of cardsBtn) {
        btn.classList.toggle('dark');
    }
   
});