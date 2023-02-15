function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    const denom = denom1 * numer2 + denom2 * numer1;
    const numer = numer1 * numer2
    
    let minNumber;
    if(denom < numer) {
        minNumber = denom;
    } else {
        minNumber = numer;
    }
    
    // 나누어 떨어지는 것은 나머지가 0인 것이다.
    while(true){
        if(denom % minNumber === 0) {
            if(numer % minNumber === 0) {
                return [denom / minNumber, numer / minNumber];
        }
    }
         minNumber = minNumber - 1;
}
   
    // minNumber에는 작은 수가 들어가 있음
    return answer; 
}

// 1. 분모 덧셈
// 2. 분자분모의 최대 공약수로 나누어준다.
// 2-1. 분자분모중 작은 수를 찾기
// 2-2. 작은 수를 분자분모로 나눠보기
// 2-2-1. 둘 다 나우어 떨어지면 그게 최대공약수
// 2-2-2. 나누어 떨어지지 않는다면 -1을 하고 2-2로 다시 돌아가서 반복하기