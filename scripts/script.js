const mainContainer = document.querySelector("#mainContainer");
let gridDimension = 10;

function styleRow(newRow) {
    newRow.style.flex = "1";
    newRow.textContent = "filler";

    newRow.addEventListener("mouseenter", function (e) {
        e.target.classList.toggle("dark");
        console.log("yo");
    })

    return newRow;
}

function styleColumn(newCol) {
    newCol.style.display = "flex";
    newCol.style.flexDirection = "column";
    newCol.style.flex = "1";

    for (let j = 0; j < gridDimension; j++) {
        const newRow = document.createElement("div");
        newCol.appendChild(styleRow(newRow));
    }
    
    return newCol;
}

for (let i = 0; i < gridDimension; i++) {
    const newCol = document.createElement("div");
    const styledCol = styleColumn(newCol);
    mainContainer.appendChild(styledCol);
}