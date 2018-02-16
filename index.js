module.exports = function(path, obj, fallback = undefined) {
  if (typeof path === "string") {
    path = path.split(".");
  }

  var val = path.reduce(function(name, value) {
    var exists = name && name[value];
    if (exists || exists === 0) {
      return name[value];
    }
    return undefined;
  }, obj);

  if (val === undefined) return fallback;
  return val;
};
