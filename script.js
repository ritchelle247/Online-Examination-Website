function check(){

    var i=0;

    var q1=document.exam.question1.value;

    var q2=document.exam.question2.value;

    var q3=document.exam.question3.value;

    var q4=document.exam.question4.value;

    var q5=document.exam.question5.value;

   

    if (q1=="Web Programming"){i++}

    if (q2=="HTML") {i++}

    if (q3=="0") {i++}

    if (q4=="Markup") {i++}

    if (q5=="head") {i++}

    

    document.getElementById('score').innerHTML="Your Score is"+ " "+ i + "/5";

    }

function secondcheck(){

var i=0;

var q6=document.exam.question6.value;

    var q7=document.exam.question7.value;

    var q8=document.exam.question8.value;

    var q9=document.exam.question9.value;

    var q10=document.exam.question10.value;

    if (q6=="CSS") {i++}

    if (q7=="Web Development") {i++}

    if (q8=="Slash") {i++}

    if (q9=="File server") {i++}

    if (q10=="LiveWire") {i++}

    document.getElementById('score').innerHTML="Your Score is"+ " "+ i + "/5";

    }

    function thirdcheck(){

    var i=0;

    

    var q11=document.exam.question11.value;

    var q12=document.exam.question12.value;

    var q13=document.exam.question13.value;

    var q14=document.exam.question14.value;

    var q15=document.exam.question15.value;

   

   

    

    if (q11=="Web Developer") {i++}

    if (q12=="Browser") {i++}

    if (q13=="Github") {i++}

    if (q14=="p") {i++}

    if (q15=="HTML") {i++}

    

    document.getElementById('score').innerHTML="Good job you have completed all the levels!" + " " + "Your Score is"+ " "+ i + "/5";

    }

