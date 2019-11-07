function Universe() {
    var _instance = this; // 缓存
    this.startTime = 0;
    this.endTime = Infinity;
    Universe = function () { // 重写
        return _instance;
    }
}

var uni1 = new Universe();
var uni2 = new Universe();
console.log(uni2 === uni1) // true
console.log(uni1.constructor === Universe) // false


function Universe() { // 解决方案一
    var _instance;
    Universe = function () {
        return _instance;
    }
    Universe.prototype = this;
    _instance = new Universe();
    _instance.constructor = Universe;
    _instance.startTime = 0;
    _instance.endTime = Infinity;
    return _instance;
}

var uni1 = new Universe();
var uni2 = new Universe();
console.log(uni2 === uni1) // true
console.log(uni1.constructor === Universe) // true



var Universe; // 解决方案二
(function () {
    var _instance;
    Universe = function () {
        if(_instance) return _instance;
        _instance = this;
        this.startTime = 0;
        this.endTime = Infinity;
    }
} ())

var uni1 = new Universe();
var uni2 = new Universe();
console.log(uni2 === uni1) // true
console.log(uni1.constructor === Universe) // true

