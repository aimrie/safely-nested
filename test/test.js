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

  it("should return value when the value is present", function() {
    assert.equal(safe(validPath, nest), 1);
  });
  it("should return fallback when the value is missing", function() {
    assert.equal(safe(invalidPath, nest, fallback), fallback);
  });
  it("should return fallback when arguments are invalid");
  it("should return undefined when no arguments are given", function() {
    assert.equal(safe(), undefined);
  });
});
