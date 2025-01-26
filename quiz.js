
function checkAnswer(){
    const correctAnswer = "4";
    const userAnswer = document.querySelector("quiz");

    if(correctAnswer == userAnswer){
        const feedback = document.getElementById("feedback");
        feedback.textContent = "Correct! Well done.";
    }else{
        const feedback = document.getElementById("feedback");
        feedback.textContent = "That's incorrect. Try again!";
    }
}

const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);