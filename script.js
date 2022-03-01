let boxesSizePrompt = prompt("What size would you like your boxes to be? Remember that the box has to be smaller than 100px!")
let boxesSize = parseInt(boxesSizePrompt)

function Board(size) {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
       square.style.backgroundColor = "blue";
        square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black"
        });
        board.insertAdjacentElement("beforeend", square);
    }
}


if (boxesSize >= 2 && boxesSize <= 100) {
    Board(boxesSize)
} else {
    console.log("Too many squares");
    alert("The size is outside of the possible range. Please select a number between 2 and 100!");
}

