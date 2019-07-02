import { async, reject } from "q";
import { resolve } from "uri-js";
import { process } from "ipaddr.js";

// let [a, ...b] = [1, 2, 3];
// console.log(b);
// const b = { name: 23 };
// let a = {
//   age: 19,
//   b
// };
// let { age } = a; // let age = a.age;
// console.log(age); //=>

// 字符串当数组来看，进行解构赋值
// let str = "abcdef";
// let [a, b, ...c] = str;
// console.log("c :", c);
// console.log("a :", a);
// console.log("b :", b);

//  默认值的解构赋值
// let k = { age: 123, name: 1 };
// let { name = 0, age } = k;
// console.log("name :", name);
// console.log("age :", age);

// let a = 3;
// a.toString(); // 临时创建一个包装对象（ new Number(3).toString())
// 由包装对象执行 toString方法，执行完后，包装对象被释放。

// let a = 3;
// let aObje = new Number(3); // 装箱
// aObje.valueOf() // 拆箱

// let { toString } = 333;
// toString = toString.bind(22);
// // call apply  : 立即执行当前函数，改变当前的this指向。
// // bind:  返回一个新函数，新函数的this => bind(第一个参数)；
// console.log(toString());

// var a = {
//   toSting: function() {
//     console.log(1);
//   }
// };

// let { toSting } = a;
// toSting();

// let a = /[abc%]{1,7}\d\w\s/gis;

// function add(x, y, z = 9) {
//   return x + y + z;
// }
// console.log("add.length :", add.length);
// console.log("add(1, 2, undefined) :", add(1, 2));

// function b(x, ...c) {
//   console.log("x :", x);
//   console.log("c :", c);
//   console.log("typeof c :", typeof c); // => Object
//   const t = Object.prototype.toString.call(c).slice(8, -1);
//   console.log("t :", t);
// }
// b(1, 3, 4, 9);

// var x = "1234";
// var d = +x;
// d = +x;

// 箭头函数

// const t = a => a > 0;
// const m = a => {
//   return a > 0;
// };

// const k = a => ({ age: a });

// const k2 = async a => a > 0;

// const t = [3, 4, 5];

// // for (let item of t) {
// //   console.log("item :", item);
// // }
// let m = t.filter(item => item >= 4);
// console.log("t :", t);
// console.log("m :", m);

// const t = [3, 4, 5];
// Math.max(...t);

// let age = 19;
// let t = "name";
// const a = {
//   age,
//   show() {
//     console.log("this.age :", this.age);
//   },
//   [t]: "laoma"
// };

// let k = 0;
// Object.defineProperty(a, "temp", {
//   get() {
//     return k;
//   },
//   set(val) {
//     k = val;
//   }
// });

// a.temp = 90;
// console.log("k :", k);
// console.log("a :", a); // =>
// console.log("a.temp :", a.temp);

// let k = [1, 2, 3, 8, 10];
// let sum = k.reduce((prev, next) => {
//   return prev + next;
// }, 4);
// console.log("sum :", sum);

// let arr = Array.from(new Set([1, 2, 2, 4]));
// console.log("arr :", arr);

// let p = new Promise((resolve, reject) => {
//   // 处理操作。
//   setTimeout(() => {
//     // 模拟超长时间执行。
//     // 状态改变。
//     // resolve(2);
//     reject(8888);
//   }, 3000);
// });

// p.then(res => {
//   console.log("res :", res);
// }).catch(res => {
//   console.log("errror:", res);
// });

// 回调函数方法
// function getUser(cb) {
//   $.ajax({
//     url: "/api/user",
//     type: "GET",
//     data: "",
//     success: cb
//   });
// }

// Promise方案
// function getUser() {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: "/api/user",
//       type: "GET",
//       data: "",
//       success: function(data) {
//         resolve(data);
//       },
//       error: function(e) {
//         reject(e);
//       }
//     });
//   });
// }

// let api = { getUser };

// // promise方法
// api
//   .getUser()
//   .then(res => {
//     console.log("res :", res);
//   })
//   .catch(e => {
//     console.log("e :", e);
//   });

// async function getUserAsync() {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       url: "/api/user",
//       type: "GET",
//       data: "",
//       success: function(data) {
//         resolve(data);
//       },
//       error: function(e) {
//         reject(e);
//       }
//     });
//   });
// }

// (async () => {
//   let k = await getUserAsync();
//   console.log("k :", k);
// })();

//async修饰的函数，返回值是一个 promise，如果return不是promise对象
// 那么会封装成promise再返回
// async function add(a, b) {
//   return a + b;
// }

// let k = add(8, 9);
// k.then(res => {
//   console.log("res :", res);
// });

// async function add(a, b) {
//   return a + b;
// }

// (async () => {
//   let k = await add(8, 9);
//   console.log("k :", k);
// })();

// await:
// 1. 必须只能出现在async里面。
// 2. 后面跟一个promise对象。（如果不是，立即包装成promise对象）
// 3. await会暂停当前函数执行，把执行控制权让出，继续其他的代码执行。
// 4. 当await后面的promise发生状态改变，自动回来继续执行。而且会把promise的结果
// 作为当前表达式的结果返回。

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.kk = 29;
//   }

//   // static FX = 9; // 给构造函数添加属性
//   // kk = 29;  // 给实例添加属性

//   show() {
//     console.log("this.x :", this.x);
//     console.log("this.kk :", this.kk);
//   }
//   toString() {
//     return "(" + this.x + ", " + this.y + ")";
//   }
// }

// let t = new Point(1, 2);
// // t.toString();
// t.show();

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   show() {
//     console.log(this.name, "-", this.age);
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, color) {
//     super(name, age); //
//     // Animal.call(this, name, age);
//     this.color = color;
//   }
//   catShow() {
//     console.log(this.name, "---", this.color);
//   }
// }
// let c = new Cat();
// c.show();
// c.catShow();

// // X.show.js
// (() => {
//   if (!window.X) {
//     window.X = {};
//   }
//   var a = 10;
//   window.X.show = function() {};
// })();

// // X.table.js
// (() => {
//   var a = 10;
//   if (!window.X) {
//     window.X = {};
//   }
//   window.X.table = function() {};
// })();

// module.exports = {};

// const path = require("path");

// umd：模块标准

// es6标准

// 重点  eventloop

for (var i = 0; i < 10; i++) {
  console.log(i);
}
setTimeout(() => {
  console.log(11);
}, 30);
setImmediate(() => {
  console.log(22);
  Promise.resolve().then(() => {
    console.log(24);
  });
});
setImmediate(() => {
  console.log(23);
});
console.log(12);

new Promise((resolve, reject) => {
  console.log(13);
  resolve(22);
  console.log(14);
  process.nextTick(() => {
    console.log(17);
  });
})
  .then(res => {
    console.log(15);
    return 19;
  })
  .then(res => {
    console.log(res);
    console.log(20);
  });

process.nextTick(() => {
  console.log(18);
});

console.log(16);
