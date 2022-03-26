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
  var x = Math.round(document.querySelector("#inputX").value * 1);
  var n = Math.round(document.querySelector("#inputN").value * 1);

  var result = sumCal(x, n);
  document.querySelector("#footer-Sum").innerHTML = "Tổng là: " + result;
};

function sumCal(x, n) {
  var sum2 = 0;
  for (var i = 1; i <= n; i++) {
    sum2 += x * i;
  }
  return sum2;
}

/*Bài 3:
 */
document.querySelector("#multiBtn").onclick = function () {
  var number3 = Math.round(document.querySelector("#number3").value * 1);
  var result = "";
  if (number3 < 0) {
    result = "Giai thừa của số âm không tồn tại.";
  } else {
    factorialResult = factorialCal(number3);
    result = "Giai thừa của " + number3 + " là " + factorialResult;
  }
  document.querySelector("#footer-multi").innerHTML = result;
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
  var divContainer = "<div></div>";
  for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      divContainer += '<div class="pt-2 pb-2 pl-2 bg-danger">Div lẻ ';
      divContainer += i;
      divContainer += "</div>";
    } else {
      divContainer += '<div class="pt-2 pb-2 pl-2 bg-primary">Div chẵn ';
      divContainer += i;
      divContainer += "</div>";
    }
  }
  divContainer += "</div>";
  document.querySelector("#footer-primeNumb").innerHTML = divContainer;
};

/*Bài 5:
 */

document.querySelector("#printBtn").onclick = function () {
  var printedNumb = Math.round(document.querySelector("#number5").value * 1);
  var result5 = "<div>";
  var i = 1;
  while (i <= printedNumb) {
    result5 += i;
    result5 += " ";
    i++;
  }
  result5 += "</div>";

  document.querySelector("#footer-print").innerHTML =
    "Các số nguyên từ 1 tới " + printedNumb + " là: " + result5;
};

/*Bài 5 (thêm):
 */
document.querySelector("#primeNumbBtn").onclick = function () {
  var number5 = document.querySelector("#nunberi").value * 1;

  if (number5 < 2) {
    numberDisplay = "<div>Không có số nguyên tố nào tồn tại trong khoảng này.</div>";
  } else {
    var primeList = primeFind(number5);
  }

  document.querySelector("#footer-primeNumb").innerHTML ="<div>Các số nguyên tố trong khoảng này là " + primeList + "</div>";
};

function primeFind(number) {
  var primeArray = [];
  for (var i = 2; i <= number; i++) {

    var isPrime = primeCheck(i);
    if (isPrime) {
      primeArray.push(i);
    } else {
      continue;
    }
  }
  return primeArray;
}

function primeCheck(i) {
  var isPrime = true;
  for (var j = 2; j < i; j++) {
    if (i % j !== 0) {
      isPrime = true;
    } else {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}