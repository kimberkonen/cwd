let myForm= document.querySelector("#myForm");

myForm.addEventListener("submit", function (event) => {
	event.preventDefault ();
	
	
let inputs = document.querySelectorAll(".score");

  let total = 0;

  inputs.forEach(input => {
    let value = parseFloat(input.value);
    if (!isNaN(value)) {
      total += value;
    }
  });
	console.log("total score", total)

});



