//declare default bomb parameters
var serialBool = 0, parallelBool = 0, batteriesBool = 0; //could omit values

//input method 1 entire serial number or last digit - if even, set true;
//input method 2 "yes/no" --needs input function
if (charAt(serial.length) % === 0) {
	serialBool = 1;
}
//input hasParallel
if (input(hasParallel) { //placeholder FIX THIS --needs input function
	parallelBool = 1;
}
//input # of batteries --true if 2+
var batteries = input(batteries); //placeholder FIX THIS --needs input function
if (batteries > 1) {batteriesBool = 1);
}

//--------------------------------------

//put input into array --How do you pull from file?
var complexWire = [0, 0, 0, 0]; // light, star, red, blue,

//debug to check input
console.log("Light: "+complexWire[0]);
console.log("Star: "+complexWire[1]);
console.log("Red: "+complexWire[2]);
console.log("Blue: "+complexWire[3]);

//find solve code --DONE (there's probably a cleaner way to do this)
var solve;
if (complexWire === [0, 0, 0, 0]) {solve = C;}
if (complexWire === [0, 0, 0, 1]) {solve = S;}
if (complexWire === [0, 0, 1, 1]) {solve = S;}
if (complexWire === [0, 1, 1, 1]) {solve = P;}
if (complexWire === [1, 1, 1, 1]) {solve = D;}
if (complexWire === [0, 1, 0, 1]) {solve = D;}
if (complexWire === [1, 1, 0, 1]) {solve = P;}
if (complexWire === [1, 0, 0, 1]) {solve = P;}
if (complexWire === [0, 0, 1, 0]) {solve = S;}
if (complexWire === [0, 1, 1, 0]) {solve = C;}
if (complexWire === [1, 1, 1, 0]) {solve = B;}
if (complexWire === [0, 1, 0, 0]) {solve = C;}
if (complexWire === [1, 1, 0, 0]) {solve = B;}
if (complexWire === [1, 0, 0, 0]) {solve = D;}
if (complexWire === [1, 0, 1, 0]) {solve = B;}
if (complexWire === [1, 0, 1, 1]) {solve = P;}

//solve --DONE
function solveCode(solve) { // wrong function format?
	if (solve === C) {return cut = 1;
	}
	if (solve === D) {return cut = 0;
	}
	if (solve === S && serialBool === 1) {return cut = 1;
	}
	if (solve === P && parallelBool ==== 1) {return cut = 1;
	}
	if (solve === B && batteriesBool ==== 1) {return cut = 1;
	}
	else return cut = 0; //not needed but catches the parameter = 0 cases
}
//print result cut yes/no
if (solve.solveCode === 1 {console.log("CUT");
}
else console.log("DON'T CUT");
