const btns= document.querySelectorAll('question-btn');
btns.forEach(function(btn){
btn.addEventListener("click",function(e){ // e is event object
    console.log(e.currentTarget.parentElement);
});
});