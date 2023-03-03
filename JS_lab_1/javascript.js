// Hàm tạo số ngẫu nhiên từ min đến max
function randomLuckyNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setTimeout(function(){
    var luckyArr = [];
    var numArr = [];
    var a = randomLuckyNumber(1, 55);
    //Hệ thống tạo 6 số lucky number và gán vào mảng luckyArr
    var i = 0;
    while (i < 6){
        var tmp = randomLuckyNumber(1, 55);
        luckyArr[i] = tmp;
        i++;
    }
    console.log(luckyArr);
    //Người chơi nhập số và gán vào mảng numArr 
    var j = 0;
    while (j < 6){
        var num = prompt("Mời bạn nhập số muốn chọn trong khoảng từ 01 đến 55:");
        num = parseInt(num);
        while (num > 55 || num < 1 || isNaN(num)){
            num = prompt("Mời nhập lại số trong khoảng từ 01 đến 55:");
            num = parseInt(num);
        }
        numArr[j] = num;
        console.log(numArr);
        j++;
    }
    var count = 0;
    for (var i = 0; i < 6; i++){
        if (numArr[i] == luckyArr[i]){
            count ++; //đếm số lượng num mà người chơi chọn trùng với số lượng lucky number
        }
    }
    // Trúng 3 số: 200.000
    // Trúng 4 số: 1.700.000
    // Trúng 5 số: 82.500.000
    // Trúng 6 số: Jackpot ( ~ 30 tỷ)
    if (count < 3) {
        alert("Chúc bạn may mắn lần sau!")
    }
    else if (count == 3) {
        alert("Chúc mừng bạn trúng giải thưởng trị giá 200.000đ!");
    }
    else if (count == 4) {
        alert("Chúc mừng bạn trúng giải thưởng trị giá 1.700.000đ!")
    }
    else if (count == 5) {
        alert("Chúc mừng bạn trúng giải thưởng trị giá 82.500.000đ!")
    }
    else {
        alert("Chúc mừng bạn trúng giải Jackpot trị giá 30 tỷ VNĐ!!!")
    } 
}, 3000);

