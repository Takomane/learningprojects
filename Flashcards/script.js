// Questions
 const Questions = [{
     id: 0,
    q: "Inside which HTML Element do we put the Javascript?",
    a: [{ text: "<link>", isCorrect: false },
        { text: "<script>", isCorrect: true },
        { text: "<js>", isCorrect: false },
        { text: "<javascript>", isCorrect: false }
    ]
},
{
    id: 1,
    q: "How do you create a function?",
    a: [{ text: "function:myFunction()", isCorrect: false },
        { text: "function myFunction()", isCorrect: true },
        { text: "response.write(myFunction)", isCorrect: false },
        { text: "document.function(myFunction)", isCorrect: false }
    ]
},
{
    id: 2,
    q: "How do you write a conditional statement for executing some statements on if i is equal to 5?",
    a: [{ text: "if i==5 then true", isCorrect: false },
        { text: "if (i+=5)", isCorrect: false },
        { text: "if (i==5)", isCorrect: true },
        { text: "if (I==5)", isCorrect: false }
    ]
},
{
    id: 3,
    q: "How does a for loop start?",
    a: [{ text: "for (i=0; i<=5)", isCorrect: false },
        { text: "for (i=0;i<=5;i++)", isCorrect: false },
        { text: "for i=0;i<=5;i++", isCorrect: true },
        { text: "for (i<=5;i++)", isCorrect: false }
    ]
}
]

// Set start
let start = true;

//setting max and min
let max = Questions.length - 1;
let min = 0;

// Iterate
function iterate(id) {

// result display section
let result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


//question text
question.innerText = Questions[id].q;

for (let i = 0; i < Questions[id].a.length; i++) {
    console.log("loop");
    document.getElementById('option' + (i + 1)).innerText = Questions[id].a[i].text
    console.log(Questions[id].a[i].text);
    console.log('option' + (i + 1));
}

// true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

let selected = "";

// what happens when you press the answer
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "#1791b1";
    op2.style.backgroundColor = "#b80e65";
    op3.style.backgroundColor = "#b80e65";
    op4.style.backgroundColor = "#b80e65";
    selected = op1.value;
})

op2.addEventListener("click", () => {
    op1.style.backgroundColor = "#b80e65";
    op2.style.backgroundColor = "#1791b1";
    op3.style.backgroundColor = "#b80e65";
    op4.style.backgroundColor = "#b80e65";
    selected = op2.value;
})

op3.addEventListener("click", () => {
    op1.style.backgroundColor = "#b80e65";
    op2.style.backgroundColor = "#b80e65";
    op3.style.backgroundColor = "#1791b1";
    op4.style.backgroundColor = "#b80e65";
    selected = op3.value;
})

op4.addEventListener("click", () => {
    op1.style.backgroundColor = "#b80e65";
    op2.style.backgroundColor = "#b80e65";
    op3.style.backgroundColor = "#b80e65";
    op4.style.backgroundColor = "#1791b1";
    selected = op4.value;
})

//evaluate
const evaluate = document.getElementsByClassName("answer");

evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "Correct! You smarty pants ;^)";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "Incorrect Yah ding dong :^(";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate(0);
}

// Next
const next = document.getElementsByClassName('next')[0];
let id = Questions[Math.floor(Math.random() * Questions.length)]

next.addEventListener("click", () => {
start = false;
id++;
iterate(id);
}
)