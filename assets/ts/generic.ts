const fruit: string[] = ["apple", "banana", "orange"];
const rolls: number[] = [1, 2, 3, 4, 5];

const getFirstElm = <T>(arr: T[]): T => {
    return arr[0];
};

console.log(getFirstElm(fruit));
console.log(getFirstElm(rolls));
