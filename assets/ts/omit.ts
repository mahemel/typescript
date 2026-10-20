type UserInfo = {
    id: number;
    name: string;
    email: string;
};

const users: UserInfo[] = [];
let lastId: number = 0;
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

const addUser = (user: Omit<UserInfo, "id">): UserInfo => {
    const newUser: UserInfo = {
        id: ++lastId,
        ...user,
    };

    users.push(newUser);

    return newUser;
};

console.log(addUser({ name: "mahbub", email: "mahnbub@email" }));
console.log(addUser({ name: "hasan", email: "hasan@email" }));
