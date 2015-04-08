var str1 = 'A regular expression is a special sequence of characters that helps you match or find other strings or sets of strings, using a specialized syntax held in a pattern.';
var str2 = '국내지점 서울/인천/경기 공항 지점. 인천지점. 지도보기. 주소, 인천광역시 남동구 미래로 49 제일은혜빌딩 2층. 연락처, TEL : 1588-8000. FAX : 032-437-0367.';
var str3 = '<h1>블리자드 엔터테인먼트: 연락처</h1><p>(한국) 대표 번호: 1644-0727</p><p>US Account & Billing: 1-800-592-5499</p><p>Australia Account & Billing: 1-800-041-378</p><p>Singapore Account & Billing: 1-800-2549-9273</p><p>Mexico Account & Billing: 001-888-578-7628</p><p>Argentina Account & Billing: 0800-333-0778</p><p>Chile Account & Billing: 1230-020-5554</p><p>Technical Support: 1-949-955-1382</p>';

var regex = new RegExp('[0-9]{4}-[0-9]{4}');
console.log(regex.test(str1));
console.log(regex.exec(str3)); // 일치하는 부분이 있으면 배열같은 것으로 리턴(가장 앞에 있는 부분을), 없으면 null을 리턴

var regex = /\d+(\-\d+)+/g;


console.log(str3.replace(regex, '<em>$&</em>'));

var regex = /<(\/?)p>/g;
console.log(str3.replace(regex, '<$1div>'));

/*
for(var i=0; i<document.images.length; i++){
    var width = document.images[i].getAttribute('width');
    var height = document.images[i].getAttribute('height');
    if(!width || !height) {
        continue;
    }
    var src = 'https://placekitten.com/'+width+'/'+height;
    document.images[i].setAttribute('src', src);
}

var elem = document.querySelectorAll('h2');
for(var i=0; i<elem.length; i++){
    elem[i].addEventListener('click', function(event){
        event.stopPropagation();
        alert(this.textContent); 
    });
}
var body = document.querySelector('body');
body.addEventListener('click', function(event){
   alert('클릭'); 
});
*/

// jQuery는 크게 두 단계로 사용된다.
// 1. 원하는 엘리먼트를 선택하고
// 2. 원하는 기능을 사용함
//jQuery('p code').css('color', 'blue');

jQuery(function($){ // 문서를 모두 읽어들인 다음 코드를 실행.. jQuery(document).ready(function($){의 축소형?
    var codeColor = $('p code').css('color');
    console.log(codeColor);
    $('#box').on('click', function(event){
        var width = $(this).width();
        var height = $(this).height();
        if(event.shiftKey){
            $(this).width(width - 10);
            $(this).height(height - 10);
        } else {
            $(this).width(width + 10);
            $(this).height(height + 10);
        }
    });
});
