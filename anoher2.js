let right = document.getElementById("right")
let notright = document.getElementById("notright")
buttons = document.querySelectorAll(".btn")
let answers = JSON.parse(localStorage.getItem("answers"))
let answerButtons = document.querySelectorAll(".btnn")
let alle = document.getElementById("alle")
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        btnNumber = button.dataset.number
        for(i=0;i<9;i++){
            if(i == btnNumber){
                correctAnswer= answers[i]
                answerButtons.forEach((answerButton)=>{
                    answerButton.addEventListener("click",()=>{
                        answerValue = answerButton.textContent
                        if(answerValue == correctAnswer){
                           alerty()
                        }else{
                            alert()           
                        }
                    })
                })
            }
        }

    })
});

display = " "
function alert(){
    alle.innerHTML = display
   display+= `
    <div>
        <h3>Wrong try again<i class="fa-solid fa-face-sad-cry"style="color: red;"></i></h3>
    </div>
    `
}
function alerty(){
    alle.innerHTML = display
    display+=`
    <div>
        <h3>Correct<i class="fa-solid fa-face-smile"style="color: yellow;"></i></h3>
    </div>
    `
}