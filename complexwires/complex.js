const wireKey = { // Wire Answer Key
	C: [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 0, 0]],
	D: [[1, 1, 1, 1], [0, 1, 0, 1], [1, 0, 0, 0]],
	S: [[0, 0, 0, 1], [0, 0, 1, 1], [0, 0, 1, 0]],
	P: [[0, 1, 1, 1], [1, 1, 0, 1], [1, 0, 0, 1], [1, 0, 1, 1]],
	B: [[1, 1, 1, 0], [1, 1, 0, 0], [1, 0, 1, 0]]
};

const data = require('./parameters.json'); // get case parameters from file

let { serial, parallel, batteries } = data; // set case parameters
// let parallel = data.parallel; // OUTDATED
// let batteries = data.batteries;

for (let i = 2; i< process.argv.length; i++) {
	const rawWire = process.argv[i].split(''); // get input as string array
	const complexWire = rawWire.map(function(temp) { // turn into number array
		return parseInt(temp, 10);
	});

//--------------------------------------

// console.log('Light: ' + complexWire[0]); // Display Booleans
// console.log('Star:  ' + complexWire[1]);
// console.log('Red:   ' + complexWire[2]);
// console.log('Blue:  ' + complexWire[3]);

const wireKeyset = Object.keys(wireKey); // keyset array

function keyCompare(complexWire) { // find letter that matches manual

	let keymatch = false; // default match to false
	let currentLetter;

		for (let i = 0; i < wireKeyset.length; i++) { // iterate letter

      if (keymatch) break;
      currentLetter = wireKeyset[i];
        for (let j = 0; j < wireKey[currentLetter].length; j++) { //iterate array in letter

          if (arrayCompare(complexWire, wireKey[currentLetter][j])) {
            keymatch = true;
						break;
					}
				} //close for j
		} //close for i
    return currentLetter;
  } // close function

function arrayCompare(wireInput, wireManual) { // Compares input wire to manual

// console.log wireInput.length
  let match = true; // set default

  if (wireInput.length !== wireManual.length) {
    return 'No Way Jose';
  }

  for (let i = 0; i < wireInput.length; i++) {

    if (wireInput[i] !== wireManual[i]) {

			match = false;
      break;
    }// close if

	}// close for
	return match;
} // close function

let solve = keyCompare(complexWire);
//console.log(solve); // Show solved letter
// solve
function solveCode(solve) {// Check for Cut based on bomb parameters
	if (solve === 'C') return true;
	if (solve === 'D') return false;
	if (solve === 'S' && serial) return true;
	if (solve === 'P' && parallel) return true;
	if (solve === 'B' && batteries) return true;
	return false; // catches failed bomb papameters
}
if (solveCode(solve)) console.log('CUT'); // Print result
else console.log('DON\'T CUT');
} // CLOSE top for
