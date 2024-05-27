//your JS code here. If required.
 // get the element where the time is to be displayed
	let timerDisplay=document.getElementById("timer");

//set the current date and time 
let currentDate=new Date();

//update the time in every second 
setInterval(
	function(){
		//get the current date and time 
		currentDate=new Date();

		//update the timer Display 
		timerDisplay.innerHTML=currentDate.tolocaleString();
		
	},1000
);