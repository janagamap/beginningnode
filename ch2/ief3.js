var foo = 123;

if(true){
  (function () { //create a new scope
    var foo = 546;
  })();
}
console.log(foo); //123;
