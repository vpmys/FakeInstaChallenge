let btnMore = document.querySelector('#more');
let post = document.querySelector('.card');
let content = document.querySelector('.content');
​
btnMore.addEventListener('click', () => {
    // cria um clone das estrutura HTML de um post
    let newPost = post.cloneNode(true);
    content.insertBefore(newPost, btnMore);
});
​
/* Exercício 2 
no html:
onclick="toggleHeart(this)"
*/
​
const toggleHeart = (elemento) => {
    let heart = elemento;
    console.log(heart.src);
    if (heart.src.includes('/img/icons/heart.svg')) {
        heart.src = 'img/red-heart.png';
​
        //exercicio 4
        heart.nextElementSibling.innerHTML = '1 like'
    } else {
        heart.src = '/img/icons/heart.svg'
​
        //exercicio 4
        heart.nextElementSibling.innerText = '0 like'
    }
};
​
// exercicio 3 
let busca = document.querySelector('.busca');
​
​
busca.addEventListener('mouseover', () => {
    busca.style.boxShadow = '0px 1px 3px black';
})
​
busca.addEventListener('mouseout', () => {
    busca.style.boxShadow = 'none';
})