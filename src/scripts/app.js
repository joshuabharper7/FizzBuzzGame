const userInput = document.getElementById("userInput");
const submitButton = document.getElementById("btnSubmit");
const answerParagraph = document.getElementById("answer");

submitButton.addEventListener("click", function(){
    let userResponse = userInput.value;
    if(userResponse % 3 == 0 && userResponse % 5 == 0){
        answerParagraph.innerText = "FizzBuzz";
    }
    else if(userResponse % 3 == 0){
        answerParagraph.innerText = "Fizz";
    }
    else if(userResponse % 5 == 0){
        answerParagraph.innerText = "Buzz";
    }
    else{
        answerParagraph.innerText = userResponse;
    }

    
});

// for(let i = 1; i <= 100; i++){
    
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz");
//     }
//     else if(i % 3 == 0){
//         console.log("Fizz");
//     }else if(i % 5 == 0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }