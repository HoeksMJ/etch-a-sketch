let container = document.getElementById("container");               /*get HTML object with Id container */

let gridTotal = 100;                                                /*set initial total amount of grid boxes to (10 x 10) */
let gridDimension = "80px";                                         /*set initial gridDimension (width) of boxes to 1/10 of total width (800px) */
createGrid();                                                       /*create an initial grid using gridTotal and grid Dimension (a 10x10 grid) */
drawGrid();                                                         /*allows user to draw without having to press any grid dimension selector buttons */


let tenBtn = document.getElementById("tenBtn");                     /*when (10 x 10) button is clicked, erase any created button elements, and make a new (10 x 10) grid */
tenBtn.addEventListener("click", () => {
    eraseGrid();
    gridTotal = 100;
    gridDimension = "80px";
    createGrid();
    drawGrid();
});

let sixteenBtn = document.getElementById("sixteenBtn");              /*when (16 x 16) button is clicked, erase any created button elements and make a new (16 x 16) grid */
sixteenBtn.addEventListener("click", () => {
    eraseGrid();
    gridTotal = 256;                                                 /*16 x 16 */
    gridDimension = "50px";                                          /*each box will be 1/16th of the height and width of container box (800px) */
    createGrid();
    drawGrid();
});

let fourtyBtn = document.getElementById("fourtyBtn");
fourtyBtn.addEventListener("click", () => {
    eraseGrid();
    gridTotal = 1600;                                                /*total number of boxes (buttons) */
    gridDimension = "20px";                                          /*each box will be 1/40th of the height and width of container box (800px) */
    createGrid();
    drawGrid();
});

let hundredBtn = document.getElementById("hundredBtn");
hundredBtn.addEventListener("click", () => {
    eraseGrid();
    gridTotal = 10000;
    gridDimension = "8px";                                           /*each box will be 1/100th of the height and width of container box (800px) */
    createGrid();
    drawGrid();
});

function createGrid (){                                             /*create i amount of boxes (buttons), determined by gridDimension, and assign each a unique id */
    console.log("creatinggrid")
    for (let i = 1; i <= gridTotal; i++) {
        let gridCreator = document.createElement("button");
        gridCreator.className = "grid";
        gridCreator.id = `grid${i}`;
        document.querySelector("#container").appendChild(gridCreator);
    };
    for (let i = 1; i<= gridTotal; i++){                            /*set the dimension of each box, targeted via its newly created unique id, to be gridDimension (determined by the relative button pressed) */
        let gridBox = document.getElementById(`grid${i}`);
        gridBox.style.maxWidth = gridDimension;
    };
};

function eraseGrid (){                                              /*target each element by its unique id, up to however many total boxes there are, determined by gridTotal, and remove */
    for (let i = 1; i <= gridTotal; i++){
        let gridBox = document.getElementById(`grid${i}`);
        gridBox.remove();
    };
};

function drawGrid(){                                                /*for each element targeted via its unique id, upt o however many total there are, determined by gridTotal, change the background color of a box when a mouse is pressed down and hovers onto the box */
    for (let i = 1; i <= gridTotal; i++){
        let gridBox = document.getElementById(`grid${i}`);
        let toggle = false;
        container.addEventListener("mousedown", () => {
            toggle = true;
        });
        container.addEventListener("mouseup", () => {
            toggle = false;
        });
        gridBox.addEventListener("mouseenter", () => {
            if (toggle == true){
                gridBox.style.backgroundColor = "rgba(241, 223, 197, 0.6)";
            };
        });
    };
};

