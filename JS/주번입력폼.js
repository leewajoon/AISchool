function input_check() {

    var total = 0;
    var ck = 2;
    var ck_number = 11
    var number1 = prompt("주민등록번호를입력하세요!!");
    var number2 = number1.replace('-', '');

    console.log(number1, number2)
    for (var i = 0; i < number2.length - 1; i++) {
        total += number2[i] * ck;
        ck++
        if (ck == 10) {
            ck = 2;
        }

    }
    total = total % 11;
    ck_number -= total;

    if (number2[number2.length - 1] == ck_number % 10) { //number2.length - 1 = 12  렌스 - 1 = 인덱스
        console.log(`${number1} (O)`);
    } else {
        console.log(`${number1}(X)`);
    }
}