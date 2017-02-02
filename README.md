# varint-array

encode/decode an array of integers as varints.

compatible with [abstract-encoding](https://github.com/mafintosh/abstract-encoding) api.

## example 

``` js
var va = require('varint-array')

var b = va.encode([1, 2, 3, 1000]) => Buffer

va.decode(b) => [1, 2, 3, 1000]
```

## License

MIT
