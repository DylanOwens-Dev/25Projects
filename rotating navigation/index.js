var open = document.querySelector('#open')
var close = document.querySelector('#close')
var cont = document.querySelector('.container')

open.addEventListener('click', () => cont.classList.add('show-nav'))

close.addEventListener('click', () => cont.classList.remove('show-nav'))