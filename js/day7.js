function Square(width, height)
{
    this.width = width;
    this.height = height;
//    this.넓이 = function(){ // *1 이렇게 생성자 안에서 함수를 선언하면.. 생성자를 사용할 때마다 함수도 생성됨
//        return this.width * this.height;
//    }
}

//Square.prototype.넓이 = function(){ // *1 그래서 prototype에 선언하면 함수는 하나만 생성됨
//    return = this.width * this.height;
//}
//Square.prototype.a = function(){
//    return 'a';
//}
//Square.prototype.b = function(){
//    return 'b';
//}

Square.prototype = { //이런식으로 객체 리터럴 형식으로도 가능함
    넓이 : function() {
        return this.width * this.height;
    },
    a : function() {
        return 'a';
    },
    b : function() {
        return 'b';
    }
}

var 사각형1 = new Square(10, 5);
var 사각형2 = new Square(3, 4);

console.log(사각형1.넓이.apply(사각형2)); // apply는 인수로 받은 것을 this로 만듬..
console.log(사각형1.넓이.apply(사각형2, [2,3]));
console.log(사각형1.넓이.call(사각형2, 2,3));


function argarr() {
    console.log(arguments);
    var arr = [].concat.apply([], arguments); // var arr = [].concat(1,2,3);
    console.log(arr);
}
argarr(1,2,3);

// 문제: 다음과 같이 동작하는 원(Circle) 데이터를 정의하라.
// var circle = new Circle(반지름숫자);
// console.log(circle.넓이()); // 원의 넓이
// console.log(circle.둘레()); // 원의 둘레
// console.log(circle.지름()); // 원의 지름
function Circle(r)
{
    this.r = r;
}
Circle.prototype = {
    넓이 : function(){
        return this.r * this.r * Math.PI;
    },
    둘레 : function(){
        return this.r * 2 * Math.PI;
    },
    지름 : function(){
        return this.r * 2;
    }
};
var circle = new Circle(4);
var circle2 = new Circle(5);
console.log(circle.넓이());
console.log(circle2.둘레());
console.log(circle2.지름());

function Triangle(밑변, 높이)
{
    this.밑변 = 밑변;
    this.높이 = 높이;
}
Triangle.prototype = {
    넓이 : function(){
        return this.밑변 * this.높이 / 2;
    }
}
var triangle = new Triangle(3, 4);
var triangle2 = new Triangle(5, 6);
console.log(triangle.넓이());
console.log(triangle2.넓이());