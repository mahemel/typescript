enum Tcolors {
    Red = "red",
    Green = "green",
    Yellow = "yellow",
}
type Tshirt = {
    size: number;
    color: Tcolors;
};

const t1: Tshirt = {
    size: 38,
    color: Tcolors.Red,
};

const t2: Tshirt = {
    size: 42,
    color: Tcolors.Green,
};
const t3: Tshirt = {
    size: 40,
    color: Tcolors.Yellow,
};
