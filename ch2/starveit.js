// utility funcion
function fibonacci(n) {
    if (n < 2)
        return 1;
    else
        return fibonacci(n - 2) + fibonacci(n - 1);
}

// setup the timer
console.log('timer1');
console.time('timer1');
setTimeout(function () {
    console.timeEnd('timer1'); // Prints much more than 1000ms
}, 1000)

// Start the long running operation
fibonacci(44);
console.log('timer2');
console.time('timer2');
setTimeout(function () {
    console.timeEnd('timer2'); // Prints much more than 1000ms
}, 1000)
