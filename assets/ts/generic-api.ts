type Posts = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type Comments = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

type Photos = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

const fetchData = async <T>(apiEndpoint: string): Promise<T> => {
    const response = await fetch(apiEndpoint);
    return response.json() as Promise<T>;
};

(async () => {
    const allPosts = await fetchData<Posts[]>(
        "https://jsonplaceholder.typicode.com/posts",
    );
    const allComments = await fetchData<Comments[]>(
        "https://jsonplaceholder.typicode.com/comments",
    );
    const allPhotos = await fetchData<Photos[]>(
        "https://jsonplaceholder.typicode.com/photos",
    );

    console.log(allComments);
    console.log(allPhotos);
    console.log(allPosts);
})();
