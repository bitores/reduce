# reduce
Gets the value of a key in Json, or NULL

> npm i --save json-deepkey-filter

功能拓展在 String, Object ,源码如下

```js
String.prototype.reduce = function (obj, initialValue = null) {
  let ret = this.split('.').reduce((ret, item) => {
    if (ret == null || ret[item] == null) return null;
    return ret[item]
  }, obj)

  if (ret === null) return initialValue;
  return ret;
}


Object.prototype.reduce = function (t, initialValue=null) {
  t = new String(t)
  return String.prototype.reduce.call(t, this, initialValue);
}
```


#### usage
> import from 'json-deepkey-filter';
```js
var obj = {
  a: {
    b: {
      c: {
        d: 1,
        e: null
      }
    }
  }
};



"a".reduce(obj); // {b:{c:{d:1,e:null}}}

"a.b.c".reduce(obj); // {d:1,e:null}

"a.b.c.d".reduce(obj); // 1

"a.b.c.d.e".reduce(obj); // null

"".reduce(obj); // null

"".reduce(); // null

"".reduce(""); //null


obj.reduce() //null

obj.reduce(null) //null

obj.reduce("") // null

obj.reduce("a.b") // {c:{d:1,e:null}}

obj.reduce("d") // null
```
eg2.
```js
var obj2 = [
  {
    id:1, 
    list:[
      {id:2}
    ]
  }
]

"0.list.0.id".reduce(obj2) // 2
```