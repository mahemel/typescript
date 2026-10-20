"use strict";
const id = "g-123";
function calculateArea(shape) {
    if ("radius" in shape) {
        return Math.PI * shape.radius ** 2;
    }
    return shape.height * shape.width;
}
const area = calculateArea({ radius: 12 });
console.log(area);
