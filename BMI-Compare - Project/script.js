var massMark=50;
var massjohn=65;
var heightMark=1.60;
var heightJohn=1.72;

var BMIMark= massMark/(heightMark*heightMark);
var BMIJohn= massjohn/(heightJohn*heightJohn);
console.log(BMIMark, BMIJohn)


const JohnHigherBmi= BMIJohn<BMIMark === true;



console.log(`is Mark's BMI's  higher than  John's BMI ??? The answer is ${JohnHigherBmi}
because Mark's BMI's is  ${BMIMark}, and John's is BMI ${BMIJohn} `)