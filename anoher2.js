buttons = document.querySelectorAll(".btn")
let answers = JSON.parse(localStorage.getItem("answers"))
let answerButtons = document.querySelectorAll(".btnn")
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
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
                            alert('Correct', 'success')
                            function alert(message, type) {
                                var wrapper = document.createElement('div')
                                wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
                                
                                alertPlaceholder.append(wrapper)
                                }
                            answerButton.classList.add("correct")

                        }else{
                            answerButton.classList.add("wrong")
                            alert('Wrong', 'danger')
                            function alert(message, type) {
                                var wrapper = document.createElement('div')
                                wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
                                
                                alertPlaceholder.append(wrapper)
                                }
                        }
                    })
                })
            }
        }

    })
});

