let input = require('fs').readFileSync('/dev/stdin').toString().trim().toUpperCase().split('');

let arr = new Array(26).fill(0);
for (let i = 0; i < input.length; i++) {
    arr[input[i].charCodeAt(0) - 65]++;
}
let max = arr[0]
let cnt = 0;
for (let j = 0; j < arr.length; j++) {
    if (arr[j] > max) {
        max = arr[j]
    }
}
for (let j = 0; j < arr.length; j++) {
    if (arr[j] == max) {
        cnt++;
    }
}
console.log(cnt > 1 ? '?' : String.fromCharCode(arr.indexOf(max) + 65))