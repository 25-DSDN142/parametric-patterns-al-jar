//your parameter variables go here!
// My variables----------------------------------------------
let midX = 100;
let midY = 100;


angleMode(DEGREES);


function setup_wallpaper(pWallpaper) {
  // pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print
  // pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}
function wallpaper_background() {
  // background(240, 255, 240); //light honeydew green colour
  background(63, 64, 99); //dark grey blue

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
//colours
let purple = color(194, 130, 237);
let green = color(209, 245, 159);
let yellow = color(240, 240, 170);


//guildines
stroke(255);
strokeWeight(0.2);
line(0,0,200,200);//up to down
line(0,200,200,0);//down to up
// line(midX,0,midX,200);//vertical
// line(0,midY,200,midY);//horizontal


let size = 200;
// star();


// fill(green);
noFill();
strokeWeight(4);



stroke(purple)
ellipse(midX,midY,size);

for (let y = 0; y < 11; y++){
  // line(y - midY, midY - y, midX, y);
  line(midX,midY,  20*y, 0);
  line(midX,midY, 0, 20*y);

  line(midX,midY,20*y,200);
  line(midX,midY,200,20*y);
}

stroke(green)
// line(midX,midY,midX,midY*2);
// line(midX-midX,midY-midY,midX,midY);
// line(midX+midX,midY-midY,midX,midY);



strokeWeight(1)
}

function star(){
    //star
  beginShape();
  //top
  vertex(midX,midY-80);//point
  vertex(midX*2-(midX/4)*3,80);
  
  //right
  vertex(midX*2-20,midY-midY/10);//point
  vertex(140,125);

  //bottom right
  vertex(midX*2-midX/2,midY*2-20);//point
  vertex(midX,145);

  //bottom left
  vertex(midX/2,midY*2-20);//point
  vertex(60,125);
  
  //left
  vertex(midX-midX+20,midY-midY/10);//point
  vertex(75,80);
  
  endShape();

}
