// Questions will be asked
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

// Iterate
function iterate(id) {

// Getting the result display section
let result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");

// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('option1');
const op2 = document.getElementById('option2');
const op3 = document.getElementById('option3');
const op4 = document.getElementById('option4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

let selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "#1791b1";
    op2.style.backgroundColor = "#b80e65";
    op3.style.backgroundColor = "#b80e65";
    op4.style.backgroundColor = "#b80e65";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "#b80e65";
    op2.style.backgroundColor = "#1791b1";
    op3.style.backgroundColor = "#b80e65";
    op4.style.backgroundColor = "#b80e65";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "#b80e65";
    op2.style.backgroundColor = "#b80e65";
    op3.style.backgroundColor = "#1791b1";
    op4.style.backgroundColor = "#b80e65";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "#b80e65";
    op2.style.backgroundColor = "#b80e65";
    op3.style.backgroundColor = "#b80e65";
    op4.style.backgroundColor = "#1791b1";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("answer");

// Evaluate method
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
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
let id = 0;

next.addEventListener("click", () => {
start = false;
 if (id < 3) { //sets the amount of questions. As you add more questions be sure to add the highest id number here
    id++;
    iterate(id); 
    console.log(id);
 }
})