function init() {
 codeGenerator()
}

function codeGenerator() {
code = Math.floor(
Math.rand() * 10000 + 1);
document.getElementById("answer").innerHTML = code;

}
