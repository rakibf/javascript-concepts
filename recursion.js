// When a function calls itself from its body this is called a recursion

/* function sum(n) {
    // stoping condition
    if (n === 1) {
        return 1;
    }

    return n + sum(n - 1);
}

console.log(sum(5));
 */

/* let n = 5;
let total = 0;

for (let i = 1; i <= n; i++) {
    total += i;
}
console.log(total);
 */

// fibonacci using for loop
let fiboSeries = [0, 1];

for (let i = 2; i < 10; i++) {
    fiboSeries[i] = fiboSeries[i - 2] + fiboSeries[i - 1];
}

// console.log(fiboSeries);

// print fibonacci number in recursion way

function fibo(n) {
    if (n < 2) {
        return n;
    }

    return fibo(n - 2) + fibo(n - 1);
}

for (let n = 0; n < 10; n++) {
    console.log(fibo(n));
}