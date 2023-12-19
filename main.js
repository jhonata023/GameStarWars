const personagem = document.querySelector('.personagem');
const vilao = document.querySelector('.vilao');
const scoreHtml = document.querySelector('.score');
const button = document.querySelector('.reload');

let score = 0;

document.addEventListener('keyup', (e) => {
    if (e.code == "Space") {
        personagem.classList.add('pular');

        setTimeout(() => {
            personagem.classList.remove('pular');
        }, 800)
    }
})

const verifica = setInterval(() => {
    const posicaoVilao = vilao.offsetLeft;
    const posicaoPersona = window.getComputedStyle(personagem).bottom.replace('px', '');

    if (posicaoVilao <= 50 && posicaoVilao > 0 && posicaoPersona < 80) {
        vilao.style.animation = 'none';
        vilao.style.left = posicaoVilao+'px';

        personagem.style.animation = 'none';
        personagem.style.bottom = posicaoPersona+'px';

        button.classList.toggle('none');
        
        clearInterval(verifica);
    } else {
        score += 1;
        scoreHtml.innerText = score;
    }

}, 10)

button.addEventListener('click', () => {
    location.reload();
})