"use strict";
const fetchData = async (apiEndpoint) => {
    const response = await fetch(apiEndpoint);
    return response.json();
};
(async () => {
    const allPosts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    const allComments = await fetchData("https://jsonplaceholder.typicode.com/comments");
    const allPhotos = await fetchData("https://jsonplaceholder.typicode.com/photos");
    console.log(allComments);
    console.log(allPhotos);
    console.log(allPosts);
})();
