//first= To the soldiers who tirelessly fight//
//second= To the doctors who give us a new life//
//third= To the teachers who make our future bright//
//fourth= To the farmers who make sure we eat a balanced diet//
//fifth= To the students who work hard infinite//
//sixth= To all the Indians who earned their right//
width='1100';
height='450';
function next() {
	window.location="index.html";
}

function play(){
	var f= document.getElementById("first");
	f.play();
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

	if(keyPressed == '49')
	{
		new_image('soldier.jpg');
		console.log("1");
	}
	if(keyPressed == '50')
	{
		new_image('doctor.jpg');
		console.log("2");
	}
	
	if(keyPressed == '51')
	{
		new_image('teacher.jpg');
		console.log("3");
	}
	if(keyPressed == '52')
	{
		new_image('farmer.jpg');
		console.log("4");
	}
	if(keyPressed == '53')
	{
	    new_image('students.png');
		console.log("5");
	}

	if(keyPressed == '54')
	{
	    new_image('all.jpg');
		console.log("6");
	}

	let timer;
	const ctx = canvas.getContext("2d");
	if(keyPressed == '55')
	{

	
		video.play();

		function draw(){
			ctx.drawImage(video, 0, 0,1100,450);
			requestAnimationFrame(draw);
		1000}


		  timer = setTimeout(() => {
			requestAnimationFrame(draw);
		})
		
		video.onended = (event) => {
			clearTimeout(timer)
			window.location= "second.html";
		};
	
		/*video.onstarted = (event) => {
			
		};*/

		console.log("7");
	}
}