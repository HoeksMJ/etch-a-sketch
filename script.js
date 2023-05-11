let container = document.getElementById("container");

let gridTotal = 100;
let gridDimension = "80px";
createGrid();
drawGrid();


let tenBtn = document.getElementById("tenBtn");
tenBtn.addEventListener("click", () => {
    eraseGrid();
    gridTotal = 100;
    gridDimension = "80px";
    createGrid();
    drawGrid();
});

let sixteenBtn = document.getElementById("sixteenBtn");
sixteenBtn.addEventListener("click", () => {
    eraseGrid();
    gridTotal = 256;
    gridDimension = "50px";
    createGrid();
    drawGrid();
});

let fourtyBtn = document.getElementById("fourtyBtn");
fourtyBtn.addEventListener("click", () => {
    eraseGrid();
    gridTotal = 1600;
    gridDimension = "20px";
    createGrid();
    drawGrid();
});

let hundredBtn = document.getElementById("hundredBtn");
hundredBtn.addEventListener("click", () => {
    eraseGrid();
    gridTotal = 10000;
    gridDimension = "8px";
    createGrid();
    drawGrid();
});

function createGrid (){
    for (let i = 1; i <= gridTotal; i++) {
        let gridCreator = document.createElement("button");
        gridCreator.className = "grid";
        gridCreator.id = `grid${i}`;
        document.querySelector("#container").appendChild(gridCreator);
    };
    for (let i = 1; i<= gridTotal; i++){
        let gridBox = document.getElementById(`grid${i}`);
        gridBox.style.maxWidth = gridDimension;
    };
};

function eraseGrid (){
    for (let i = 1; i <= gridTotal; i++){
        let gridBox = document.getElementById(`grid${i}`);
        gridBox.remove();
    };
};

function drawGrid(){ 
    for (let i = 1; i <= gridTotal; i++){
        let gridBox = document.getElementById(`grid${i}`);
        let toggle = undefined;
        container.addEventListener("mousedown", () => {
            toggle = 1;
        });
        container.addEventListener("mouseup", () => {
            toggle = 0;
        });
        gridBox.addEventListener("mouseenter", () => {
            if (toggle ===1){
                gridBox.style.backgroundColor = "rgba(241, 223, 197, 0.6)";
            };
        });
    };
};

