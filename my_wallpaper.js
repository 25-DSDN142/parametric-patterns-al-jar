//your parameter variables go here!
// My variables----------------------------------------------
let midX = 100;
let midY = 100;


angleMode(DEGREES);


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  // pWallpaper.output_mode(GRID_WALLPAPER);
  
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
  noFill();
  
  let purple = color(194, 130, 237);
  let green = color(209, 245, 159);
  let yellow = color(240, 240, 170);
  //colours


//guildines
stroke(yellow);
strokeWeight(0.2);
line(0,0,200,200);//up to down
line(0,200,200,0);//down to up


let size = 200;



strokeWeight(2);
ellipse(midX,midY,size);

starBurst(3);

stroke(green)
strokeWeight(1)
}

function starBurst(starBu){
  // let starBu = 8;
  let around = 180/starBu;

  strokeWeight(4);
push();
  translate(midX,midY);
  for (let y = 0; y < starBu; y++){
    rotate(around);
    line(-midX+25, -midY+25, midX-25, midY-25);

  stroke(255);
  strokeWeight(2);
  beginShape()
  
  push();
  curveVertex(-midX+25, -midY+25);
  rotate(around);
  curveVertex(-midX+25, -midY+25);
pop();

  endShape(CLOSE);
 
  }

pop();



}

