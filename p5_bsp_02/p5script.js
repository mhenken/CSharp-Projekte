var ellipseRadius = 222; //Veränderung der Größe der Ellipse

function setup() {
    createCanvas(800, 600); //Größe des Arbeitsfensters
    colorMode(RGB, 111); //
    background(8); //
    smooth(); //ist wichtig für bewegung auf dem Bildschirm
    frameRate(100); //Bilder(oder Kreise) pro Sekunde 
}

function draw() {
    ellipse(mouseX, mouseY, ellipseRadius, ellipseRadius);
}