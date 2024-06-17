var lotto = [];

while(lotto.length < 6) {

    var num = parseInt(Math.random() * 45 + 1); // 45까지의 수를 가지고 옴

    if(lotto.indexOf(num) == -1) {
        lotto.push(num);
    } // 지금 만든 배열에 중복숫자가 없으면
}
lotto.sort((a, b) => a - b);

document.write("<div class='ball ball1'>" + lotto[0] + "</div>");
document.write("<div class='ball ball2'>" + lotto[1] + "</div>");
document.write("<div class='ball ball3'>" + lotto[2] + "</div>");
document.write("<div class='ball ball4'>" + lotto[3] + "</div>");
document.write("<div class='ball ball5'>" + lotto[4] + "</div>");
document.write("<div class='ball ball6'>" + lotto[5] + "</div>");