/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

let ar = [1, 3, 2, 6, 1, 2];
let k = 3;

function divisibleSumPairs(k, ar) {
  let result = [];
  ar.forEach((el, index, arr) => {
    //In this loop i am getting one elemnet.

    // console.log(el, index, arr.slice(index + 1));

    // after getiing one element i am doing slice that element
    arr.slice(index + 1).forEach((ab) => {
      // Here i am doing sum with one element to full array element

      let sum = Number(el + ab);
      if (sum % k === 0) result.push(sum);
    });
  });

  console.log(result.length);
}

divisibleSumPairs(k, ar);
