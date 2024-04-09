let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let h = parseInt(input[0]);
let m = parseInt(input[1]);

if (m < 45) {
    if (h == 0) {
        console.log(23, m + 15);
    }
    else console.log(h - 1, m + 15);
}
else console.log(h, m - 45);