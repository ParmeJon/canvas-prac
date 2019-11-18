window.addEventListener("load", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    function Circle(x, y, dx, dy, radius, opacity) {
        this.x = x;
        this.y = y; 
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.opacity = opacity;

        this.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            //  ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.strokeStyle = 'lightblue'
            ctx.stroke();
            // let opacity = Math.random()
            ctx.fillStyle = `rgba(0,0,0,${this.opacity}`
            ctx.fill();
        }

        this.checkStatus = function() {
            if (innerWidth < this.x + radius - Math.abs(dx) ) {
                return true
            }
            if (innerHeight < this.y + radius - Math.abs(dy)) {
                return true
            }
            return false
        }

        this.update = function() {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
                this.opacity = Math.random()
            }
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
                this.opacity - Math.random()
            }
            
            this.pastX = this.x
            this.x += this.dx;
            this.pastY = this.y
            this.y += this.dy;
            this.draw();
        }
    }

    const circleArray = [];

    for (let i = 0; i < 100; i++) {
        let radius = Math.random() * 45;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * 3;
        let dy = (Math.random() - 0.5) * 3;
        let opacity = Math.random()
        circleArray.push(new Circle(x,y,dx,dy,radius, opacity))
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        for (let i =0; i < circleArray.length; i++) {
            if (circleArray[i].checkStatus()) {
                circleArray.splice(i,1)
            }
            circleArray[i].update();
        }
    }
    animate()

        window.addEventListener("resize", () => {
          canvas.height = window.innerHeight;
          canvas.width = window.innerWidth;
        });
})
