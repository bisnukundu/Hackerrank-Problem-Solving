/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
let arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];


function diagonalDifference(arr) {
    let leftToRight = 0;
    let rightToLeft = 0;

    for (let i = 0; i < arr.length; i++) {
        leftToRight += arr[i][i]
        rightToLeft += arr[i][(arr.length - 1) - i]


    }

    let result = rightToLeft - leftToRight;
    console.log(result)
    return result;
}

diagonalDifference(arr)