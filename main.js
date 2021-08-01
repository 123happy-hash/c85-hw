canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

greencar_height=100;
greencar_width=75;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_xPos=5;
greencar_yPos=255;

function add() {
	background_imgTag=new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src=background_image;

    greencar_imgTag=new Image();
    greencar_imgTag.onload=uploadgreencar;
    greencar_imgTag.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_xPos, greencar_yPos, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
    if(greencar_yPos >= 0){
        greencar_yPos = greencar_yPos - 10;
        uploadBackground();
        uploadgreencar();
    }
}
function down(){
    if(greencar_yPos <= 630){
        greencar_yPos = greencar_yPos + 10;
        uploadBackground();
        uploadgreencar();
    }
}
function left(){
    if(greencar_xPos >=0){
        greencar_xPos = greencar_xPos - 10;
        uploadBackground();
        uploadgreencar();
    }
}
function right(){
    if(greencar_xPos <=750){
        greencar_xPos = greencar_xPos + 10;
        uploadBackground();
        uploadgreencar();
    }
}