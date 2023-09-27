/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

let arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, 80]
];
const matrix = [
    [6, 6, 7, -10, 9, -3, 8, 9, -1],
    [9, 7, -10, 6, 4, 1, 6, 1, 1],
    [-1, -2, 4, -6, 1, -4, -6, 3, 9],
    [-8, 7, 6, -1, -6, -6, 6, -7, 2],
    [-10, -4, 9, 1, -7, 8, -5, 3, -5],
    [-8, -3, -4, 2, -3, 7, -5, 1, -5],
    [-2, -7, -4, 8, 3, -1, 8, 2, 3],
    [-3, 4, 6, -7, -7, -8, -3, 9, -6],
    [-2, 0, 5, 4, 4, 4, -3, 3, 0]
];

//left = 80
//right = 90



// console.log(matrix[0][0])

for(let i = 0; i < matrix.length; i++){
    // console.log(matrix[i][i])
    console.log(matrix[i].length)
}











function diagonalDifference(arr) {
    let leftToRight = 0;
    let rightToLeft = 0;

    for (let i = 0; i < arr.length; i++) {
        leftToRight += arr[i][i]
        rightToLeft += arr[i][(arr.length - 1) - i]
    }

    let result = rightToLeft - leftToRight;

    return Math.abs(result);

    return result;
}

diagonalDifference(matrix)