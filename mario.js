const button = document.getElementById("pyramidButton");
button.addEventListener("click", determineHeightAndThenDrawPyramid);

function determineHeightAndThenDrawPyramid() {
    const height = document.getElementById("height").value;
    drawPyramid(height);
}

function drawPyramid(height) {
    let space = ".";
    
    let brick = "#";

    const element = document.getElementById("pyramid");
    element.innerHTML = "";

    for (let i = 1; i <= height; i++) {
        let rowStr = "";
        
        for (let a = 0; a < height - i; a++) {
            rowStr += space;
        }
    
        for (let b = 0; b < i; b++) {
            rowStr += brick;
        }

        console.log(rowStr);
    
        const para = document.createElement("p");
        const node = document.createTextNode(rowStr);
        para.appendChild(node);

        element.appendChild(para);
    }

}