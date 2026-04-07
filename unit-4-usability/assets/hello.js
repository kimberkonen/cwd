let myForm= document.querySelector("#myForm");

myForm.addEventListener("submit", (event) => {
	event.preventDefault();
	
  let q1= Number (this.q1.value);
  let q2= Number (this.q2.value);
  let q3= Number (this.q3.value);
  let q4= Number (this.q4.value);
  let q5= Number (this.q5.value);

//odd items: subtract 1 from user response

  q1 -= 1;
  q3 -= 1;
  q5 -= 1;

//even items; subtract response from 5

  q2 = 5 - q2;
  q4 = 5 - q4;

//add converted responses
	
  let answer = (q1 + q2 + q3 + q4+ q5) * 2.5;


console.log (answer);

this.answer.value = answer;



let inputs = document.querySelectorAll(".score");

  let total = 0;


	console.log("total score", total)

});



