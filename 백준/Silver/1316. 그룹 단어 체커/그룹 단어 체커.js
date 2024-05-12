let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let cnt = 0;
for (let i = 1; i <= input[0]; i++) {
    let arr = [];
    let str = input[i];
    let isGroup = true;
    for (let j = 0; j < str.length; j++) {
        if (arr.indexOf(str[j]) == -1) {
            arr.push(str[j]);
        }
        else {
            if (arr.indexOf(str[j]) !== arr.length - 1) {
                isGroup = false;
                break;
            }
        }
    }
    if (isGroup) {
        cnt++;
    }
}
console.log(cnt);
