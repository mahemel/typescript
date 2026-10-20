type Point = readonly [number, number];

const point1: Point = [10, 20];
const point2: Point = [30, 40];

// point1.push(30); // This would cause a compile-time error

console.log(point1); // Output: [10, 20]
console.log(point2); // Output: [30, 40]
