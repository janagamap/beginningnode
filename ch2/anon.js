var foo1 = function namedFunction(argument) { //no use of name, just wasted char
  console.log('foo1');
}
foo1(); //foo1

var foo2 = function(){ //no function name, anonymouse function.
  console.log('foo2');
}
foo2(); //foo2
