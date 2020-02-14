const topLeft = document.querySelector("#topLeft");
const toastr = () => {
    const display = document.createElement("P");
    topLeft.addEventListener("click", () => {
        console.log('clicked');
        document.querySelector("#topLeftDisplay").style.display = "block";
        display.textContent = "Hello World !!!";
        document.querySelector("#close").appendChild(display);
        document.querySelector("#topLeftDisplay").appendChild(display);
        document.querySelector("#topLeftDisplay").style.color = "black";
        document.querySelector("#topLeftDisplay").style.setProperty("height", "35px");
        document.querySelector("#topLeftDisplay").style.setProperty("padding", "10px");
        document.querySelector("#topLeftDisplay").style.setProperty("padding", "10px");
        document.querySelector("#topLeftDisplay").style.setProperty("background-Color", "burlywood");
        document.querySelector("#topLeftDisplay").style.setProperty("border-radius", "7px");
        document.querySelector("#topLeftDisplay").style.setProperty("transition", "0.5s");
        setTimeout(() => {
            document.querySelector("#topLeftDisplay").style.display = "none";
        }, 3000);
    })
    const topRight = document.querySelector("#topRight");
    const display1 = document.createElement("P");
    topRight.addEventListener("click", () => {
        document.querySelector("#topRightDisplay").style.display = "block";
        display1.textContent = "Hello World !!!";
        document.querySelector("#topRightDisplay").appendChild(display1);
        document.querySelector("#topRightDisplay").style.color = "black";
        document.querySelector("#topRightDisplay").style.setProperty("height", "35px");
        document.querySelector("#topRightDisplay").style.setProperty("padding", "10px");
        document.querySelector("#topRightDisplay").style.setProperty("padding", "10px");
        document.querySelector("#topRightDisplay").style.setProperty("background-Color", "cadetblue");
        document.querySelector("#topRightDisplay").style.setProperty("border-radius", "7px");
        document.querySelector("#topRightDisplay").style.setProperty("transition", "0.5s");
        setTimeout(() => {
            document.querySelector("#topRightDisplay").style.display = "none";
        }, 2000);
    })
    const bottomLeft = document.querySelector("#bottomLeft");
    const display2 = document.createElement("P");
    bottomLeft.addEventListener("click", () => {
        document.querySelector("#bottomLeftDisplay").style.display = "block";
        display2.textContent = "Hello World !!!";
        document.querySelector("#bottomLeftDisplay").appendChild(display2);
        document.querySelector("#bottomLeftDisplay").style.color = "black";
        document.querySelector("#bottomLeftDisplay").style.setProperty("height", "35px");
        document.querySelector("#bottomLeftDisplay").style.setProperty("padding", "10px");
        document.querySelector("#bottomLeftDisplay").style.setProperty("padding", "10px");
        document.querySelector("#bottomLeftDisplay").style.setProperty("background-Color", "chocolate");
        document.querySelector("#bottomLeftDisplay").style.setProperty("border-radius", "7px");
        document.querySelector("#bottomLeftDisplay").style.setProperty("transition", "0.5s");
        setTimeout(() => {
            document.querySelector("#bottomLeftDisplay").style.display = "block";
        }, 2000);
    })
    const bottomRight = document.querySelector("#bottomRight");
    const display3 = document.createElement("P");
    bottomRight.addEventListener("click", () => {
        document.querySelector("#bottomRightDisplay").style.display = "block";
        display3.textContent = "Hello World !!!";
        document.querySelector("#bottomRightDisplay").appendChild(display3);
        document.querySelector("#bottomRightDisplay").style.color = "black";
        document.querySelector("#bottomRightDisplay").style.setProperty("height", "35px");
        document.querySelector("#bottomRightDisplay").style.setProperty("padding", "10px");
        document.querySelector("#bottomRightDisplay").style.setProperty("padding", "10px");
        document.querySelector("#bottomRightDisplay").style.setProperty("background-Color", "cyan");
        document.querySelector("#bottomRightDisplay").style.setProperty("border-radius", "7px");
        document.querySelector("#bottomRightDisplay").style.setProperty("transition", "0.5s");
        setTimeout(() => {
            document.querySelector("#bottomRightDisplay").style.display = "none";
        }, 2000);
    })

}
toastr();