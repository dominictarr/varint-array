
var tape = require('tape')
var varintArray = require('../')

tape('simple', function (t) {

  var L = ~~(Math.random()*20)
  var a = []
  for(var i = 0; i < L; i++)
    a.push(~~(Math.pow(Math.random(), 4)*(1<<24)))

  var len = varintArray.encodingLength(a)
  console.log(a.join(','))
  var b = varintArray.encode(a)
  console.log(b)
  console.log(b.toString('base64'))
  t.equal(b.length, len)
  t.deepEqual(varintArray.decode(b), a)
  t.end()
})







