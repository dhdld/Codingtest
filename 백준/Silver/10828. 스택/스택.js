const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const stack=[]
for(let i=0; i<n; i++){
    if (arr[i].includes('push')){
        let num = arr[i].split(' ')
        stack.push(Number(num[1]))
    }
    else if (arr[i].includes('pop')){
        if (stack.length == 0)
            console.log(-1)
        else {
           console.log(stack[stack.length-1])
            stack.pop()
        }
    }
    else if (arr[i].includes('size')) {
        console.log(stack.length)
    }
    else if (arr[i].includes('empty')){
        if (stack.length == 0)
            console.log(1)
        else console.log(0)
    }
    else if (arr[i].includes('top')){
        if (stack.length == 0)
            console.log(-1)
        else {
           console.log(stack[stack.length-1])
        }
    }   
}