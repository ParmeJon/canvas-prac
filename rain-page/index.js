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

function createRainDrops() {
    ctx.clearRect(0, 0, width, height)
    for (let i = 0; i < particlesArray.length; i++){
        let drop = particlesArray[i]
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + drop.l * drop.speedX, drop.y + drop.l * drop.speedY);
        ctx.strokeStyle = `rgba(174,194,224,${drop.opacity}`
        ctx.stroke();
    }
    move()
}

function move() {
    for (let i = 0; i < particlesArray.length; i++ ) {
        let drop = particlesArray[i]
        drop.x += drop.speedX
        drop.y += drop.speedY
        if (drop.x > width || drop.y > height) {
            drop.x = Math.random()*width;
            drop.y = -20;
        }
    }
}

setInterval(createRainDrops, 30);

function clientResize(ev) {
    width = canvas.width = window.innerWidth;
    height = (canvas.height = window.innerHeight);
}

window.addEventListener("resize", clientResize);


