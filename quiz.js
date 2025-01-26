
function checkAnswer(){
    const correctAnswer = "4";
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    

    if(selectedAnswer){
        const userAnswer = selectedAnswer.value;
        if (userAnswer === correctAnswer){
            const feedback = document.getElementById("feedback");
            feedback.textContent = "Correct! Well done.";
        }else{
            const feedback = document.getElementById("feedback");
            feedback.textContent = "That's incorrect. Try again!";
        }
    }else{
        const feedback = document.getElementById("feedback");
        feedback.textContent = "Please select an answer.";
    }
    
}

const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);