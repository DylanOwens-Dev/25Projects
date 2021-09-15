const joke = document.getElementById('joke')
const btn = document.getElementById('btn')

btn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
    var config = {
        headers: {
        'Accept': 'application/json'
        }
    }   
    
    fetch('https://icanhazdadjoke.com/', config).then((res) => res.json()).then((data) => {
        joke.innerHTML = data.joke
    })
}

