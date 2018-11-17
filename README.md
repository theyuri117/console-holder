# console-holder
nodejs module that helps to hold a string in console alwais in the end of output

## Instalation
npm i console-holder

## Usage
const l = require('console-holder'); 

l('usual_output'); // put your usual output here

l.hold('sting_you_want_to_hold');

l.stop(); 			     // if you no more want to hold it

## Credits
This module is based on another nodejs module ansi-escapes, so thx them.