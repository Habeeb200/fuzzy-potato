let myForm= document.getElementById("mine")
let questions= [
    {
        questionn: "Javascript was invented by who",
        answer1:"Ajayi Habeeb",
        answer2: "Zama9ja Enetertainment",
        answer3: "Madame Janet",
        answer4: "Brendan Eich",
        correct: "Brendan Eich",
        category:"0"
    },
    {
        questionn: "Who is the owner of alabian solutions",
        answer1:"bolaji",
        answer2: "Mr alabi",
        answer3: "david",
        answer4: " mr ernest",
        correct: "Mr alabi",
        category:"1"
    },
    {
        questionn: "Who talks the most in class",
        answer1:"bolaji",
        answer2: "Zama",
        answer3: "kuma",
        answer4: "chinonso",
        correct: "Zama",
        category:"2"
    },
    {
        questionn: "Who like to they do pass himself for class",
        answer1:"habeeb",
        answer2: "Zama",
        answer3: "kuma",
        answer4: "chinonso",
        correct: "Zama",
        category:"3"
    },
    {
        questionn: "Who is the best student in the history of alabian ",
        answer1:"habeeb",
        answer2: "habeeb",
        answer3: "habeeb",
        answer4: "habeeb",
        correct: "habeeb",
        category:"4"
    },
    {
        questionn: "Who is the most well dressed person",
        answer1:"icon",
        answer2: "kuma",
        answer3: "zama",
        answer4: "Mr seunfunmi",
        correct: "zama",
        category:"5"
    },
    {
        questionn: "Who is the most likely to japa anytime soon",
        answer1:"icon",
        answer2: "habeeb",
        answer3: "bolaji",
        answer4: "chinonso",
        correct: "icon",
        category:"6"
    },
    {
        questionn: "Who is the finest boy in class",
        answer1:"chinonso",
        answer2: "habeeb",
        answer3: "kuma",
        answer4: "zama",
        correct: "zama",
        category:"7"
    },
    {
        questionn: "Who is the best footballer of all time",
        answer1:"messi",
        answer2: "ronaldo",
        answer3: "pele",
        answer4: "maradona",
        correct: "messi",
        category:"8"
    },
]
let i = 1
render = " "

questions.forEach((question)=>{
    render+=`
    <div class="numb" data-number="${question.category}" id="numb">
        <h3 style="font-weight: bold; margin-bottom: 30px;">${question.questionn}</h3>
        <div>
            <button class="btn border border-primary w-100 mb-2 btnn">${question.answer1}</button><br>
            <button class="btn border border-success w-100 mb-2 btnn">${question.answer2}</button>
            <button class="btn border border-warning w-100 mb-2 btnn">${question.answer3} </button>
            <button class="btn border border-secondary w-100 btnn" style="margin-bottom: 20px; ">${question.answer4}</button>
        </div>
    </div>
    `
     myForm.innerHTML = render
     i++
     
})
let click = document.getElementById("click")
let  numb = document.querySelectorAll(".numb")
buttons = document.querySelectorAll(".btnn1")
let questionButtons = document.querySelectorAll(".questionButton")
buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        e.preventDefault()
        click.innerHTML= " "
        btnValue = button.dataset.number
        numb.forEach((num)=>{
            numValue = num.dataset.number
            if(btnValue == numValue){
                num.classList.remove("hidden")
            }else{
                num.classList.add("hidden")

            }
        })
    })
})

