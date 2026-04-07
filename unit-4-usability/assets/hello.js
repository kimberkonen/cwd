let myForm= document.querySelector("#myForm");

myForm.addEventListener("submit", (event) => {
	event.preventDefault();
	
  let q1= Number (this.q1.value);
  let q2= Number (this.q2.value);
  let q3= Number (this.q3.value);
  let q4= Number (this.q4.value);
  let q5= Number (this.q5.value);

  console.log(q1);
	
  let answer = (q1 + q2 + q3 + q4+ q5);
this.answer.value= answer;
console.log (answer);


let inputs = document.querySelectorAll(".score");

  let total = 0;


	console.log("total score", total)

});



