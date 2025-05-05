const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const stack=[]
const res = []
for(let i=0; i<n; i++){
    if (arr[i].includes('push')){
        let num = arr[i].split(' ')
        stack.push(Number(num[1]))
    }
    else if (arr[i].includes('pop')){
        if (stack.length == 0)
            res.push(-1)
        else {
           res.push(stack[stack.length-1])
            stack.pop()
        }
    }
    else if (arr[i].includes('size')) {
        res.push(stack.length)
    }
    else if (arr[i].includes('empty')){
        if (stack.length == 0)
            res.push(1)
        else res.push(0)
    }
    else if (arr[i].includes('top')){
        if (stack.length == 0)
            res.push(-1)
        else {
           res.push(stack[stack.length-1])
        }
    }   
}

console.log(res.join('\n'))