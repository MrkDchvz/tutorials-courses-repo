type ThreeDimentionalCoordinates = [
    x : number,
    y : number,
    z : number
]

function add3dCoordinates(coords : ThreeDimentionalCoordinates[]) : ThreeDimentionalCoordinates {
    let newX = 0;
    let newY = 0;
    let newZ = 0;
    coords.forEach((coord) => {
        newX += coord[0];
        newY += coord[1];
        newZ += coord[2];
    });
    return [newX, newY, newZ];
}

const coords : ThreeDimentionalCoordinates[] = [[1,2,3], [1,2,3], [1,2,3]];

console.log(add3dCoordinates(coords));