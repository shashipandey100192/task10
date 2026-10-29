 var jscolor;
 var jsnumber;
function allobjectload()
{
    jscolor = document.getElementById('back');
    jsnumber = document.querySelectorAll("div input,span");
    console.log(jsnumber);
}
allobjectload();


jscolor.addEventListener("input",()=>{
    var a = jscolor.value;
    console.log(a);
    document.bgColor=a;
});


jsnumber[0].addEventListener("input",()=>{
    // jsnumber[1].innerHTML=jsnumber[0].value;
    //  jsnumber[1].innerHTML=`this is my number ${jsnumber[0].value+100}`;
    // jsnumber[1].innerHTML=`this is my number ${jsnumber[0].value>=60? "00000" : jsnumber[0].value}`;
    jsnumber[1].innerHTML=`this is my number 
    ${jsnumber[0].value>=90? "999999" 
    :jsnumber[0].value>=80? "88888"
    :jsnumber[0].value>=70? "777777" 
    : jsnumber[0].value}`;
})
