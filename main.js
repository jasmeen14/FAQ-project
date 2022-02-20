const questions = document.querySelectorAll(".question");

questions.forEach(question => {
   // console.log(question);
  
   question.addEventListener("click",() =>{
   question.classList.toggle("active");
    
   })

   })
