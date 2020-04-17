'use strict'; 

console.log('trying this out');
var FirstTime = prompt('Have you traveled to the moon before?').toLowerCase(); 




function questionsAsked () {
    if(FirstTime === 'yes'){ 
        alert('Welcome Back to Earth, Space Ranger!');
        var returnPlan = prompt('Do you plan to return?').toLowerCase();
    }
    
    if(FirstTime === 'no'){ 
        alert('To Infinity, And Beyond!' <br>'Fill Out your email in the form below and let us know how we can help!');
        var Contact1 = alert('2').toLowerCase();
    }
    
    if(returnPlan === 'yes'){
        Contact1 = alert('Fill Out your email in the form below and let us know how we can help!').toLowerCase();
        console.log
    }
}

function triviatime() {
 
    var correctAnswer = 79;

    for(var i = 0; i < 8; i = i + 1){
        var numberGuess = prompt('How many moons does Jupiter have?');
        if(numberGuess == correctAnswer){
            alert('Nerd. I bet you googled it');
            break;
        } else {
            alert('Wow, how do you not know this?');
        }
        if (i == '7') {
            alert('Womp Womp. This is embarassing...Game Over.');
        }
    }
}

triviatime();
questionsAsked();