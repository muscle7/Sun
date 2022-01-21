// Drawing Sunrise

// Setup the Canvas and the Graphics Content
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1250;
cnv.height = 850;

// Global Variables
let circX = 500;
let circSize = 30;
let circRed = 255;
let circGreen = 0;
let img1X = 500;
let img2X = 550;

requestAnimationFrame(loop);
function loop() {
    // Update Variables
    circX -= 3; 
    circSize += 0.5;
    circGreen++;
    img1X = img1X + 5;
    img2X = img2X - 5;

    // DRAW A BACKROUND
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // DRAW A CIRCLE
    ctx.fillStyle = "rgb(" + circRed + "," + circGreen + ", 0)";
    ctx.beginPath();
    ctx.arc(600, circX, circSize, 0, 2 * Math.PI);
    ctx.fill();

    // DRAW IMAGES
    ctx.drawImage(document.getElementById("cloth-cloud-img"), img1X, 210, 115, 70);
    ctx.drawImage(document.getElementById("cloth-cloud-img"), img2X, 190, 110, 60);

    requestAnimationFrame(loop);

    // DRAW RECTANGLE
    ctx.fillStyle = "green";
    ctx.fillRect(0, 500, 2000, 350);
}




