const inputNama = document.getElementById('inputNama')
const result = document.getElementById('result')
const waitText = document.getElementById("waitText")
const imgHeart = document.getElementById("imgHeart")
const quotes = ["Stop stressing over shitty people", "Be like a sun keep on shining and let them burn","let it hurt then let it go", "Don't stop until u proud", "Yang dapet kata kata ini berarti orangnya cantik"]
function clickMe() {
    let random = Math.floor(Math.random() * quotes.length)
    result.classList.add('hidden')
    wrongInput.classList.add('hidden')
    waitText.classList.toggle('hidden')
    setTimeout(() => {
        if (inputNama.value.length == 0) {
            waitText.classList.toggle('hidden')
            wrongInput.classList.remove('hidden')
        }
        else{
            waitText.classList.toggle('hidden')
            result.classList.remove('hidden')
            result.innerHTML = "<span class ='text-red-700'>"+ inputNama.value + "</span>" + " Quotes yang kamu dapat " + "<span class ='text-red-700'>"+ '"' + quotes[random] + '"' + "</span>"
        }
    }, 2000);
}

function heart(){
    imgHeart.classList.toggle("grayscale" )
}