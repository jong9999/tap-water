
function multi() {
let num1 = document.getElementById("tap1").value;
let num2 = document.getElementById("tap2").value;
let num3 = document.getElementById("tap3").value;
let num4 = document.getElementById("tap4").value;
let num5 = document.getElementById("tap5").value;
let num6 = document.getElementById("tap6").value;
let num7 = document.getElementById("tap7").value;
let num8 = document.getElementById("tap8").value;
let num9 = document.getElementById("tap9").value;
let num10 = document.getElementById("tap10").value;
let num11 = document.getElementById("tap11").value;
let num12 = document.getElementById("tap12").value;
let num13 = document.getElementById("tap13").value;
let num14 = document.getElementById("tap14").value;
let num15 = document.getElementById("tap15").value;
let num16 = document.getElementById("tap16").value;
let num17 = document.getElementById("tap17").value;
let num18 = document.getElementById("tap18").value;
let num19 = document.getElementById("tap19").value;
let num20 = document.getElementById("tap20").value;

let result1 = parseInt(num1) * parseInt(num2) * 12;
let result2 = parseInt(num3) * parseInt(num4) * 12;
let result3 = parseInt(num5) * parseInt(num6) * 10;
let result4 = parseInt(num7) * parseInt(num8) * 10;
let result5 = parseInt(num9) * parseInt(num10) * 10;
let result6 = parseInt(num11) * parseInt(num12) * 0.5;
let result7 = parseInt(num13) * parseInt(num14) * 10;
let result8 = parseInt(num15) * parseInt(num16) * 160;
let result9 = parseInt(num17) * parseInt(num18) * 10;
let result10 = parseInt(num19) * parseInt(num20) * 10;

document.getElementById("water1").value = `${result1} L`
document.getElementById("water2").value = `${result2} L`
document.getElementById("water3").value = `${result3} L`
document.getElementById("water4").value = `${result4} L`
document.getElementById("water5").value = `${result5} L`
document.getElementById("water6").value = `${result6} L`
document.getElementById("water7").value = `${result7} L`
document.getElementById("water8").value = `${result8} L`
document.getElementById("water9").value = `${result9} L`
document.getElementById("water10").value = `${result10} L`

let result = result1+result2+result3+result4+result5+result6+result7+result8+result9+result10;

if (result > 0){
  document.getElementById("sum").value = `${result} L`;
}else {
  document.getElementById("sum").value = "숫자를 입력하세요.";
}

if (result1 == 0 || result1 > 13) {
  document.getElementById("score1").value = 1
}else if  (result1 < 61) {
  document.getElementById("score1").value = 5
} else {
  document.getElementById("score1").value = 10
}

if (result2 == 0 || result2 < 13) {
  document.getElementById("score2").value = 1
}else if (result2 < 25) {
  document.getElementById("score2").value = 3
} else {
  document.getElementById("score2").value = 10
}

if (result3 == 0 || result3 < 31) {
  document.getElementById("score3").value = 1
}else if (result3 < 81) {
  document.getElementById("score3").value = 5
} else {
  document.getElementById("score3").value = 10
}

if (result4 == 0 || result4 < 51) {
  document.getElementById("score4").value = 1
}else if (result4 < 101) {
  document.getElementById("score4").value = 5
} else {
  document.getElementById("score4").value = 10
}

if (result5 == 0 || result5 < 151) {
  document.getElementById("score5").value = 1
} if (result5 < 301) {
  document.getElementById("score5").value = 5
} else {
  document.getElementById("score5").value = 10
}

if (result6 == 0 || result6 < 8) {
  document.getElementById("score6").value = 1
}if (result6 < 16) {
  document.getElementById("score6").value = 5
} else {
  document.getElementById("score6").value = 10
}

if (result7 == 0 || result7 < 51) {
  document.getElementById("score7").value = 1
}else if (result7 < 101) {
  document.getElementById("score7").value = 5
} else {
  document.getElementById("score7").value = 10
}

if (result8 == 0 || result8 < 41) {
  document.getElementById("score8").value = 1
}else if (result8 < 82) {
  document.getElementById("score8").value = 5
} else {
  document.getElementById("score8").value = 10
}

if (result9 == 0 || result9 < 301) {
  document.getElementById("score9").value = 1
}else if (result9 < 501) {
  document.getElementById("score9").value = 5
} else {
  document.getElementById("score9").value = 10
}

if (result10 == 0 || result10 < 11) {
  document.getElementById("score10").value = 1
}else if (result10 < 41) {
  document.getElementById("score10").value = 5
} else {
  document.getElementById("score10").value = 10
}

let a = parseInt(score1.value);
let b = parseInt(score2.value);
let c = parseInt(score3.value);
let d = parseInt(score4.value);
let e = parseInt(score5.value);
let f = parseInt(score6.value);
let g = parseInt(score7.value);
let h = parseInt(score8.value);
let i = parseInt(score9.value);
let j = parseInt(score10.value);

document.getElementById("sum1").value = a+b+c+d+e+f+g+h+i+j;



}

