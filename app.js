const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];
const selectedOptions = [];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
// allInputs[0].checked = true;
console.log(allInputs[0])
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#prev").addEventListener(
    "click",
    function() {
        allInputs = document.querySelectorAll("input[type='radio']")
        index--;
        if (selectedOptions[index] == 'a') {
           const u = document.querySelector("#ans");
           document.getElementById("ans").style.height = "25px";
           u.innerHTML = "Your previous ans is : a";
        } else if (selectedOptions[index] == 'b') {
            const u = document.querySelector("#ans");
            document.getElementById("ans").style.height = "25px";
            u.innerHTML = "Your previous ans is : b";
        } else if (selectedOptions[index] == 'c') {
            const u = document.querySelector("#ans");
            document.getElementById("ans").style.height = "25px";
            u.innerHTML = "Your previous ans is : c";
        } else if (selectedOptions[index] == 'd') {
            const u = document.querySelector("#ans");
            document.getElementById("ans").style.height = "25px";
            u.innerHTML = "Your previous ans is : d";
        }

        loadQuestion(index); // Pass the index of the previous question
    }
);



document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    selectedOptions[index] = ans;
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}


const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}





loadQuestion(index);