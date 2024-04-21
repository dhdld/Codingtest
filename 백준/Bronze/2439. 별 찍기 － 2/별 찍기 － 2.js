let input = Number(require('fs').readFileSync('/dev/stdin').toString().split('\n')[0])

let star = '';
for (let i = 0; i < input; i++) {
    let blank = '';
    star += '*';
    for (let j = input - i; j > 1; j--) {
        blank += ' ';
    }
    console.log(blank + star);
}