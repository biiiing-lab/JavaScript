// indexOf(n) n의 인덱스를 출럭
// indexOf(n, m) m은 시작 위치를 말함, 중복일 경우 뒷쪽에 있는 인덱스 사용
// lastIndexOf(n) 중복될 경우 끝에서부터 사용

let arr = [1, 2, 3 ,4, 3, 5, 6];
arr.indexOf(3); // 2
arr.indexOf(3, 3); // 4
arr.lastIndexOf(3); // 4