const input = document.getElementById("email") as HTMLInputElement;
const button = document.getElementById("submit") as HTMLButtonElement;

button.addEventListener("click", () => {
    console.log(`Subscription complete for ${input.value}`);
});
