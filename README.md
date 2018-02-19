# safely-nested [![Build Status](https://travis-ci.org/aimrie/safely-nested.svg?branch=master)](https://travis-ci.org/aimrie/safely-nested)

A safe way to access values in deeply nested objects.

## Installation

```
npm install safely-nested
```

# Syntax

```
safely-nested(path, object[, fallback])
```

## Parameters

```
path
  a string such as    "foo.bar.baz"
  or an array such as ["foo", "bar", "baz"]

object
  any javascript object

fallback (optional, defaults to undefined)
  whatever you wish to return in case of failure
```

## Return value

The nested value or `fallback`.

# Usage

```
var safe = require("safely-nested");

var nest = {
  foo: {
    bar: {
      baz: 1,
      qux: ["quux", "corge"]
    }
  }
};

var fallback = "grault";

safe("foo.bar.baz", nest); // 1
safe("foo.bar.qux.0", nest); // 'quux'
safe("foo.bar.qux.2", nest); // undefined
safe("foo.bar.qux.2", nest, fallback); // 'grault'

// you can also pass in a callback
var callback = function() {
  console.log('nothing here!');
  return "grault";
};

safe(invalidPath, nest, callback) // [Function: callback]
safe(invalidPath, nest, callback()) // grault

// or pass one inline
safe(
  invalidPath,
  nest,
  (function() {
    console.log("nothing here!");
    return "grault";
  })()
)
```
