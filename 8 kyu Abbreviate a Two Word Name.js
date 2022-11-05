/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */

function abbrevName(name){

    var anal = name.split(" ");
    var abbrev = (anal[0].charAt(0) + "." + anal[1].charAt(0)).toUpperCase();
    return abbrev;

}
