let container = document.querySelector("#container");
//const grid = document.createElement("div");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    
    let gridSize;
    do {
        gridSize = +prompt(`Number of squares per side for the new grid (Max is 100): `);
    }
    while (gridSize > 100)
    container.replaceChildren();
    generateGrid(gridSize);
    
});


generateGrid(16);

function generateGrid(gridSize)
{
    container.hidden = false;
    for (let i = 0; i < gridSize; i++)
    {
        for (let j = 0; j < gridSize; j++)
        {
            const grid = document.createElement("div");
            grid.classList.add("grid");
            grid.style.width = `${960/gridSize}px`;
            grid.style.height = `${960/gridSize}px`;
            grid.style.flexBasis = `${960/gridSize}px`;
            grid.classList.add("grid")
            container.append(grid);
        }
    }

    const grids = document.querySelectorAll(".grid");

    grids.forEach( function(grid) {

        grid.addEventListener("mouseover", (e) => {

            //e.target.classList.add("hover");
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        });
    });
}



