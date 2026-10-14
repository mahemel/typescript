function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
console.log(divide(4, 2));
console.log(divide(10, 2));
