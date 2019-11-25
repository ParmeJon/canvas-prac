const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
let rainDrops = 300;
const particlesArray = [];
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

function RainDrop(x, y, opacity) {
    this.x = x
    this.y = y
    this.l = Math.random() * 1
    this.opacity = opacity
    this.speedX = -4 + Math.random() * 4 + 2
    this.speedY = Math.random() * 10 + 10
}


for (let i = 0; i < rainDrops; i++) {
    particlesArray.push(new RainDrop(width, height, Math.random()))
}

function createRainDrops(array) {
    for (let i = 0; i < array.length; i++){
        let drop = array[i]
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + drop.l * drop.speedX, drop.y + drop.l * drop.speedY);
        ctx.stroke();
    }
}

createRainDrops(particlesArray)

function clientResize(ev) {
    width = canvas.width = window.innerWidth;
    height = (canvas.height = window.innerHeight);
}

window.addEventListener("resize", clientResize);


