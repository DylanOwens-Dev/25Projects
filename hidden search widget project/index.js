var search = document.querySelector('.search-container');
var btn = document.querySelector('.btn');
var input = document.querySelector('.input');

btn.addEventListener("click", function(){
    search.classList.toggle('active');
    input.focus();
})
