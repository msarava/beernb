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


/*if (firstname.style.background === 'grey') {
    firstname.style.background='white'
    firstname.placeholder.style.color='white'
}else {
    firstname.style.background='grey'
    firstname.style.color='white'*/
