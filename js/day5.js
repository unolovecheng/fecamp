<<<<<<< HEAD
// 문제: 생일을 입력하면 만 나이에 따라 '어린이', '청소년', '청년', '장년이상'으로 출력하는 함수 
// 연령대()를 작성하라.
// 사용예: 연령대(1976, 3, 22) // 1976년 3월 22일인 사람의 연령대는?
// 조건: 10살 미만은 어린이, 10~18살 청소년, 19~40살 청년, 41살~ 장년이상
function age(y, m, d){
    var 생일 = new Date(y, m-1, d);
    var 오늘 = new Date();
    var 만나이 = 오늘.getFullYear() - y - 1;
    if(오늘.getMonth() >= m && 오늘.getDate() >= d){
        만나이 += 1;
    }
    return 만나이;
}
console.log(age(1986, 11, 26));

function 연령대(y, m, d){
    var 만나이 = age(y,m,d);
    if(만나이 < 10){
        return '어린이';
    } else if(만나이 < 19){
        return '청소년';
    } else if(만나이 < 41){
        return '청년';
    } else {
        return '장년이상';
    }
}
console.log(연령대(1986, 11, 26));
=======
function 요일이름(y, m, d) {
	var date = new Date(y, m-1, d);
	var day = date.getDay();

	if (day === 1) {
		return '월';
	} else if (day === 2) {
		return '화';
	} else if (day === 3) {
		return '수';
	} else if (day === 4) {
		return '목';
	} else if (day === 5) {
		return '금';
	} else if (day === 6 || day === 0) {
		return '주말';
	} else {
		return '모름';
	}
}

// 문제: 생일을 입력하면 만 나이를 구하는 age() 함수를 작성하라.
// 사용예: age(1976, 3, 22)
function age() {

}
console.log(age(1976, 3, 22));

// 문제: 생일을 입력하면 만 나이에 따라 '어린이', '청소년', '청년', '장년이상'으로
// 반환하는 함수 연령대()를 작성하라.
// 사용예: 연령대(1976, 3, 22) // 1976년 3월 22일인 사람의 연령대는?
// 조건: 10살 미만은 어린이, 10~18살 청소년, 19~40살 청년, 41살~ 장년이상
function 연령대() {

}
console.log(연령대(1998, 3, 2));
















>>>>>>> origin/gh-pages
