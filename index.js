String.prototype.reduce = function (obj) {
  return this.split('.').reduce((ret, item) => {
    if (ret == null || ret[item] == null) return null;
    return ret[item]
  }, obj)
}

Object.prototype.reduce = function (t) {
  t = new String(t)
  return String.prototype.reduce.call(t, this);
}