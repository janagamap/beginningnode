function outerFunction(arg){
  var variableInOuterFunction = arg;
  return function(){
    console.log(variableInOuterFunction);
  }
}

var innerFunction = outerFunction('hello closure!');

//Note the outerFunction has returned.
innerFunction(); //logs hello closure!



function sum(arg1, arg2){
  var sum = 0;
  return function(){
    sum = arg1 + arg2;
    console.log(sum);
  }
}

var abc  = sum(2, 4);
abc();
