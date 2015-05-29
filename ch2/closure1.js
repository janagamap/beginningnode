function outerFunction(arg) {
  var variableInOuterFunction = arg;

  function bar() {
    console.log(variableInOuterFunction); // Access a varialbe from the outer scope
  }

  // call the local function to demonstarte that it has to arg.
  bar();
}

outerFunction('hello closure!');    //logs hello closure!
