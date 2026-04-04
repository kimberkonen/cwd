let myForm= document.querySelector("#myForm");

myForm.addEventListener("submit", (event) => {
	event.preventDefault ();
	
	// console.log ("hello");

	console.log(this.msg.value)

});



