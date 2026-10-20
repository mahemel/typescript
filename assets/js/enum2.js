"use strict";
var Status;
(function (Status) {
    Status[Status["draft"] = 0] = "draft";
    Status[Status["private"] = 1] = "private";
    Status[Status["public"] = 2] = "public";
})(Status || (Status = {}));
const article1 = {
    id: 1,
    title: "Lorem ipsum dolor",
    status: Status.draft,
};
const article2 = {
    id: 2,
    title: "Ding dong dong",
    status: Status.public,
};
console.log(article2);
