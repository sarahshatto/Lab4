'use strict'; 

console.log('trying this out');
var FirstTime = prompt('Have you traveled to the moon before?').toLowerCase(); 


function questionsAsked () {
    if(FirstTime === 'yes'){ 
        alert('Welcome Back to Earth, Space Ranger!');
        var returnPlan = prompt('Do you plan to return?').toLowerCase();
    }
    
    if(FirstTime === 'no'){ 
        alert('To Infinity, And Beyond!')
        var Contact1 = alert('Fill Out your email in the form below and let us know how we can help!').toLowerCase;
    }
    
    if(returnPlan === 'yes'){
        Contact1 = alert('Fill Out your email in the form below and let us know how we can help!').toLowerCase;
        console.log
    }

}

questionsAsked();
