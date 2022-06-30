const som_pulo = new Audio();
const som_HIT = new Audio();

som_pulo.src = './som/pulo.wav';
som_HIT.src = './som/hit.wav';

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    som_pulo.play();

    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500)
    
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        som_HIT.play();
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = "50px"

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump)