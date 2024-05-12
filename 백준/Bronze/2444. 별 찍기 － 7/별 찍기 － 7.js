let input = require('fs').readFileSync('/dev/stdin').toString().trim();

for (let i = 0; i < input; i++) {
    console.log(' '.repeat(input - i - 1) + '*'.repeat((i + 1) * 2 - 1))
}
for (let i = input - 1; i > 0; i--) {
    console.log(' '.repeat(input - i) + '*'.repeat(i * 2 - 1))
}