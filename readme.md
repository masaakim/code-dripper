# code-dripper [![Build Status](https://travis-ci.org/morishitter/code-dripper.svg)](https://travis-ci.org/morishitter/code-dripper)

Drip code blocks from the markdown file.

## Installation

```shell
$ npm install code-dripper
```

## Usage

### CLI

```
$ code-dripper sample.md
```

### Node.js

```js
var fs = require('fs')
var codeDripper = require('code-dripper')

var md = fs.readFileSync('./sample.md', 'utf-8')
codeDripper(md)
```

## License

The MIT License (MIT)

Copyright (c) 2016 Masaaki Morishita
