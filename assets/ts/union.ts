type ID = number | string;

const id: ID = "g-123";

type Rectangle = {
    height: number;
    width: number;
};
type Circle = {
    radius: number;
};

type Shape = Rectangle | Circle;

function calculateArea(shape: Shape): number {
    if ("radius" in shape) {
        return Math.PI * shape.radius ** 2;
    }
    return shape.height * shape.width;
}

const area: number = calculateArea({ radius: 12 });
console.log(area);
