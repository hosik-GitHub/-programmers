// Math.floor 메소드는 소수점을 제거하는 메소드이다.
// Math.floor 메소드를 사용한 이유는 return answer만 했을 경우
// 입력값 7,2에서 기대값이 3인데 두 변수를 나누니 3.5라는 결과값이 도출되어
// 테스트 결과에 부합하기 위해 Math.floor 메소드를 사용하였다.

function solution(num1, num2) {
    var answer = num1 / num2
    return Math.floor(answer);
}

