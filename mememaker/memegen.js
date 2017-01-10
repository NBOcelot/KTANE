// Practice learning JS with le_memes

const person = {
	name: ['Nadeem', 'Petro', 'Roman', 'Kevin', 'Ray', 'Paulo', 'Keegan', 'Matan', 'Jason'],
	meme: ['PPAP', 'Rickroll', 'I\'m Poppy', 'No Way Jose', 'Pepe', 'doge', 'o shit waddup', 'Aliens', 'YOU DON\'T SAY', 'ayyyy lmao', 'Boxxy', 'Here comes dat boi']
};

// console.log(callMeme(person.name[getRandName(), person.meme[getRandMeme()]]));

// for (let i = 0; i<5; i++) { // Pick one at random, iterate 5 times
// console.log(callMeme(person.name[getRandName()], person.meme[getRandMeme()]));
// };

console.log(callFav(7)); // Input amount, will pick random name and give that amount of memes

// for (let i = 0; i < person.name.length; i++) { // iterate once per name
//   console.log(callMeme(person.name[i], meme()));
// };

function callMeme(name, meme) { // build output string [format: name + meme both random]
	let output = (`${name}'s favorite meme is ${meme}`); // RNG'd name/meme gets turned into sentence for output
	return output;
}

function callFav(amount) { // build output string [format: random name + specific # of memes]
	let output;
	if (!amount) {
		output = 'Please enter a value';
	}	else {
		output = (`${name()}'s favorite meme(s): ${countMemes(amount)}`); // call function to pass argument
	}
	return output;
}

function countMemes(amount) { // determine amount of memes to add for callFav() and add to output string
	let output = meme(); // Current built string
	let hold; // Declare temp variable to check against current string

	for (let i = 0; i < amount - 1; i++) { // Add one meme per loop up to specified amount
		hold = meme(); // fetch meme to check against current string
		if (checkDupe(output, hold)) { // call dupe check
			output += (`, ${hold}`); // if pass, add hold to current
		} else {
      // console.log('Dupe Detected');
			i--;
		} //
	}
	return output;
}

function checkDupe(current, incoming) {
	if (current.match(incoming)) {
		return false;
	}
	return true;
}

function getRandName() { // pick random name from array
	const length = person.name.length - 1;
	const result = Math.floor(Math.random() * (length + 1)); // turn 0 to 1 RNG into integers based on # of entires in array
	return result;
}

function getRandMeme() { // pick random meme from array
	const length = person.meme.length - 1;
	const result = Math.floor(Math.random() * (length + 1));
	return result;
}

function name() { // get fresh random name
	return person.name[getRandName()];
}

function meme() { // get fresh random meme
	return person.meme[getRandMeme()];
}

//TODO merge both random functions
