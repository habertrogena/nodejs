const lodash = require('lodash')

const names= ['John', 'Mary', 'Jane', 'Bob', 'Alice']
const capitalize = lodash.map(names);

console.log(capitalize);