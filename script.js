const data=[
    {
        question:"1.What is the national animal of INDIA?",
        options:["Tiger","Lion","Monkey","Rhinosoros"],
        _answer:"Tiger"
    },
    {
        question:"2.Who is our Prime Minister of INDIA?",
        options:["Amith shah","pinarayi vijayan","stalin","Modi"],
        _answer:"Modi"
    },
    {
        question:"3.Which flower is national flower of INDIA?",
        options:["Rose","Mary Gold","Sunflower","Lotus"],
        _answer:"Lotus"
    },
    {
        question:"4.Who is called as rocket man of INDIA?",
        options:["APJ Abdul kalam","Nehru","rahul gandhi","Netaji"],
        _answer:"APJ Abdul kalam"
    }
]
let questionvar= document.querySelector('.question');
let submitbtnclick= document.getElementById('submitbtnID');
let answeroptions=document.getElementById('answer-optionID');
let score =document.getElementById('scoreID');

count=0
let result=0
console.log(questionvar)
let clicked=()=>{
    let selectedOption = document.querySelector('input[name="quizOption"]:checked');
  // If count > 0 (not first click), check previous answer
  if (count > 0) {
    if (!selectedOption) {
        alert("Please select an option before proceeding.");
        return; // Prevent moving to the next question
    }

    let userAnswer = selectedOption.value;
    let correctAnswer = data[count - 1]._answer;

    if (userAnswer === correctAnswer) {
        result += 1; // Add 1 point for correct answer
    } else {
        result += 0; // No point for wrong answer
    }
}

if (count<data.length) {
    questionvar.innerHTML = "<h2>" + data[count].question + "</h2>"; // display question

    console.log(data[count].question)

    answeroptions.innerHTML = " ";

    for(j = 0; j < data[count].options.length; j++) {
        answeroptions.innerHTML += `<label><input type="radio" name="quizOption" value="${data[count].options[j]}">${data[count].options[j]}</label><br>`; 
        console.log(data[count].options[j]);    
    }
    
    count=count+1;

}

else {    
    questionvar.innerHTML = `
    <h2 class="animate__animated animate__bounce" 
        style="color: #333652; text-align: center; 
               font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans'; 
               font-weight: bold;">
      Quiz Completed!
    </h2>
  `;
      answeroptions.innerHTML = "";
    submitbtnclick.style.display = "none";
    score.innerHTML = `<h1  style="color: #333652; text-align: center; 
               font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans'; 
               font-weight: bold;">Your score is ${result}</h1>`;
    // score.innerHTML = `<h1>Your Score: ${result}/${data.length}</h1>`;

    console.log(result);
}
}

window.onload = function () {
    clicked();
  };
  