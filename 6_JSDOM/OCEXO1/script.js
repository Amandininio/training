let listeEl = document.querySelector("article > ul.important > li")

console.log(listeEl.nextElementSibling);

let mainContent = document.getElementById('main-content');
let importantClass = document.getElementsByClassName('important');
let articles = document.getElementsByTagName('article');
// let importantArticles = articles.querySelector("ul > li.important");

for (let article of importantClass){
    article.style.color = 'red';
}

console.log(mainContent, importantClass, articles, );

document.getElementsByTagName('body')[0].innerHTML= "";
let body = document.getElementsByTagName('body')[0];
const newP = document.createElement('p');
newP.innerHTML= "Mon <strong>grand</strong> contenu";
newP.classList.add('main');
body.appendChild(newP);
newP.style.color="green";

document.addEventListener('mousemove', function(event) {
    const x = event.offsetX; // Coordonnée X de la souris dans l'élément
    const y = event.offsetY; // Coordonnée Y de la souris dans l'élément

    console.log('x = ',x,'y =', y);
    
});