"use strict";
const orders = new Map();
const addOrder = (juice) => {
    const quantity = (orders.get(juice) || 0) + 1;
    orders.set(juice, quantity);
};
addOrder("Mango");
addOrder("Mango");
addOrder("Banana");
addOrder("Banana");
addOrder("Apple");
addOrder("Mango");
addOrder("Banana");
for (const [juice, quantity] of orders) {
    console.log(`${juice}: ${quantity}`);
}
