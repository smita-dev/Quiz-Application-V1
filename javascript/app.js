let text;
let selectedIndex=-1;
let queIndex=0;
let arr;
let ansArr=[];
let queCount=0;
let result;
let email;
let username;
let password;
//this function will get called after loading html document
//this function is for getting question's data from database
$(document).ready(function(){
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://quizzyapplication.herokuapp.com/",
        success: function(data){
            result=data;
            getQues();
        },
        error:function(err){
            console.log(err);
        }
    });

})

//this question will display question and option data
function getQues(){
    queCount++;
    $(".question").text(result[0].questions[queIndex].question);
    $(".option1").text(result[0].questions[queIndex].options[0]);
    $(".option2").text(result[0].questions[queIndex].options[1]);
    $(".option3").text(result[0].questions[queIndex].options[2]);
    $(".option4").text(result[0].questions[queIndex].options[3]);
    $(".questionNumber").text("Q."+queCount)
    queIndex++;
    if(queCount==10)
    {
         $(".submitButton").css("display", "flex");
    }
}

//this function called after clicking on previous button 
//this will display previous question
$(".prev").click(function(){
    $(".option1,.option2,.option3,.option4").css("background-color", "#E0F2F1");
    queIndex--;
    $(".question").text(result[0].questions[queIndex].question);
    $(".option1").text(result[0].questions[queIndex].options[0]);
    $(".option2").text(result[0].questions[queIndex].options[1]);
    $(".option3").text(result[0].questions[queIndex].options[2]);
    $(".option4").text(result[0].questions[queIndex].options[3]);
    $(".questionNumber").text("Q."+queCount);
    
    if(ansArr[queIndex]==0)
    {
        $(".option1").css("background-color", "#4DB6AC");
    }
    else if(ansArr[queIndex]==1)
    {
        $(".option2").css("background-color", "#4DB6AC");
    }
    else if(ansArr[queIndex]==2)
    {
        $(".option3").css("background-color", "#4DB6AC");
    }else{
        $(".option4").css("background-color", "#4DB6AC");
    }
})

//this function called after clicking on next button 
//this will display next question
$(".next").click(function(){
    storeAns(selectedIndex)
    if(queCount<10)
    {
        getQues();
        $(".option1,.option2,.option3,.option4").css("background-color", "#E0F2F1");
    }
});

//this function called after clicking on first option 
//this function will asssign selectedindex as 0 and highlight that answer.
$('.option1').click(function(){
    selectedIndex = 0;
    $(".option1").css("background-color", "#4DB6AC");
    $(".option3,.option2,.option4").css("background-color", "#E0F2F1");
})

//this function called after clicking on second option 
//this function will asssign selectedindex as 1 and highlight that answer.
$('.option2').click(function() {

    selectedIndex = 1;
    $(".option2").css("background-color", "#4DB6AC");
    $(".option1,.option3,.option4").css("background-color", "#E0F2F1");
})

//this function called after clicking on third option 
//this function will asssign selectedindex as 2 and highlight that answer.
$('.option3').click(function() {
    selectedIndex =2;
    $(".option3").css("background-color", "#4DB6AC");
    $(".option1,.option2,.option4").css("background-color", "#E0F2F1");
})

//this function called after clicking on fourth option 
//this function will asssign selectedindex as 3 and highlight that answer.
$('.option4').click(function() {

    selectedIndex =3;
    $(".option4").css("background-color", "#4DB6AC");
    $(".option1,.option2,.option3").css("background-color", "#E0F2F1");
})

//this function will execute after submitting quiz 
//In this function it will check for how many answer are correct or not 
//and calculating score and displaying it.
function checkAns()
{
    let correctAns=0;
    for(let i=0;i<ansArr.length;i++)
    {
        if(ansArr[i]==result[0].questions[i].answer)
        {
            correctAns++;
        }
    }
    if(correctAns<5)
    {
        $(".wishing").text("Work Hard")
    }else if(correctAns>=5 && correctAns<=8)
    {
        $(".wishing").text("Improve")
    }
    else{
        $(".wishing").text("Excellent!!")
    }
    
    $(".quiz").hide();
    $('.score-display').show();
    $(".score").html(correctAns+"/ 10");

}

//this function will called after clicking on next button
//it will store given answer index in array.
function storeAns(index)
{
    ansArr.push(index);
    selectedIndex = -1;
}

//this function will execute after clicking on submit button
$(".submitButton").click(function(){
    checkAns();
})
