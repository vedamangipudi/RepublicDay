function play(){
	var d= document.getElementById("second");
	d.play();
}

var canvas=new fabric.Canvas(myCanvas);

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
		block_image_object=Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
			left:block_x
		})
		canvas.add(block_image_object);
		
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed == '56') {
    new_image('first.jpg');
    console.log("8");
    block_x = 10;
    console.log(block_x);
}

if(keyPressed == '57') {
    new_image('second.jpg');
    console.log("9");
    block_x = 160;
    console.log(block_x);
}

if(keyPressed == '48') {
    new_image('third.jpg');
    console.log("8");
    block_x = 360;
    console.log(block_x);
}

if(keyPressed == '81') {
    new_image('fourth.jpg');
    console.log("q");
    block_x = 520;
    console.log(block_x);
}

if(keyPressed == '87') {
    new_image('fifth.jpg');
    console.log("w");
    block_x = 722;
    console.log(block_x);
}

if(keyPressed == '69') {
    new_image('sixth.jpg');
    console.log("e");
    block_x = 920;
    console.log(block_x);
}

if(keyPressed == '82') {
    new_image('map.jfif');
    console.log("r");
    block_x = 360;
    console.log(block_x);
}

if(keyPressed == '84') {
    new_image('dav.png');
    console.log("t");
    block_x = 20;
    block_y = 20;
    console.log(block_x);
}

if(keyPressed == '89') {
    new_image('teach.jpg');
    console.log("y");
    block_x = 20;
    block_y = 20;
    console.log(block_x);
}

if(keyPressed == '85') {
    new_image('hoisting.jpg');
    console.log("u");
    block_x = 20;
    block_y = 10;
    console.log(block_x);
}

if(keyPressed == '73') {
    window.location = "third.html";
}

}