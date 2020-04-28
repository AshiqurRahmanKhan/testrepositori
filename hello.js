console.log("Hello gitHub");

let name = "Ashiqur"

console.log(name);

/* write my Bio(By grouping closely related data )
===============================================
I am Ashiqur Rahman & 25. I'm web developer. I love "javascript".

1. Create a Array
2. Data store
3. Addition
4. Store in into a reference
5. Calling the reference 

*/

// 1. Create Array and 2 data s

let myBio = [];

// 2. Data store
	
	myBio = ["I am Ashiqur Rahman", "& 25.", "I\'m web developer.", "I love \"javascript\"."];


// 3 & 4. Addition and store in a reference

let addMyBio = myBio[0] +" "+ myBio[1]+ " " + myBio[2] +" "+ myBio[3];

console.log(addMyBio);

	        /*write down the memory space and call them
		============================================
		 karim is bad boy
		 karim is a "bad" boy
		*/
		let complimentA ="karim is bad boy";
		console.log(complimentA);

		let complimentB = "Karim is a \"bad\" boy";
		console.log(complimentB);

		/*checkimg the type and explain your answer
		==========================================
			43
			"43"
		*/

		let numberOne = 43;
		console.log(numberOne);
		//numberOne value is a number type data

		let numberTwo = "43";
		console.log(numberTwo);
		//numberTwo value is a string type data

		/* write my bio
		================
		 I am Ashiqur Rahman.I am 25. I'm web developer. I love "javascropt".
		 4 data in 4 memory location or reference
		 Addition 4 data in save another memory reference
		 call the reference 
		*/

		let myName = "I am Ashiqur Rahman. ";
		let age = "I am 25. ";
		let profession = "I'm web developer. "	;	
		let interest = "I love \"javascropt\"."; 

		let myBio = myName + age + profession + interest;

		console.log(myBio);

