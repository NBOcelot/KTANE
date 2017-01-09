
//declare default bomb parameters
var serialBool = 0, parallelBool = 1, batteriesBool = 1; //could omit values
/*
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
*/
//--------------------------------------

//put input into array --How do you pull from file?
var complexWire = [1, 1, 1, 0]; // light, star, red, blue,
//debug to check input
console.log("Light: "+complexWire[0]);
console.log("Star: "+complexWire[1]);
console.log("Red: "+complexWire[2]);
console.log("Blue: "+complexWire[3]);

//find solve code

//compare arrays Function

const wireKey = {
	C: [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 0, 0]],
	D: [[1, 1, 1, 1], [0, 1, 0, 1], [1, 0, 0, 0]],
  S: [[0, 0, 0, 1], [0, 0, 1, 1], [0, 0, 1, 0]],
  P: [[0, 1, 1, 1], [1, 1, 0, 1], [1, 0, 0, 1], [1, 0, 1, 1]],
  B: [[1, 1, 1, 0], [1, 1, 0, 0], [1, 0, 1, 0]],
}

//console.log(Object.keys(wireKey)); //keyset array

//console.log('Match: ' + keyCompare(complexWire));

const wireKeyset = Object.keys(wireKey); //keyset array

function keyCompare(complexWire){ //find letter that matches manual

  let keymatch = false; //default match to false
  let currentLetter;

    for (let i = 0; i < wireKeyset.length; i++) { //iterate letter

          if (keymatch) break;
          currentLetter = wireKeyset[i];

        for (let j = 0; j < wireKey[currentLetter].length; j++) { //iterate array in letter

          if (arrayCompare(complexWire, wireKey[currentLetter][j])) {
            keymatch = true;
            break;}

        } //close for j

    } //close for i

//    console.log(currentLetter); //current letter

    return currentLetter;

  } //close function


function arrayCompare(wireInput, wireManual) { //Compares input wire to manual

// console.log wireInput.length
  let match = true; //set default

  if (wireInput.length !== wireManual.length) {
    return 'No Way Jose';
  }

  for (let i = 0; i < wireInput.length; i++) {

    if (wireInput[i] !== wireManual[i]) {

			match = false;
      break;
    }//close if

	}//close for
	return match;
} //close function

let solve = keyCompare(complexWire);

console.log(solve);

//solve
function solveCode(solve) {// Check for Cut based on bomb parameters
	if (solve === 'C') {return cut = 1;
	}
	if (solve === 'D') {return cut = 0;
	}
	if (solve === 'S' && serialBool === 1) {return cut = 1;
	}
	if (solve === 'P' && parallelBool === 1) {return cut = 1;
	}
	if (solve === 'B' && batteriesBool === 1) {return cut = 1;
	}
	else return cut = 0; //not needed but catches the parameter = 0 cases
}
//print result cut yes/no
if (solveCode(solve) === 1) {console.log("CUT");
}
else console.log("DON'T CUT");

//only allows for one wire in text
//TODO: input multiple wires
