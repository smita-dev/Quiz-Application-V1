
let text;
let selectedIndex=-1;
let queIndex=0;
let arr;
let ansArr=[];
let queCount=0;
let result;

$(document).ready(function(){
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:8000/",
        // crossDomain: true,
        // headers: {
        //      "accept": "application/json",
        //     'Access-Control-Allow-Origin':"*"
        // },
        // access-control-allow-origin: ,
        success: function(data){
           result=data;
           console.log(result)
           getQues();
        //    console.log(result[0].questions[0].question)
        },
        error:function(err){
            console.log(err);
        }
    });

})



function getQues(){
    queCount++;
    // console.log("hii");
    // console.log(result[0].questions[2].question)
    $(".question").text(result[0].questions[queIndex].question);
    $(".option1").text(result[0].questions[queIndex].options[0]);
    $(".option2").text(result[0].questions[queIndex].options[1]);
    $(".option3").text(result[0].questions[queIndex].options[2]);
    $(".option4").text(result[0].questions[queIndex].options[3]);
    $(".questionNumber").text(queCount+"/ 10")
    queIndex++;
    if(queCount==10)
    {
         $(".submitButton").css("display", "flex");
    }
}
// ['q1':0,'q4':5]


$(".next").click(function(){
    storeAns(selectedIndex)
    if(queCount<10)
    {
        getQues();
        $(".option1,.option2,.option3,.option4").css("background-color", "#E0F2F1");
    }

});

$('div.option1').click(function(){
    selectedIndex = 0;
    $(".option1").css("background-color", "#4DB6AC");
    $(".option3,.option2,.option4").css("background-color", "#E0F2F1");
    // text = $(this).text();
    console.log(selectedIndex)
})

$('div.option2').click(function() {

    selectedIndex = 1;
    $(".option2").css("background-color", "#4DB6AC");
    $(".option1,.option3,.option4").css("background-color", "#E0F2F1");
    // text = $(this).text();
   console.log(selectedIndex)
})

$('div.option3').click(function() {

    selectedIndex =2;
    $(".option3").css("background-color", "#4DB6AC");
    $(".option1,.option2,.option4").css("background-color", "#E0F2F1");
    // text = $(this).text();
    console.log(selectedIndex)
})

$('div.option4').click(function() {

    selectedIndex =3;
    $(".option4").css("background-color", "#4DB6AC");
    $(".option1,.option2,.option3").css("background-color", "#E0F2F1");
    // text = $(this).text();
    console.log(selectedIndex)
})
function checkAns()
{
    let correctAns=0;
    for(let i=0;i<ansArr.length;i++)
    {
        console.log(ansArr[i])
        // console.log(arr[i].answer)
        if(ansArr[i]==result[0].questions[i].answer)
        {
            correctAns++;
        }
    }
    console.log(correctAns);
    alert(`You Scored : ${correctAns}`);
    $(".quiz").hide();
    
    $('.score-display').show();
    $(".score").html(correctAns+"/ 10");
    // document.getElementById('scored').innerText=correctAns;
    
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

$("#submitEmail").click(function(){
    email=$("#emailAddress").val();
   var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if(regex.test(email)){
       $(".startquiz").css("display","flex");
   }

   $.ajax({
       type: "POST",
       dataType: "json",
       url: "http://localhost:8000/",
       data:{
           'email':email
       },
    //    success: function(data){
    //       result=data;
    //       console.log(result)
    //       //getQues();
    //    //    console.log(result[0].questions[0].question)
    //    },
       error:function(err){
           console.log("fail")
   }
   })
})

