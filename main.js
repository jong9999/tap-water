
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
let num21 = document.getElementById("tap21").value;
let num22 = document.getElementById("tap22").value;
let num23 = document.getElementById("tap23").value;
let num24 = document.getElementById("tap24").value;



let result1 = parseFloat(num1) * parseFloat(num2) * 13;
let result2 = parseFloat(num3) * parseFloat(num4) * 6;
let result3 = parseFloat(num5) * parseFloat(num6) * 9.5;
let result4 = parseFloat(num7) * parseFloat(num8) * 3;
let result5 = parseFloat(num9) * parseFloat(num10) * 12;
let result6 = parseFloat(num11) * parseFloat(num12) * 7;
let result7 = parseFloat(num13) * parseFloat(num14) * 0.5;
let result8 = parseFloat(num15) * parseFloat(num16) * 9.5;
let result9 = parseFloat(num17) * parseFloat(num18) * 9.5;
let result10 = parseFloat(num19) * parseFloat(num20) * 5;
let result11 = parseFloat(num21) * parseFloat(num22) * 0.5;
let result12 = parseFloat(num23) * parseFloat(num24) * 160;





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
document.getElementById("water11").value = `${result11} L`
document.getElementById("water12").value = `${result12} L`



let result = result1+result2+result3+result4+result5+result6+result7+result8+result9+result10+result11+result12;

if (result > 0){
  document.getElementById("sum").value = `${result} L`;
}else {
  document.getElementById("sum").value = "숫자를 입력하세요.";
}

//화장실
if (result1 == 0) {
  document.getElementById("score1").value = 0
}else if(result1 > 1) {
  document.getElementById("score1").value = 5
} else{
  document.getElementById("score1").value = "숫자를 입력하세요"
}

//절수기 화장실
if (result2 == 0) {
  document.getElementById("score2").value = 0
}else if (result2 > 1) {
  document.getElementById("score2").value = 1
} else {
  document.getElementById("score2").value = "숫자를 입력하세요"
}

//손씻기
if (result3 == 0) {
  document.getElementById("score3").value = 0
}else if (result3 > 1) {
  document.getElementById("score3").value = 5
} else {
  document.getElementById("score3").value = "숫자를 입력하세요"
}

//손씻기 세숫대야
if (result4 == 0) {
  document.getElementById("score4").value = 0
}else if (result4 > 1) {
  document.getElementById("score4").value = 1
} else {
  document.getElementById("score4").value = "숫자를 입력하세요"
}

//샤워
if (result5 == 0){
  document.getElementById("score5").value = 0
}else if (result5 > 1 && result5 < 71) {
  document.getElementById("score5").value = 1
}else if (result5 > 71 && result5 <= 120) {
  document.getElementById("score5").value = 5
} else if(result5 >= 121){
  document.getElementById("score5").value = 10
} else {
  document.getElementById("score5").value = "숫자를 입력하세요"
}

//절수기 샤워
if (result6 == 0){
  document.getElementById("score6").value = 0
}else if(result6 > 1 && result6 <= 70) {
  document.getElementById("score6").value = 1
}else if (result6 > 71 && result6 <= 84) {
  document.getElementById("score6").value = 3
} else if (result6 >= 105){
  document.getElementById("score6").value = 6
} else {
  document.getElementById("score6").value = "숫자를 입력하세요"
}

//양치 컵사용
if (result7 == 0) {
  document.getElementById("score7").value = 0
}else if (result7 >= 0.5) {
  document.getElementById("score7").value = 1
} else {
  document.getElementById("score7").value = "숫자를 입력하세요"
}

//양치 컵 미사용
if (result8 == 0) {
  document.getElementById("score8").value = 0
}else if (result8 > 1) {
  document.getElementById("score8").value = 5
} else {
  document.getElementById("score8").value = "숫자를 입력하세요"
}

//설거지
if (result9 == 0) {
  document.getElementById("score9").value = 0
}else if (result9 > 1 && result9 <= 100) {
  document.getElementById("score9").value = 3
}else if (result9 > 101 && result9 < 190){
  document.getElementById("score9").value = 5
}else if (result9 > 191){
  document.getElementById("score9").value = 10
}else {
  document.getElementById("score9").value = "숫자를 입력하세요"
}

//설거지 통 이용
if (result10 == 0) {
  document.getElementById("score10").value = 0
}else if (result10 > 1 && result10 <= 55) {
  document.getElementById("score10").value = 3
}else if (result10 >= 56 && result10 <= 120){
  document.getElementById("score10").value = 5
}else if (result10 >= 121){
  document.getElementById("score10").value = 10
}else {
  document.getElementById("score10").value = "숫자를 입력하세요"
}

//반려식물 물주기
if (result11== 0){
  document.getElementById("score11").value = 0
}else if (result11 == 1 || result11 <= 1.5) {
  document.getElementById("score11").value = 1
}else if (result11 > 1.5) {
  document.getElementById("score11").value = 3
} else {
  document.getElementById("score11").value = "숫자를 입력하세요"
}

//세탁
if (result12 == 0){
  document.getElementById("score12").value = 0
}else if (result12 > 1 && result12 <= 40) {
  document.getElementById("score12").value = 1
}else if (result12 >= 40 && result12 <=80) {
  document.getElementById("score12").value = 5
} else if (result12 >= 81){
  document.getElementById("score12").value = 10
} else {
  document.getElementById("score12").value = "숫자를 입력하세요"
}

let a = parseFloat(score1.value);
let b = parseFloat(score2.value);
let c = parseFloat(score3.value);
let d = parseFloat(score4.value);
let e = parseFloat(score5.value);
let f = parseFloat(score6.value);
let g = parseFloat(score7.value);
let h = parseFloat(score8.value);
let i = parseFloat(score9.value);
let j = parseFloat(score10.value);
let k = parseFloat(score11.value);
let l = parseFloat(score12.value);

document.getElementById("sum1").value = a+b+c+d+e+f+g+h+i+j+k+l;
}



function multi2 () {
  let co1 = document.getElementById("cup1").value;
  let co2 = document.getElementById("cup2").value;
  let co3 = document.getElementById("cup3").value;


  let coto1 = parseFloat(co1) * 0.047;
  let coto2 = parseFloat(co2) * 62;
  let coto3 = parseFloat(co3) * 61.5;


  document.getElementById("co2-1").value = `${coto1} g`
  document.getElementById("co2-2").value = `${coto2} g`
  document.getElementById("co2-3").value = `${coto3} g`


  let allco2 = coto1+coto2+coto3;

  if (allco2 > 0){
    document.getElementById("sum2").value = `${allco2} g`;
  }else {
    document.getElementById("sum2").value = "숫자를 입력하세요.";
  }

}