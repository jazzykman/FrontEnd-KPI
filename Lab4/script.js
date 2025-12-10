let firstId = "el8";
let secondSelector = "#el9";

let firstState = 0;
let secondState = 0;

document.getElementById(firstId).addEventListener("click", function () {
    firstState = (firstState + 1) % 3;
    if (firstState === 1) {
        this.style.backgroundColor = "lightblue";
        this.style.color = "darkblue";
    } else if (firstState === 2) {
        this.style.backgroundColor = "lightpink";
        this.style.color = "crimson";
    } else {
        this.style.backgroundColor = "white";
        this.style.color = "black";
    }
});

document.querySelector(secondSelector).addEventListener("click", function () {
    secondState = (secondState + 1) % 3;
    if (secondState === 1) {
        this.style.backgroundColor = "lightgreen";
        this.style.color = "green";
    } else if (secondState === 2) {
        this.style.backgroundColor = "khaki";
        this.style.color = "brown";
    } else {
        this.style.backgroundColor = "white";
        this.style.color = "black";
    }
});

function addImage() {
    if (!document.querySelector("#imageContainer img")) {
        let img = document.createElement("img");
        img.src = "paris.jpg";
        img.width = 400;
        document.getElementById("imageContainer").appendChild(img);
    }
}

function increaseImage() {
    let img = document.querySelector("#imageContainer img");
    if (img) img.width += 50;
}

function decreaseImage() {
    let img = document.querySelector("#imageContainer img");
    if (img && img.width > 50) img.width -= 50;
}

function removeImage() {
    let img = document.querySelector("#imageContainer img");
    if (img) img.remove();
}
