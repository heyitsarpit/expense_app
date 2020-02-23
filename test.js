var format = require('date-fns/format')
const { en, fr } = require ('date-fns/locale')

let time = "2018-09-10T02:11:29.184Z"

var result = format(new Date(time), 'd LLLL, yyyy')

console.log(result)