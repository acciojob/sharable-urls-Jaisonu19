// your code here
function updateurl() {
	//get the value from input fields
	var name=document.getElementById("name").value;
	var year=document.getElementById("year").value;
	//udate the url with the appropriate query string.
	var urlString="https://localhost:8080/?name="+name+"&year="+year;
	// Update the text in the h3 element
	document.getElementById("url").textContent = urlString;
	
}