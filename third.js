function play(){
	var g= document.getElementById("third");
	g.play();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed == '79') {
    document.getElementById("images").src = "happy.png";
}

}