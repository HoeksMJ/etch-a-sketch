let container = document.getElementById("container");

let gridTotal = 256;

for (let i = 1; i <= gridTotal; i++) {
    let grid = document.createElement("button");
    grid.className = "grid";
    grid.id = `grid${i}`;
    document.querySelector("#container").appendChild(grid);
};

for (let i = 1; i<= gridTotal; i++) {
    let btn = document.getElementById(`grid${i}`);
    btn.addEventListener("mouseenter", () => {
        btn.style.backgroundColor = "rgba(214, 214, 214, 0.5)";
    });
};

