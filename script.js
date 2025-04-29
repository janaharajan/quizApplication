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
    }
]
let questionvar= document.querySelector('.question');
let submitbtnclick= document.getElementById('submitbtnID');
let answeroptions=document.getElementById('answer-optionID');

count=0
let result=0
console.log(questionvar)
let clicked=()=>{
if (count<data.length) {
    questionvar.innerHTML = "<h2>" + data[count].question + "</h2>"; // display question

    console.log(data[count].question)

    // Clear old options
    answeroptions.innerHTML = " ";

    // for(j=0;j<data[count].options.length;j++){
    //     answeroptions.innerHTML = `<label><input type="radio" name="quizOption" value="${data[count].options[j]}">${data[count].options[j]}</label>`; 
    /*                             ^  
                                   | need to add +=
    ..............................
    Code	Behavior	Result
    innerHTML =	Replaces content each time	Only last option shows
    innerHTML +=	Appends content each time	All options show correctly*/
    //console.log(data[count].options[j]);

    // }
    for(j = 0; j < data[count].options.length; j++) {
        answeroptions.innerHTML += `<label><input type="radio" name="quizOption" value="${data[count].options[j]}">${data[count].options[j]}</label><br>`; 
        console.log(data[count].options[j]);    
    }
    
    count=count+1;

}
else{    

    questionvar.innerHTML = '<h2 class="animate__animated animate__bounce"   style = "color: green;">Quiz Completed!</h2>';
    answeroptions.innerHTML = "";
    submitbtnclick.style.display = "none";
    
}
}

window.onload = function () {
    clicked();
  };
  