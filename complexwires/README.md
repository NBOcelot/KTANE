Instructions

*Step 1*:

Set parameters.json according to bomb guide:

Batteries true if 2 or more <br/>
Serial true if last digit is even <br/>
Parallel true if case has a parallel port <br/>

*Step 2*:

_INPUT_: Node [js path] [input separated by spaces for each wire]

example: Node .\complex.js 1011 1110 0010

one wire is represented by a string of 4 digits where:

Sequence: Light, Star, Red, Blue

First digit = 1 if the light is lit <br/>
Second digit = 1 if star is present <br/>
Third digit = 1 if wire has Blue color <br/>
Fourth digit = 1 if wire has Red color <br/>

otherwise, digit is 0
