var varint = require('varint')

function encodingLength (ary) {
  return ary.reduce(function (sum, i) {
    return sum + varint.encodingLength(i)
  }, 0)
}

module.exports = {
  encodingLength: encodingLength,
  encode: function encode (ary) {
    var length = encodingLength(ary)
    var b = new Buffer(length)
    var bytes = 0
    ary.forEach(function (i) {
      varint.encode(i, b, bytes)
      bytes += varint.encode.bytes
    })
    return b
  },
  decode: function (b, offset) {
    var a = []
    offset = offset || 0
    while(offset < b.length) {
      a.push(varint.decode(b, offset))
      offset += varint.decode.bytes
    }
    return a
  }

}





