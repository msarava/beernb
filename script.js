const title = document.querySelector('.titlenav');

window.addEventListener('scroll', function(){
    var scroll = this.scrollY;
    if (scroll > 260){
    title.style.visibility = 'visible';}
})