let questionss= [
    {
        questionn: "Javascript was invented by who",
        answer1:"Ajayi Habeeb",
        answer2: "Zama9ja Enetertainment",
        answer3: "Madame Janet",
        answer4: " Brendan Eich",
        correct: "Brendan Eich",
        category:"1"
    },
    {
        questionn: "Who is the owner of alabian solutions",
        answer1:"bolaji",
        answer2: "Mr alabi",
        answer3: "david",
        answer4: " mr ernest",
        correct: "Mr alabi",
        category:"2"
    },
    {
        questionn: "Who talks the most in class",
        answer1:"bolaji",
        answer2: "Zama",
        answer3: "kuma",
        answer4: "chinonso",
        correct: "Zama",
        category:"3"
    },
    {
        questionn: "Who like to they do pass himself for class",
        answer1:"habeeb",
        answer2: "Zama",
        answer3: "kuma",
        answer4: "chinonso",
        correct: "Zama",
        category:"4"
    },
    {
        questionn: "Who is the best student in the history of alabian ",
        answer1:"habeeb",
        answer2: "habeeb",
        answer3: "habeeb",
        answer4: "habeeb",
        correct: "habeeb",
        category:"5"
    },
    {
        questionn: "Who is the most well dressed person",
        answer1:"icon",
        answer2: "kuma",
        answer3: "zama",
        answer4: "Mr seunfunmi",
        correct: "zama",
        category:"6"
    },
    {
        questionn: "Who is the most likely to japa anytime soon",
        answer1:"icon",
        answer2: "habeeb",
        answer3: "bolaji",
        answer4: "chinonso",
        correct: "icon",
        category:"7"
    },
    {
        questionn: "Who is the finest boy in class",
        answer1:"chinonso",
        answer2: "habeeb",
        answer3: "kuma",
        answer4: "zama",
        correct: "zama",
        category:"8"
    },
    {
        questionn: "Who is the best footballer of all time",
        answer1:"messi",
        answer2: "ronaldo",
        answer3: "pele",
        answer4: "maradona",
        correct: "messi",
        category:"9"
    },
]
let arr = []
questionss.forEach((questions)=>{
    arr.push(questions.correct)
    localStorage.setItem("answers",JSON.stringify(arr))
})
