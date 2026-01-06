let maincontent=document.querySelector('#main-content');
let htmlCONTENT=document.querySelector('#html-content');
let csScontent=document.querySelector('#css-content');
let jscontent=document.querySelector('#js-content');
let cssbtn=document.querySelector('#cssbtn');
let about=document.querySelector("#about");




let htmlbtn=document.querySelector('#htmlbtn');
htmlbtn.onclick=function(){
    maincontent.style.display="none";
    htmlCONTENT.style.display="block";
    csScontent.style.display="";
    jsContent.style.display="none";
    about.style.display="none";
} 
cssbtn.onclick=function(){
    maincontent.style.display="none";
    csScontent.style.display="block";
    jscontent.style.display="none";
    htmlCONTENT.style.display="none";
 about.style.display="none";
}
if(cssbtn.onclick=="true"){
        csScontent.style.display="block";
 htmlCONTENT.style.display="none";
  about.style.display="none";
}
jsbtn.onclick=function(){
    maincontent.style.display="none";
    htmlCONTENT.style.display="block";
    csScontent.style.display="none";
    jsContent.style.display="none";
     about.style.display="none";
}


