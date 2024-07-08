let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let arr_n = [0]
for (let i = 1; i <= input.length; i++) {
    if (!isNaN(Number(input[i]))) {
        arr_n.push(Number(input[i]))
    }
}
//console.log(arr_n)
input = input.splice(1)
for (let i = 0; i < n; i++) {
    let arr = input.splice(1, arr_n[i + 1])
    input = input.splice(1)
    //console.log(arr)
    let flag = false

    for (let j = 0; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            let test = arr[j].trim() + arr[k].trim()
            let test2 = arr[k].trim() + arr[j].trim()
            if (test === test.split('').reverse().join('')) {
                console.log(test)
                flag = true
                break
            }
            else if (test2 === test2.split('').reverse().join('')) {
                console.log(test2)
                flag = true
                break
            }
        }
        if (flag) break
    }
    if (!flag) console.log(0)
}