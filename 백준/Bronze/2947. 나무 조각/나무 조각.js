let arr = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

while (true) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            console.log(arr.join(' '))
        }
    }
    if (arr.join(' ') === '1 2 3 4 5') break
}