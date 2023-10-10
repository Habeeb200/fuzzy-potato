let right = document.getElementById("right")
let notright = document.getElementById("notright")
buttons = document.querySelectorAll(".btn")
let answers = JSON.parse(localStorage.getItem("answers"))
let answerButtons = document.querySelectorAll(".btnn")
let alle = document.getElementById("alle")
display = " "
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        alle.innerHTML = " "
        btnNumber = button.dataset.number
        for(i=0;i<9;i++){
            if(i == btnNumber){
                correctAnswer= answers[i]
                answerButtons.forEach((answerButton)=>{
                    answerButton.addEventListener("click",()=>{
                        answerValue = answerButton.textContent
                        console.log(answerValue)
                        if(answerValue == correctAnswer){
                           alerty()
                           function alerty(){
                            alle.innerHTML = display
                            display+=`
                            <div>
                                <h3>Correct<i class="fa-solid fa-face-smile"style="color: green;"></i></h3>
                            </div>
                            `
                            }
                        }else{
                            alert() 
                            function alert(){
                                alle.innerHTML = display
                               display+= `
                                <div>
                                    <h3>Wrong try again<i class="fa-solid fa-face-sad-cry"style="color: red;"></i></h3>
                                </div>
                                `
                            }          
                        }
                    })
                })
            }
        }

    })
});



