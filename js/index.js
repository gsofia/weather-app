var userTemp;
var fTemp;

document.getElementById("submit").onclick = function() {
	userTemp = parseInt(document.getElementById("celsiusTemp").value);
	fTemp = userTemp * 1.8 + 32;
	document.getElementById("displayTemp").innerHTML = fTemp+" &#8457";

if (userTemp <= 5) {
		document.body.style.backgroundColor = "#a4badd";
	} 

	else if (userTemp >= 6 && userTemp <= 14) {
		document.body.style.backgroundColor = "#efa7d0";
	} 

	else if (userTemp >= 21 && userTemp <= 40) {
		document.body.style.backgroundColor = "#59ce4c";
	}  

	else if (userTemp >= 15 && userTemp <= 20) {
		document.body.style.backgroundColor = "#ea7f15";
	}  

	else  {
		document.body.style.backgroundColor = "#ff0202";
	}

}