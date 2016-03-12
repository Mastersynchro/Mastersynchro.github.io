//Vive les tutos !

		
var canvas = document.getElementById('canvas'); 
var ctx = canvas.getContext('2d'); 
ctx.strokeStyle = '#28d244'; 
ctx.lineWidth = 17; 
ctx.lineCap = 'round'; 
ctx.shadowBlur = 12	;
ctx.shadowColor = 'black'


function degToRad(degree) { 
	var factor = Math.PI/180; 
	return degree*factor; 
} 

function renderTime() {
	var now = new Date(); 
	var today = now.toDateString(); 
	var time = now.toLocaleTimeString(); 
	var hours = now.getHours(); 
	var minutes = now.getMinutes(); 
	var seconds = now.getSeconds(); 
	var milliseconds = now.getMilliseconds(); 
	var newSeconds = seconds+ (milliseconds/1000);
			
	// Background
	ctx.fillStyle = '#242424';
	ctx.fillRect(0,0,500,500);
	  		
	// Hours
	ctx.beginPath(); 
	ctx.arc(250, 250, 200, degToRad(270), degToRad((hours*30)-90)); 
	ctx.stroke(); 
	   		
	// Minutes
  	ctx.beginPath(); 
  	ctx.arc(250, 250, 170, degToRad(270), degToRad((minutes*6)-90)); 
  	ctx.stroke(); 
    	
  	// Seconds
   	ctx.beginPath();
   	ctx.arc(250, 250, 140, degToRad(270), degToRad((newSeconds*6)-90)); 
   	ctx.stroke(); 

   	// Date
   	ctx.font = "25px Arial bold";
   	ctx.fillStyle = '#28d1fa'; 
   	ctx.fillText(today, 155, 250); 

   	// Time
   	ctx.font = "15px Arial"; 
   	ctx.fillStyle = '#28d1fa'; 
   	ctx.fillText(time, 200, 280); 

} 
setInterval(renderTime, 40);