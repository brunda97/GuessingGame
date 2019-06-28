var colors=generateColors(6);
/*[
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(255, 0, 255)",
"rgb(0, 255, 0)",
"rgb(0, 0, 255)",
"rgb(255, 255, 255)"
];*/
var h1=document.querySelector("#h");
var reload=document.querySelector("#reload");
var square=document.querySelectorAll(".square");
var random=colors[pickColor(6)];
var easyBtn=document.querySelector("#easy");
var hardBtn=document.querySelector("#hard");
var messageDisplay=document.querySelector("#solution")

document.querySelector("#rgb").textContent=random;
hardBtn.classList.add("selected");
for (var i=0;i<square.length;i++){

	square[i].style.backgroundColor=colors[i];
}
easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors=generateColors(3);
	random=colors[pickColor(3)];
	document.querySelector("#rgb").textContent=random;
	for (var i=0;i<square.length;i++){
		if (colors[i]){
			square[i].style.backgroundColor=colors[i];
		}
		else
		{
			square[i].style.display="none";
		}
		
	}
	//setColors(3);
});
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colors=generateColors(6);
	random=colors[pickColor(6)];
	document.querySelector("#rgb").textContent=random;
	for (var i=0;i<square.length;i++){
			square[i].style.backgroundColor=colors[i];
			square[i].style.display="block";
		
		
	}
});




	for (var i=0;i<square.length;i++){
		square[i].addEventListener("click",function(){
			
			if (random===this.style.backgroundColor){
				
				h1.style.backgroundColor=this.style.backgroundColor;
				messageDisplay.textContent="Correct! ";
				changeColor();
				reload.textContent="Play Again?";
			}
			else{
				this.style.backgroundColor= "#232323";
				messageDisplay.textContent="Try Again";
			}
			
		});
		
	}
reload.addEventListener("click",function(){
	window.location.reload();
});

function changeColor() {
	
	for (var i=0;i<square.length;i++){

		square[i].style.backgroundColor=random;
	}
}
function pickColor(n){
	return Math.floor(Math.random()*n);
	
}
function generateColors(n){
	var arr=[];
	for(var i=0;i<n;i++){
		arr.push(randomColors());
	}
	
	return arr;
}
function randomColors(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	var value="rgb("+r+", "+g+", "+b+")";
	return value;
}