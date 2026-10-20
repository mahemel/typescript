const user: { id: number; name: string } = {
    id: 16,
    name: "John",
};

type User = {
    id: number;
    name: string;
};

const newUser: User = {
    id: 17,
    name: "Doe",
};

interface UserType2 {
    id: number;
    name: string;
}

const newUser2: UserType2 = {
    id: 18,
    name: "Smith",
};
