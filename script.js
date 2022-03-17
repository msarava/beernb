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