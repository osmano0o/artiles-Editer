let font = document.querySelector(".font")
let article = document.querySelector(".article")
let bold = document.querySelector(".bold")
let smaller = document.querySelector(".smaller")
let fontSize = document.querySelector(".font-size")
let larger = document.querySelector(".larger")
let invert = document.querySelector(".invert")
font.onclick = function(){
    article.style.fontFamily = this.value
}
bold.onclick = function(){
    article.classList.toggle("boldy")
    this.classList.toggle("boldy")
}
larger.onclick = function(){
    fontSize.innerHTML++
    article.style.fontSize = `${fontSize.innerText}px`
}
smaller.onclick = function(){
    fontSize.innerHTML--
    article.style.fontSize = `${fontSize.innerText}px`

}
invert.onclick  = function() {
    article.classList.toggle("inver")
}