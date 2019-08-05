String.prototype.reduce = function (obj, initialValue = null) {
  let ret = this.split('.').reduce((ret, item) => {
    if (ret == null || ret[item] == null) return null;
    return ret[item]
  }, obj)

  if (ret === null) return initialValue;
  return ret;
}

Object.prototype.reduce = function (t, initialValue = null) {
  t = new String(t)
  return String.prototype.reduce.call(t, this, initialValue = null);
}