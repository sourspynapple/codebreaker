function codeGenerator() {
code = Math.floor(
Math.rand() * 10000 + 1);
document.getElementById("answer").innerHTML = 



<p id="random"></p>
<p id="demo"></p>
var rand_num = Math.random();

document.getElementById("random").innerHTML = rand_num;

document.getElementById("demo").innerHTML =
Math.floor(rand_num  * 10000) + 1;
