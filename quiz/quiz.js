var div = document.getElementById("mainid")
var text1 = document.getElementById("answer1")
var text2 = document.getElementById("answer2")
var text3 = document.getElementById("answer3")
var text4 = document.getElementById("answer4")
var text5 = document.getElementById("answer5")
var title2 = document.getElementById("title")
var title = document.getElementById("question")
var startbtn = document.getElementById("startbtnid")
var radiobtn1 = document.getElementById("radiobtn1")
var radiobtn2 = document.getElementById("radiobtn2")
var radiobtn3 = document.getElementById("radiobtn3")
var radiobtn4 = document.getElementById("radiobtn4")
var radiobtn5 = document.getElementById("radiobtn5")
let input = document.querySelector("input[name=answers]:checked")
var label = document.getElementById("contentid")
var score = 0;

const quiz = [
    {
        question: "Which game was the first fps game?",
        answers: {
            A: "Battlefield",
            B: "Doom",
            C: "Call Of Duty",
            D: "Counter Strike",
            E: "Wolfenstein"
        },
        correctanswer: "E"
    },
    {
        question: "When the first fps game was released?",
        answers: {
            A: 1990,
            B: 1800,
            C: 1992,
            D: 2003,
            E: 2000
        },
        correctanswer: "C"
    },
    {
        question: "What is the best selling videogame of all time?",
        answers: {
            A: "Minecraft",
            B: "Counter Strike",
            C: "Overwatch",
            D: "Skyrim",
            E: "Gta V"
        },
        correctanswer: "A"
    },
    {
        question: "What was the first mobile phone game?",
        answers: {
            A: "Clash Royale",
            B: "Clash Of Clans",
            C: "Hearthstone",
            D: "Tetris",
            E: "PUBG Mobile"
        },
        correctanswer: "D"
    },
    {
        question: "What is the best selling home console to date?",
        answers: {
            A: "Playstation 5",
            B: "Playstation 2",
            C: "Xbox 360",
            D: "Xbox Series X",
            E: "Nintedo"
        },
        correctanswer: "B"
    }
]


var i = -1;
var  notempty = true,
     empty = false; 

startbtn.addEventListener("click", nextQuiz);
function nextQuiz() {


  


    if (quiz.length) {

        

        if (radiobtn1.checked == true) {
            radiobtn1.checked = false;
            if (radiobtn1.value == quiz[i].correctanswer) {
                score++
            }
        } else if (radiobtn2.checked == true) {
            radiobtn2.checked = false;
            if (radiobtn2.value == quiz[i].correctanswer) {
                score++
            }
        } else if (radiobtn3.checked == true) {
            radiobtn3.checked = false;
            if (radiobtn3.value == quiz[i].correctanswer) {
                score++
            }
        } else if (radiobtn4.checked == true) {
            radiobtn4.checked = false;
            if (radiobtn4.value == quiz[i].correctanswer) {
                score++

            }
        } else if (radiobtn5.checked == true) {
            radiobtn5.checked = false;
            if (radiobtn5.value == quiz[i].correctanswer) {
                score++
            }
        }

    }

    
    i++
    
       
        title2.remove();
        startbtn.textContent = "NEXT";
        label.className = "newcontent";

        if (i < quiz.length) {

           
            title.textContent = quiz[i].question;
            text1.textContent = quiz[i].answers.A;
            text2.textContent = quiz[i].answers.B;
            text3.textContent = quiz[i].answers.C;
            text4.textContent = quiz[i].answers.D;
            text5.textContent = quiz[i].answers.E;

        } else {

            label.remove()
            let text = document.getElementById("hiddencontent");
            text.className = "hiddencontentclass"
            let P = document.createElement("p")
            P.id = "score"
            text.appendChild(P);
            title.remove()
            startbtn.remove();
            let retrybtn = document.getElementById("retrybtnid");
            P.innerHTML = "You have answer correct" + "<br/> "  + "<br/> "  + score + "/5" + "<br /> "  + "<br/> "  + "questions";
            
            retrybtn.className = "newretrybtn"
            retrybtn.addEventListener("click", reloadPage);
            function reloadPage() {
                location.reload()
            }

        }

       
            
        

    







}
