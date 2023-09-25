/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */


function birthday(s, d, m) {
  let res = 0;
  const sum = (arr) => arr.reduce((acc, el) => acc + el, 0);

  for (let i = 0; i < s.length - m + 1; i++) {
    if (sum(s.slice(i, i + m)) === d) {
      res++;
    }
  }

  console.log(res);
}

let s = [4];
let d = 4;
let m = 1;

birthday(s, d, m);
