

// 내가 풀었던 방식
function solution(num1, num2) {
    if(num1 === num2){
        return 1
    } else {
        return -1
    }
}

// 베스트 풀이 (삼항연산자 사용)

// 여기서 삼항연산자란 세 개의 피연산자를 받는 유일한 연산자이다.
// 앞에서부터 조건문, 물음표(?), 조건문이 참(true)일 경우 실행할 표현식, 콜론(:)
// 조건문이 거짓(false)일 경우 실행할 표현식

function solution(num1, num2) {
    var answer = num1 === num2 ? 1 : -1;
    return answer;
}