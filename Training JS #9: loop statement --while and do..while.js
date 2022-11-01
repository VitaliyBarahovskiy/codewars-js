/*Task
Complete function padIt, which accepts 2 parameters:

1.str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
2.n: a number indicating how many times to pad the string.*/

function padIt(str,n){
  while(n>0){
    if(n%2 ===0) {
      str = str + '*';
    } else {
      str = '*' + str;
    }
    n --;
  }
  return str;
}
