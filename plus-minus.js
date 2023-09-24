arr = [-4, 3, -9, 0, 4, 1];

function plus_minus(arr) {
  let result = [];
  let nagetive = [];
  let positive = [];
  let zero = [];

  arr.forEach((num) => {
    if (num < 0) {
      nagetive.push(num);
    } else if (num > 0) {
      positive.push(num);
    } else {
      zero.push(num);
    }
  });

  result.push((positive.length / arr.length).toFixed(6));
  result.push((nagetive.length / arr.length).toFixed(6));
  result.push((zero.length / arr.length).toFixed(6));

 
}

plus_minus(arr);
