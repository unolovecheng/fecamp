var str = '문자열';
var str2 = str;
str = '문자열 수정';

var arr = ['A', 'B', 'C'];
var arr2 = arr;
arr.push('D');
console.log(arr2);
arr2 = null;
console.log(arr);
console.log(arr2);

// 원시타입과 복합타입의 차이
// - 원시 타입은 값 자체가 복사됨 
// - 복합 타입은 메모리의 주소가 복사됨.. 값 자체가 복사되지 않음

function 함수(){
    console.log(this);
}

함수('가', '나', '다');


var person = {
    name : '강창훈',
    sayName : function(){  //sayName은 프로퍼티이기도 하지만 함수를 가진 프로퍼티는 메서드라고 부름
        console.log(this.name);
    }
};
person.sayName();

var friend = {
    name : '친구',
    sayName : person.sayName
}
friend.sayName();

// arguments와 this는 함수를 실행할 때마다 만들어짐


var 변수 = 1;
function 함수1(){
    var 변수 = 2;
    console.log(window.변수);
}
함수1();

// 문제 : 주어진 함수를 작성하여 결과를 완성하라.
function fn(){
    return this.width * this.height;
};

var rect1 = {
    width : 30,
    height : 10,
    getArea : fn
}
console.log( rect1.getArea() ); // 300

var rect2 = {
    width : 20,
    height : 10,
    getArea : fn
}
console.log( rect2.getArea() ); //200

// 익명(anonymous) 함수(이름이 없는 함수...)
var fn = function(){
    
};
(function(str){
    console.log(str);
})('aaa');


// 콜백 함수 - 특정한 상황이 되었을 때 실행하도록 전달하는 함수..
var timerId = setTimeout(function(){
    console.log('5초지남');
}, 5000);
clearTimeout(timerId);
function 오초뒤(){
    console.log('5초지남');
}
// "전역 함수라면" 함수 이름을 문자열로 전달할 수 있다.(권장 안함)



function fn3(){
    console.log(arguments.callee);
}
fn3();