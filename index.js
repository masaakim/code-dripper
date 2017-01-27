var fs = require('fs')
var parse = require('markdown-to-ast').parse

module.exports = function (md) {
  var ast = parse(md)
  var ret = []
  ast.children.forEach(function (node) {
    if (node.type === 'CodeBlock') {
      ret.push({
        ext: node.lang,
        code: node.value,
      })
    }
  })
  return ret
}
