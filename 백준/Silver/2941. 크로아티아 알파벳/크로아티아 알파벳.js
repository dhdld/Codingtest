let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let cro = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
for (let i of cro) {
    input = input.replaceAll(i, ' ')
}
console.log(input.length);