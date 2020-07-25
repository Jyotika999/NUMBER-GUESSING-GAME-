alert("hello there!!")


// first of all we will be crearing a secret number
//  asking the user for guessing
// checking the guessed number

var num = 4;
var guess = prompt("Guess a number");
//alert(guess);
// checking if guess number is right

if(guess == num)
{
	alert("Congratulations!! you have qualified to be an antaryami!!");

}

else if(guess > num)
{
	alert("You guessed too high number , beta ab antaryami ki qualification nhi milegi , dobara ase try kro");
}

else
{
	 alert("You guessed too low number , beta ab antaryami ki qualification nhi milegi , dobara ase try kro");
}