#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var pkg = require('./package.json')
var codeDripper = require('./')

var minimist = require('minimist')
var argv = minimist(process.argv.slice(2), {
  boolean: [
    'help',
    'version'
  ]
})

if (argv.v) {
  console.log(pkg.version)
  process.exit()
}

if (argv.h) {
  console.log('Usage: code-dripper [options] markdown-file-path')
  console.log('')
  console.log('Options:')
  console.log('')
  console.log('  -v, --version          Output the version number')
  console.log('  -h, --help             Output usage information')
  process.exit()
}

function isMd (filePath) {
  return /^\.md|\.markdown$/i.test(path.extname(filePath))
}

var input = argv._[0]

if (isMd(input)) {
  var fullPath = path.resolve(process.cwd(), input)
  var md = fs.readFileSync(fullPath, 'utf-8')
  var codeblocks = codeDripper(md)
  codeblocks.forEach(function (codeblock, i) {
    fs.writeFileSync(i + '.' + codeblock.ext, codeblock.code)
  })
} else {
  console.error('input a markdown file path')
}
