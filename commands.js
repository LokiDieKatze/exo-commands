const fs = require('fs')

let list = ''

if (process.argv[2] === undefined) {
  console.log('Usage: node dirName command')
} else if ((process.argv[2] !== 'ls') || (process.argv[2] !== 'ls-a')) {
  console.log('Please enter a valid command')
}

switch (process.argv[2]) {
  case 'ls':
    list = fs.readdirSync('./').filter(elem => !(elem.startsWith('.')))
    break

  case 'ls-a':
    list = fs.readdirSync('./')
    break
}

console.log(list)
