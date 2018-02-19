var assert = require("assert");
var safe = require("../index");

describe("safe", function() {
  var nest = {
    foo: {
      bar: {
        baz: 1,
        qux: ["quux", "corge"]
      }
    }
  };

  var validPath = "foo.bar.baz";
  var invalidPath = "foo.bar.qux.2";
  var fallback = "grault";
  var callback = function() {
    console.log("nothing here!");
    return "grault";
  };

  it("should return value when the value is present", function() {
    assert.equal(safe(validPath, nest), 1);
  });
  it("should return fallback when the value is missing", function() {
    assert.equal(safe(invalidPath, nest, fallback), fallback);
  });
  it("should return fallback when arguments are invalid", function() {
    assert.equal(safe(1, nest, fallback), fallback);
    assert.equal(safe({ foo: "bar" }, nest, fallback), fallback);
    assert.equal(safe([1, 2, 3], nest, fallback), fallback);
    assert.equal(safe(validPath, 1, fallback), fallback);
    assert.equal(safe(validPath, 1, fallback), fallback);
    assert.equal(safe(invalidPath, "foo", fallback), fallback);
    assert.equal(safe(invalidPath, "foo", fallback), fallback);
  });
  it("should return undefined when no arguments are given", function() {
    assert.equal(safe(), undefined);
  });
  it("should return undefined when one argument is given", function() {
    assert.equal(safe(fallback), undefined);
  });
  it("should return fallback if it's a function", function() {
    assert.equal(safe(invalidPath, nest, callback), callback);
    assert.equal(safe(invalidPath, nest, callback()), callback());
    assert.equal(
      safe(
        invalidPath,
        nest,
        (function() {
          console.log("nothing here!");
          return "grault";
        })()
      ),
      "grault"
    );
  });
});
