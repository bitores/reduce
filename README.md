# reduce
Gets the value of a key in Json, or NULL

> npm i --save @huangzj/reduce

#### usage
```
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
