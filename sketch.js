const buttonSize = document.querySelector("#size");
const buttonClear = document.querySelector("#clear");
const buttonColor = document.querySelector("#color");
const buttonRainbow = document.querySelector("#rainbow");
let container = document.querySelector("#container");
let gridSize = 16;
let isMouseDown = false;


buttonSize.addEventListener("click", () => {
    
    regenerateGrid(promptForGridSize());
    
});

document.addEventListener("mousemove", setPrimaryButtonState);
document.addEventListener("mouseup", setPrimaryButtonState);

buttonClear.addEventListener("click", () => {
    regenerateGrid(gridSize)
});

function promptForGridSize()
{
    oldGridSize = gridSize;
    do {
        gridSize = +prompt(`Number of squares per side for the new grid (Max is 100): `);
    }
    while (gridSize > 100)

    if (!gridSize)
    {
        gridSize = oldGridSize;

    }
    
    return gridSize;

}

function regenerateGrid(gridSize)

{

    container.replaceChildren();
    generateGrid(gridSize);

}





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

    changeHover();
    
}


function changeHover()
{
    let colorMode = "color";
    buttonColor.addEventListener("click", () => {
        colorMode = "color"
    });
    
    buttonRainbow.addEventListener("click", () => {
        colorMode = "rainbow";
    });

    const grids = document.querySelectorAll(".grid");
    grids.forEach( function(grid) {

        grid.addEventListener("mouseover", (e) => {
            if (isMouseDown)
            {
                changeColor(e, colorMode);
            }
        });
    });
}



function setPrimaryButtonState(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false
    let flags = e.buttons !== undefined ? e.buttons : e.which;
    isMouseDown = (flags & 1) === 1;

    return isMouseDown;
}

function changeColor(e, colorMode)
{
    if (colorMode === "color")
    {
        e.target.style.backgroundColor = "red";
    }
    else
    {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
    console.log(colorMode);
}


generateGrid(gridSize);
