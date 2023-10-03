let myCheck=document.getElementById('check1');
myCheck.addEventListener("click", ()=>{
    if(myCheck.checked){
        document.body.style.backgroundColor="#000";
        document.getElementById('title-click').style.color="#fff";
        document.querySelectorAll('.menu .line')[0].style.borderBottom="3px solid #fff";
        document.querySelectorAll('.menu .line')[1].style.borderBottom="3px solid #fff";
        document.querySelectorAll('.menu .line')[2].style.borderBottom="3px solid #fff";
        document.getElementById('content').style.backgroundColor="#000"
    }else{
        document.body.style.backgroundColor="#fff";
        document.getElementById('title-click').style.color="#000";
        document.querySelectorAll('.menu .line')[0].style.borderBottom="3px solid #000";
        document.querySelectorAll('.menu .line')[1].style.borderBottom="3px solid #000";
        document.querySelectorAll('.menu .line')[2].style.borderBottom="3px solid #000";
        document.getElementById('content').style.backgroundColor="#fff"
}
})