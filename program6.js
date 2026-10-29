var a;

function abc()
{
    // var a = document.getElementById("two");
    // var a = document.getElementsByClassName("three");
    // var a = document.getElementsByTagName("p");
    // var a = document.querySelector(".three,h1,p,ul li");
     a = document.querySelectorAll(".three,h1,p,ul li");
    console.log(a);
    console.log(typeof a)
    // console.log(a[1])
}
abc();


a[1].addEventListener("click",()=>{
    alert("welcome to javascript");
});