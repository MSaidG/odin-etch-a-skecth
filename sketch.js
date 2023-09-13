const container = document.querySelector("#container");
//const grid = document.createElement("div");
const button = document.querySelector("button");

button.addEventListener("click", () => {

    

});


container.hidden = false;
let gridSize = 16;
for (let i = 0; i < gridSize; i++)
{
    for (let j = 0; j < gridSize; j++)
    {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = `${960/gridSize}px`;
        grid.style.height = `${960/gridSize}px`;
        grid.hidden = false;
        grid.classList.add("grid")
        container.append(grid);
    }
}

console.log(960/gridSize);

const grids = document.querySelectorAll(".grid");

grids.forEach( function(grid) {

    grid.addEventListener("mouseover", (e) => {

        e.target.classList.add("hover");
        
    });
});

function changeColor(e)
{
    console.log(e);
}