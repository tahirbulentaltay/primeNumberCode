let statement = document.querySelector("#statement");
let prime = document.querySelector("#prime");
let notPrime = document.querySelector("#notPrime");
let primeNumbers = document.querySelector("#primeNumbers");
let nonPrimeNumbers = document.querySelector("#nonPrimeNumbers");
let sumPrimeNumber = 0;
let sumNotPrimeNumber = 0;
let x = 25;

for (let i = 2; i <= x; i++) {
    let result = true;

    for (let j = 2; j <= Math.floor(i / 2); j++) {

        if (i % j == 0) {
            document.write(`--------------------------------<b>${i}</b> not prime number. <br>`)
            localStorage.setItem("nonPrime", i);
            console.log(i + " not prime number.");
            result = false;
            sumNotPrimeNumber = sumNotPrimeNumber + i;
            console.log("Sum of the non prime numbers: " + sumNotPrimeNumber);
            break;
        }
    }
    if (result) {
        document.write(`<b>${i}</b> prime number. <br>`);
        localStorage.setItem("Prime", i);
        console.log(i + " prime number.");
        sumPrimeNumber = sumPrimeNumber + i
        console.log("Sum of the prime numbers: " + sumPrimeNumber);
    }
}
statement.innerHTML = `The prime and non prime numbers between <b>2</b> and <b>${x}</b> and sum of them.`
prime.innerHTML = `Sum of the prime numbers: <b>${sumPrimeNumber}</b>`;
notPrime.innerHTML = `Sum of the non prime numbers: <b>${sumNotPrimeNumber}</b>`;