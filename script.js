//your JS code here. If required.

let displayTime = document.getElementById("timer");
let currentTime = new Date();
setInterval(
	function(){
		currentTime = new Date();
		displayTime.innerHTML = currentTime.toLocaleString();
	}, 1000
);