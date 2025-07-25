const mainContainer = document.querySelector("#mainContainer");
let gridDimension = 10;

for (let i = 0; i < gridDimension; i++) {
    const newCol = document.createElement("div");
    newCol.style.display = "flex";
    newCol.style.flexDirection = "column";
    newCol.style.flex = "1";

    for (let j = 0; j < gridDimension; j++) {
        const newRow = document.createElement("div");
        newRow.style.flex = "1";
        newRow.textContent = gridDimension * i + j;

        newCol.appendChild(newRow);
    }

    mainContainer.appendChild(newCol);
}