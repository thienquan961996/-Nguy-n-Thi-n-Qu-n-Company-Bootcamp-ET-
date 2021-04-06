console.log("test 1")

function validTime(time) {
    const hours = time.split(":")[0];
    const minutes = time.split(":")[1];

    if (hours >= 24 || hours < 0) return false;
    if (minutes >= 60 || minutes < 0) return false;
  return true;
}
console.log(validTime("13:58"));
console.log(validTime("25:58"));
console.log(validTime("13:72"));

console.log("test 2")

function missingNumber(arr, n) {
    const result = [];
    for (let i = 0; i <= n; i++) {
      if (!arr.includes(i)) {
        result.push(i);
      }
    }
    return result;
}

console.log(missingNumber([3,1,0], 3));
console.log(missingNumber([1,2,3], 3));
console.log(missingNumber([0,1,2],3));
console.log(missingNumber([0,1,2],4));