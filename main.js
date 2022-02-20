const btns= document.querySelectorAll('question-btn');
btns.forEach(function(btn){
btn.addEventListener("click",function(e){ // e is event object
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
});
});