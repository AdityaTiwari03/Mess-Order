function dat(){
const d = new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let year = d.getFullYear();
let month = months[d.getMonth()];
document.getElementById("dat").innerHTML= (d.getDate()+ ", " + month+ ", " +year); 
}
function input1() {let A1 =  document.getElementById("placeholder1").value;
document.getElementById("name1").innerHTML = A1;}
function input2() {let A2 =  document.getElementById("placeholder2").value;
document.getElementById("name2").innerHTML = A2;}
function input3() {let A3 =  document.getElementById("placeholder3").value;
document.getElementById("name3").innerHTML = A3;}
function input4() {let A4 =  document.getElementById("placeholder4").value;
document.getElementById("name4").innerHTML = A4;}


const arr = [];
function selec(){
    a = document.getElementById("food").value;
    b = document.getElementById("dem").value;
    document.getElementById("dem").innerHTML += a + "<br>";
    arr.push(a);
};
function time() {
    const d = new Date();
    let Hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
document.getElementById("booking").innerHTML = (Hour + " : " + min + " : " + sec) ;
let A =  document.getElementById("name1").innerHTML;
let B = document.getElementById("name2").innerHTML;
let C = document.getElementById("name3").innerHTML;
let D = document.getElementById("name4").innerHTML;
 document.getElementById("order").innerHTML = (A+ " and "+ B +" and " +C +" and "+ D+ " are making " + arr );
 }
   
