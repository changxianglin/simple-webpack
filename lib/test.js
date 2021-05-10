const { getAst, getDependencies, transfrom } = require('./parser')
const path = require('path')

const ast = getAst(path.join(__dirname, '../src/index.js'))
const dependencies = getDependencies(ast)

const source = transfrom(ast)

console.log(source)