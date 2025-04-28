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

    // for(i=0;i<data.length;i++){
    //          answeroptions.innerHTML="<h2>"+ data[i].options+"</h2>"
    // }
    //         answeroptions.innerHTML="<h2>"+ data[i].options+"</h2>`"

    console.log(data[count])
    count=count+1;
 }else{
    questionvar.innerHTML = "<h2>Quiz Completed!</h2>"; // message after all questions
    submitbtnclick.disabled = true; // disable button after quiz ends
 }

}

clicked(count)