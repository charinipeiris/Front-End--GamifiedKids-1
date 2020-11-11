//-------------------shapes 2-------------------

function show_shapesL1(Page1, Page2) {
    document.getElementById(Page1).style.display='block';
    document.getElementById(Page2).style.display='none'; 
  }

function test1_shapes2()
{
document.f1.clip1.src="/assets/images/a_circle.JPG";
document.f1.brown.src="/assets/images/trans.svg";
document.f1.red.src="/assets/images/a_rec.JPG";
document.f1.rw1.src="/assets/images/yay_bunny2.gif";
document.getElementById("a_rec").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; //kid gave right answer 
enableSubmit_Shapes2();

}
function test2_shapes2()
{
document.f1.clip1.src="/assets/images/a_rec.JPG";
document.f1.red.src="/assets/images/trans.svg";
document.f1.brown.src="/assets/images/a_circle.JPG";
document.f1.rw1.src="/assets/images/w.gif";
document.getElementById("a_circle").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; //kid gave wrong answer 
enableSubmit_Shapes2();
}

function test3_shapes2()
{
document.f1.clip2.src="/assets/images/a_triangle.JPG";
document.f1.rect.src="/assets/images/trans.svg";
document.f1.sqr.src="/assets/images/b_circle.JPG";
document.f1.rw2.src="/assets/images/yay_bunny2.gif";
document.getElementById("b_circle").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; //kid gave right answer 
enableSubmit_Shapes2();

}
function test4_shapes2()
{
document.f1.clip2.src="/assets/images/b_circle.JPG";
document.f1.sqr.src="/assets/images/trans.svg";
document.f1.rect.src="/assets/images/a_triangle.JPG";
document.f1.rw2.src="/assets/images/w.gif";
document.getElementById("a_tri").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; //kid gave wrong answer 
enableSubmit_Shapes2();
}

function test5_shapes2()
{
document.f1.clip3.src="/assets/images/b_triangle.JPG";
document.f1.leaf1.src="/assets/images/trans.svg";
document.f1.leaf2.src="/assets/images/a_square.JPG";
document.f1.rw3.src="/assets/images/w.gif";
document.getElementById("b_tri").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; //kid gave wrong answer 
enableSubmit_Shapes2();

}
function test6_shapes2()
{
document.f1.clip3.src="/assets/images/a_square.JPG";
document.f1.leaf2.src="/assets/images/trans.svg";
document.f1.leaf1.src="/assets/images/b_triangle.JPG";
document.f1.rw3.src="/assets/images/yay_bunny2.gif";
document.getElementById("a_sqa").style.pointerEvents = "none";  
document.getElementById("mark3").checked = true; //kid gave right answer 
enableSubmit_Shapes2();
}

$(document).ready(function(){
    $(document).on('click',"#question-shapes-g2",function () {
    var audio = document.getElementById("quest_audio_g2");
    if (audio.paused) audio.play();
    else audio.pause();
});
});


function enableSubmit_Shapes2(){
  var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
if (chk == 3){
  document.getElementById("submit").style.display="block";
  document.getElementById("arrow").style.display="block";
}
else{
  document.getElementById("submit").style.display="none";
}
}

//----------------------addition game --------

var k=580
var t
function put9(){
document.f3.txt3.value="";
document.f1.clip9.style.visibility="hidden";
document.f1.p9.style.left=k;
t=setTimeout("put9()",50);
k=k-5;
if(k<150)
{
clearTimeout(t);
document.f3.txt2.value=parseInt(document.f3.txt2.value)+1
}
}
var j=670
var t
function put8(){
document.f3.txt3.value="";
document.f1.clip8.style.visibility="hidden";
document.f1.p8.style.left=j;
t=setTimeout("put8()",50);
j=j-5;
if(j<210)
{
clearTimeout(t);
document.f3.txt2.value=parseInt(document.f3.txt2.value)+1
}
}

var h=640
var t
function put7(){
document.f3.txt3.value="";
document.f1.clip7.style.visibility="hidden";
document.f1.p7.style.left=h;
t=setTimeout("put7()",50);
h=h-5;
if(h<250)
{
clearTimeout(t);
document.f3.txt2.value=parseInt(document.f3.txt2.value)+1
}
}

var g=560
var t
function put6(){
document.f3.txt3.value="";
document.f1.clip6.style.visibility="hidden";
document.f1.p6.style.left=g;
t=setTimeout("put6()",50);
g=g-5;
if(g<150)
{
clearTimeout(t);
document.f3.txt2.value=parseInt(document.f3.txt2.value)+1
}
}

var f=600
var t
function put5(){
document.f3.txt3.value="";
document.f1.clip5.style.visibility="hidden";
document.f1.p5.style.left=f;
t=setTimeout("put5()",50);
f=f-5;
if(f<200)
{
clearTimeout(t);
document.f3.txt2.value=parseInt(document.f3.txt2.value)+1
}
}


var e=670
var t
function put4(){
document.f1.t1.value=eval(document.f1.t1.value)+1;
if(document.f1.t1.value==1)
{document.f1.clip5.style.visibility="visible";
document.f1.clip6.style.visibility="visible";
document.f1.clip7.style.visibility="visible";
document.f1.clip8.style.visibility="visible";
document.f1.clip9.style.visibility="visible";
}
document.f3.txt3.value="";


document.f1.clip4.style.visibility="hidden";
document.f1.p4.style.left=e;
t=setTimeout("put4()",50);
e=e-5;
if(e<210)
{
clearTimeout(t);
document.f3.txt1.value=parseInt(document.f3.txt1.value)+1
}
}
var d=580
var t
function put3(){
document.f1.t1.value=eval(document.f1.t1.value)+1;
if(document.f1.t1.value==1)
{document.f1.clip5.style.visibility="visible";
document.f1.clip6.style.visibility="visible";
document.f1.clip7.style.visibility="visible";
document.f1.clip8.style.visibility="visible";
document.f1.clip9.style.visibility="visible";
}
document.f3.txt3.value="";

document.f1.clip3.style.visibility="hidden";
document.f1.p3.style.left=d;
t=setTimeout("put3()",50);
d=d-5;
if(d<150)
{
clearTimeout(t);
document.f3.txt1.value=parseInt(document.f3.txt1.value)+1
}
}
var c=640
var t
function put2(){
document.f1.t1.value=eval(document.f1.t1.value)+1;
if(document.f1.t1.value==1)
{document.f1.clip5.style.visibility="visible";
document.f1.clip6.style.visibility="visible";
document.f1.clip7.style.visibility="visible";
document.f1.clip8.style.visibility="visible";
document.f1.clip9.style.visibility="visible";
}
document.f3.txt3.value="";


document.f1.clip2.style.visibility="hidden";
document.f1.p2.style.left=c;
t=setTimeout("put2()",50);
c=c-5;
if(c<250)
{
clearTimeout(t);
document.f3.txt1.value=parseInt(document.f3.txt1.value)+1
}
}

var b=600
var t
function put1(){
document.f1.t1.value=eval(document.f1.t1.value)+1;
if(document.f1.t1.value==1)
{document.f1.clip5.style.visibility="visible";
document.f1.clip6.style.visibility="visible";
document.f1.clip7.style.visibility="visible";
document.f1.clip8.style.visibility="visible";
document.f1.clip9.style.visibility="visible";
}
document.f3.txt3.value="";

document.f1.clip1.style.visibility="hidden";
document.f1.p1.style.left=b;
t=setTimeout("put1()",50);
b=b-5;
if(b<200)
{
clearTimeout(t);
document.f3.txt1.value=parseInt(document.f3.txt1.value)+1
}
}
function test(){document.f3.txt3.value=parseInt(document.f3.txt1.value)+parseInt(document.f3.txt2.value)}

