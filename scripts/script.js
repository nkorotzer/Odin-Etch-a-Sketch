const mainContainer = document.querySelector("#mainContainer");
const resetBtn = document.querySelector("#resetBtn");
let defaultGridDimension = 10;

function styleRow(newRow) {
    newRow.style.flex = "1";

    newRow.addEventListener("mouseenter", function (e) {
        e.target.classList.toggle("dark");
    })

    return newRow;
}

function styleColumn(newCol, dimension) {
    newCol.style.display = "flex";
    newCol.style.flexDirection = "column";
    newCol.style.flex = "1";

    for (let j = 0; j < dimension; j++) {
        const newRow = document.createElement("div");
        newCol.appendChild(styleRow(newRow));
    }
    
    return newCol;
}

function createGrid(dimension) {
    for (let i = 0; i < dimension; i++) {
        const newCol = document.createElement("div");
        const styledCol = styleColumn(newCol, dimension);
        mainContainer.appendChild(styledCol);
    }
}

function eraseGrid() {
    let children = mainContainer.childNodes;
    for (node in children) {
        while (node.firtChild) {
            node.removeChild(node.firstChild);
        }
    }
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
}

resetBtn.addEventListener("click", function () {
    let userInput = parseInt(prompt("Enter new size"));
    if (userInput >= 100) {
        userInput = 100;
    }

    eraseGrid();
})

createGrid(defaultGridDimension);