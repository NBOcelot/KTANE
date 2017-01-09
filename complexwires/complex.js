
//declare default bomb parameters
var serialBool = 0, parallelBool = 1, batteriesBool = 0; //could omit values
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
console.log(complexWire.length);
console.log(complexWire);

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

        console.log(wireKeyset[i]) //get letter in keyset array
        console.log('Current Letter: ' + currentLetter); //current letter
        console.log(wireKey[currentLetter]); //current letter's full array

        for (let j = 0; j < wireKey[currentLetter].length; j++) { //iterate array in letter
						console.log(wireKey[currentLetter]);
						console.log(wireKey[currentLetter].length);
//          console.log(wireKey[currentLetter][j]); //current array
						console.log(complexWire);
						console.log(wireKey[currentLetter][j]);
//						console.log(arrayCompare(complexWire, wireKey[currentLetter][j]))
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

    console.log(i+' loopvalue');
		console.log(wireInput.length+" LENGTH?");

		console.log(wireInput, wireManual+ " END1");
    if (wireInput[i] !== wireManual[i]) {
			console.log(wireInput, wireManual+ " END2");
			console.log(wireInput[i]+ 'aaaaaaaaaaaa');
			match = false;
      break;
    }//close if

  console.log(match+' end');
  return match;
	}//close for

} //close function

let solve = keyCompare(complexWire);

console.log(solve+" FINAL");

//solve --DONE
function solveCode(solve) { // wrong function format?
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
console.log(solveCode(solve));
if (solveCode(solve) === 1) {console.log("CUT");
}
else console.log("DON'T CUT");

//only allows for one wire in text
//TODO: input multiple wires
