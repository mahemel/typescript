"use strict";
const users = [];
let lastId = 0;
// type UserInfo = {
//     id?: number;
//     name: string;
//     email: string;
// };
// const addUser = (user: UserInfo): UserInfo => {
//     const newUser: UserInfo = {
//         id: ++lastId,
//         ...user,
//     };
//     users.push(newUser);
//     return newUser;
// };
const addUser = (user) => {
    const newUser = {
        id: ++lastId,
        ...user,
    };
    users.push(newUser);
    return newUser;
};
console.log(addUser({ name: "mahbub", email: "mahnbub@email" }));
console.log(addUser({ name: "hasan", email: "hasan@email" }));
