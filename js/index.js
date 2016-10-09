var userTemp;
var fTemp;

document.getElementById("submit").onclick = function() {
	userTemp = parseInt(document.getElementById("celsiusTemp").value);
	fTemp = userTemp * 1.8 + 32;
	document.getElementById("displayTemp").innerHTML = fTemp+" &#8457";

if (userTemp <= 5) {
		document.body.style.backgroundImage = "url(images/winter.jpg)";
	} 

	else if (userTemp >= 6 && userTemp <= 14) {
		document.body.style.backgroundImage = "url(images/spring.jpg)";
	} 

	else if (userTemp >= 21 && userTemp <= 40) {
		document.body.style.backgroundImage = "url(images/summer.jpg)";
	}  

	else if (userTemp >= 15 && userTemp <= 20) {
		document.body.style.backgroundImage = "url(images/fall.jpg)";
	}  

	else  {
		document.body.style.backgroundImage = "url(images/eggs.jpg)";
	}

}