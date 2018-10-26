require('../index')

var obj = {

  a: 1,
  m: 2,
  d: {
    a: 1,
    m: 2,
    d: {
      n: {
        d: 1,
        e: null
      }
    },
    n: 4,
    b: 5,
    c: 7
  },
  n: 4,
  b: 5,
  c: 7
}

console.log("a.b.c".reduce(obj))

console.log("d.d.n".reduce())

console.log(Object.sort(obj))

console.log(JSON.stringify(obj.sort()))