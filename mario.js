printPyramid(5);

function printPyramid(height) {
    let space = " ";
    
    let brick = "#";
        
    let layer = "";

    for (let i = 0; i <= height; i++) {
        for (let a = 0; a < height - i; a++) {
            layer += space;
        }
    
        for (let b = 0; b < i; b++) {
            layer += brick;
        }
    
        layer += "\n";
    }

    console.log(layer);
}