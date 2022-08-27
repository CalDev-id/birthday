const hamburger = document.querySelector('#hamburger');

const nav = document.querySelector('#nav-menu');

hamburger.addEventListener("click", function(){
    nav.classList.toggle('hidden')
    hamburger.classList.toggle('hamburger-active')
});

// navbar fixed

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixnav = header.offsetTop;

    if (window.pageYOffset > fixnav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};


// audio

const audio = new Audio();
audio.src = "song/blessing.mp3";


// AUTO SCROLL

const effect = document.querySelector('#my-canvas');
const mulai = document.querySelector('#mulai');
const lirik = document.querySelector('body');

mulai.addEventListener("click", function(){
    setInterval(function(){
        window.scrollBy(0, 2);
    }, 10);
    audio.play();

    effect.classList.toggle('hidden');
    document.body.classList.remove('overflow-y-hidden')
});

//auto top
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// alert close

const close = document.querySelector('#close');
const alert = document.querySelector('#alert');

close.addEventListener("click", function(){
    alert.style.display='none';
});

// ganti banner hero

const imghero = document.querySelector('#imghero');

const cewe = document.querySelector('#cewe');
const cowo = document.querySelector('#cowo');

cewe.addEventListener("click", function(){
    imghero.setAttribute('src', 'img/' + 'bannercewe' + '.jpg' )
});

cowo.addEventListener("click", function(){
    imghero.setAttribute('src', 'img/' + 'banner' + '.png' )
});

// simpan nama

function getNama() {
    let userInput = document.querySelector("#name");
    let message = document.querySelector("#bannernama");

    let userInputPesan = document.querySelector("#pesan");
    let isiPesan = document.querySelector("#isipesan");

    message.innerHTML = userInput.value;

    isiPesan.innerHTML = userInputPesan.value;
};

const closeSubmit = document.querySelector("#submit")
closeSubmit.addEventListener("click", function(){
    alert.style.display='none';
});

// EFFECT
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

// SCROLL REVEAL 

const sr = ScrollReveal({
    origin: 'left',
    distance: '50px',
    duration: 2000,
    reset: true
});

sr.reveal(` #lagu`, {
    interval:200
});

const srRight = ScrollReveal({
    origin: 'right',
    distance: '50px',
    duration: 2000,
    reset: true
});

srRight.reveal(` #lagu2`, {
    interval:200
});
