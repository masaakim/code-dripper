var fs = require('fs')
var test = require('tape')
var codeDripper = require('./')

var md = fs.readFileSync('./test.md', 'utf-8')

test('codeDripper', function (t) {
  var expected = [
    { ext: 'css', code: '.rule {\n  property: value;\n}' },
    { ext: 'js', code: 'var a = 1;' }
  ]
  var actual = codeDripper(md)
  t.same(expected, actual)
  t.end()
})
