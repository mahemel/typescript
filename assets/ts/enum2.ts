enum Status {
    draft, //1 by default
    private, // 2 based on prev value
    public, // 3 based on prev value
}

type Article = {
    id: number;
    title: string;
    status: Status;
};

const article1: Article = {
    id: 1,
    title: "Lorem ipsum dolor",
    status: Status.draft,
};

const article2: Article = {
    id: 2,
    title: "Ding dong dong",
    status: Status.public,
};

console.log(article2);
