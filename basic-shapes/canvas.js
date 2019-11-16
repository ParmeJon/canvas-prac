window.addEventListener("load", () => {
    const canvas = document.getElementById('canvas');
    // set up the context
    const ctx = canvas.getContext('2d');
    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e);
    }
    function finishedPosition(){
        painting = false;
        ctx.beginPath()
    }
    function draw(e) {
        if(!painting) return 
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = "purple"

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
    // Eventlisteners 
    
    // // Resize
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // ctx.fillRect => Makes a shape - works like position absolute
    // x coordinate, y y coordinate, width, height
    ctx.fillRect(100, 100, 200, 500);
    // Change stroke colors
    ctx.strokeStyle = "red";
    // Changes line width
    ctx.lineWidth = 5;
    ctx.strokeRect(500, 100, 200, 200);
    // Works top to down.
    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
    ctx.strokeRect(450, 150, 200, 200);

    // custom lines
    ctx.beginPath();
    ctx.moveTo(500,500);
    ctx.lineTo(550,550);
    ctx.lineTo(550,600);
    ctx.strokeStyle = "blue"
    ctx.stroke();

    // Reset path
    ctx.beginPath()

    window.addEventListener("resize", () => {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        // Make a shape - works like position absolute
        // x coordinate, y y coordinate, height, width
        ctx.fillRect(100, 100, 200, 500);
        ctx.strokeRect(500, 100, 200, 200);
    })
})
