function Universe () {
    if(typeof Universe.instance === 'object') {
       return Universe.instance;
   }
   this.startTime = 0;
   this.endTime = Infinity;
   Universe.instance = this; // 缓存
   // return this; 默认返回
}

var uni1 = new Universe();
var uni2 = new Universe();

console.log(uni1 === uni2) //true
console.log(uni1.constructor === Universe) // false 上述代码由于重写了函数,所以实例化对象的构造函数已经不是原来的Universe了
