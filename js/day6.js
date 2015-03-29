// 문제: 1초마다 한번씩 반복하며 현재 시간을 표시하는 clock() 함수를 작성하라.
// 단, 시간은 반드시 두자리로 표시해야 한다. 예를 들어 9시 50분 7초라면 09:50:09로 표시한다.
// 사용예: clock();
// 힌트: 시간은 document.title = 시간문자열; 과 같이 작성하면 표시할 수 있다.
function clock(){
    var 현재시간, 시, 분, 초, 밀리초, 시간문자열;
    현재시간 = new Date();
    시 = 현재시간.getHours();
    분 = 현재시간.getMinutes();
    초 = 현재시간.getSeconds();
    밀리초 = 현재시간.getMilliseconds();
    
    if(시 < 10){
        시 = '0' + 시;
    }
    if(분 < 10){
        분 = '0' + 분;
    }
    if(초 < 10){
        초 = '0' + 초;
    }
    if(밀리초 < 10){
        밀리초 = '00' + 밀리초;
    } else if(밀리초 < 100){
        밀리초 = '0' + 밀리초;
    }
    시간문자열 = 시+':'+분+':'+초+':'+밀리초;
    document.title = 시간문자열;
    setTimeout(arguments.callee, 1);
}
//clock();

// 1부터 10까지 콘솔에 출력하는 코드
//for(var i=1; i<=10; i++){
//    console.log(i);
//}

// 인수로전달한 숫자의 단을 콘솔에 출력하는 구구단() 함수를 작성하라.
function 구구단(num){
    for(var i=1; i<10; i++){
        console.log(num + ' x ' + i + ' = ' + (num * i));
    }
}
구구단(3);

// 문제: 2단부터 9단까지 포함한 <table> 문자열을 반환하는 함수
function 구구단전부(){
    var html = '';
    html += '<table>';
    html += '<tr>';
    for(var i=2; i<10; i++){
        if( i ===3 ){
            continue;
        }
        html += '<th>'+i+'단</th>';
    }
    html += '</tr>';
    for(var i=1; i<10; i++){
        if((i%2) === 1){
            html += '<tr class="odd">';
        } else {
            html += '<tr class="even">';
        }
        
        for(var j=2; j<10; j++){
            //if( j === i ){
            //    html += '<td>&nbsp;</td>';
            //    continue;
            //}
            if( j === 3 ){
                continue;
            }
            html += '<td>'+ j +' x ' + i + ' = ' + (j * i) + '</td>';
        }
        html += '</tr>';
    }
    
    html += '</table>';
    
    return html;
}
window.onload = function(){
    document.getElementById('box').innerHTML = 구구단전부();
}

// 문제: 전달된 인수 중 숫자만 모두 더하여 값을 반환하는 함수 sum()을 작성하라.
// 사용예: console.log(sum(1, 5, '+', 8)); // 14출력
function sum(){
    var result = 0;
    for(var i=0; i<arguments.length; i++) {
        if(typeof arguments[i] === 'number'){
            result += arguments[i];
        }
    }
    return result;
}
console.log(sum(1, 5, '+', 8));
console.log(sum(1, 5, '+', 8, 10, 20, 40));

// 문제: 첫 번째 인수로 전달된 배열에 나머지 인수를 모두 추가하는 함수 push()를 작성하라.
function push(){
    for(var i=1; i<arguments.length; i++){
        arguments[0].push(arguments[i]);
    }
}
var arr = ['a', 'b'];
var arr2 = ['c', 'd'];
push(arr, 1, 2, 3);
console.log(arr);
push(arr, 1, 2, 3, 4);
console.log(arr);
push(arr, arr2);
console.log(arr);

// break문 : 반복문이 break문을 만나면 즉시 반복을 멈춘다.
// continue문 : 반복문이 continue문을 만나면 현재의 코드 블럭을 건너뛴다.

// 내장 타입의 기능을 확장할 때는 생성자.prototype.메서드이름 = function(){ ... } 형태로 사용
String.prototype.toNumber = function(){
    return parseInt(this);
}
console.log('123'.toNumber());
console.log('1a1bc'.toNumber());

// 문제: 배열에서 가장 큰 숫자를 반환하는 prototype 메서드 max()를 정의하라.
Array.prototype.max = function(){
    var max = 0; //가장 큰수가 음수일 경우를 고려하지 않음.. 수정 필요
    for(var i=0; i<this.length; i++){
        if(typeof this[i] !== 'number'){
            continue;
        }
        if(max < this[i]){
            max = this[i];
        }
    }
    return max;
}
console.log([1,3,5].max());
console.log([10,3,'+',-2,11].max());

// 문제: 날짜 객체에서 가리키는 시각이 오전인지 오후인지 문자열로 반환하는 prototype 메서드 ampm()을 작성하라
Date.prototype.ampm = function(){
    if(this.getHours() < 12){
        return '오전';
    } else {
        return '오후';
    }
}
var date = new Date();
console.log(date.ampm()); //오후
var date = new Date(2015, 4, 12, 9);
console.log(date.ampm());