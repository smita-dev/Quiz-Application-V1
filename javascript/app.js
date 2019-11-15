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

$(".next").click(function(){
    storeAns(selectedIndex)
    if(queCount<10)
    {
        getQues();
        $(".option1,.option2,.option3,.option4").css("background-color", "#E0F2F1");
    }
});

$('.option1').click(function(){
    selectedIndex = 0;
    $(".option1").css("background-color", "#4DB6AC");
    $(".option3,.option2,.option4").css("background-color", "#E0F2F1");
})

$('.option2').click(function() {

    selectedIndex = 1;
    $(".option2").css("background-color", "#4DB6AC");
    $(".option1,.option3,.option4").css("background-color", "#E0F2F1");
})

$('.option3').click(function() {
    selectedIndex =2;
    $(".option3").css("background-color", "#4DB6AC");
    $(".option1,.option2,.option4").css("background-color", "#E0F2F1");
})

$('.option4').click(function() {

    selectedIndex =3;
    $(".option4").css("background-color", "#4DB6AC");
    $(".option1,.option2,.option3").css("background-color", "#E0F2F1");
})
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


function storeAns(index)
{
    ansArr.push(index);
    selectedIndex = -1;
    console.log(index)
    console.log(ansArr);
}
$(".submitButton").click(function(){
    checkAns();
})


$(".sign-up").click(function(){
    username=$(".username").val();
    password=$(".password").val();
    passwordRepeat=$(".password-repeat").val();
    if(password!=passwordRepeat)
    {
        alert("password is not same !!!");
    }
    console.log(username);
    console.log(password);
    //$(".startquiz").css("display","flex");
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "https://quizzyapplication.herokuapp.com/",
        data:{
            Username:username,
            Password:password
        },
        error:function(err){
            console.log("fail")
    }
    })
})
$(".log-in").click(function(){
    username=$(".username").val();
    password=$(".password").val();
    console.log(username);
    console.log(password);
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://quizzyapplication.herokuapp.com/login",
        success: function(data){
           result=data;
           console.log(result)
           getQues();
        },
        error:function(err){
            console.log(err);
        }
    })
});