window.addEventListener("load", () => {
    const canvas = document.getElementById('canvas');
    // set up the context
    const ctx = canvas.getContext('2d');
    let painting = false;

    function startPosition(){
        painting = true
    }
    function finishedPosition(){
        painting = false;
    }
    // Eventlisteners 
    
    // // Resize
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // Make a shape - works like position absolute
    // x coordinate, y y coordinate, height, width
    ctx.fillRect(100, 100, 200, 500);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.strokeRect(500, 100, 200, 200);
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

    window.addEventListener("resize", () => {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        // Make a shape - works like position absolute
        // x coordinate, y y coordinate, height, width
        ctx.fillRect(100, 100, 200, 500);
        ctx.strokeRect(500, 100, 200, 200);
    })
})
