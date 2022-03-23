/*Bài 1:
 */
var number1 = 0;
var sum1 = 0;
while (sum1 <= 10000) {
  number1++;
  sum1 += number1;
}
document.getElementById("footer-finding").innerHTML =
  "Số nguyên dương nhỏ nhất là: " + number1;

/*Bài 2:
 */
document.querySelector("#sumBtn").onclick = function () {
  var x = document.querySelector("#inputX").value * 1;
  var n = document.querySelector("#inputN").value * 1;

  var result = sumCal(x, n);
  document.querySelector("#footer-Sum").innerHTML = "Tổng là: " + result;
};

function sumCal(x, n) {
  var sum2 = 0;
  for (var i = 1; i <= n; i++) {
    sum += x * i;
  }
  return sum2;
}

/*Bài 3:
 */
document.querySelector("#multiBtn").onclick = function () {
  var number3 = document.querySelector("#number3").value * 1;

  var result = factorialCal(number3);
  document.querySelector("#footer-multi").innerHTML = "Kết quả là: " + result;
};

function factorialCal(n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

/*Bài 4:
 */
document.querySelector("#divBtn").onclick = function () {
    var divContainer= '<div></div>';
    for (var i = 1; i <= 10; i++) {
        if(i%2 === 0) {
            divContainer += '<div class="pt-2 pb-2 pl-2 bg-danger">Div lẻ ';
            divContainer += i
            divContainer +='</div>';
        } else {
            divContainer += '<div class="pt-2 pb-2 pl-2 bg-primary">Div chẵn ';
            divContainer += i
            divContainer +='</div>';
        }
    }
    divContainer += '</div>';
    document.querySelector("#footer-primeNumb").innerHTML = divContainer;
};

/*Bài 5 (thêm):
 */
document.querySelector("#primeNumbBtn").onclick = function () {
    var number5 = document.querySelector('#nunber5').value * 1;
    var numberDisplay= '<div>';
    for (var i = 2; i <= number5; i++) {
        if((i % 1) === 0 && (i % 2) !== 0 && (i % 3) !== 0 && (i % 5) !== 0 )  {
            numberDisplay += i;
            numberDisplay += ' ';
        }
    }
    numberDisplay += '</div>';
    document.querySelector("#footer-primeNumb").innerHTML = numberDisplay;
};