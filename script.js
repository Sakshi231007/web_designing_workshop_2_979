function findFactorial() {
    let n = parseInt(document.getElementById("num").value);
    let result = document.getElementById("result");

    if (isNaN(n)) {
        result.innerHTML = "Please enter a valid number.";
        return;
    }

    if (n < 0) {
        result.innerHTML = "Factorial is not defined for negative numbers.";
        return;
    }

    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    result.innerHTML = "Factorial of " + n + " is " + fact;
}