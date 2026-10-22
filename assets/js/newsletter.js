"use strict";
const input = document.getElementById("email");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
    console.log(`Subscription complete for ${input.value}`);
});
