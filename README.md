# safely-nested

A safe way to access values in deeply nested objects.

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
safe("foo.bar.qux.2", nest, fallback); // 'grault'
```
