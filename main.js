var synth = window.speechSynthesis;


function b1(){
    var answer = Number(document.getElementById("n1").value) + Number(document.getElementById("n2").value)
    var speakThis = new SpeechSynthesisUtterance(answer);
    synth.speak(speakThis);
    document.getElementById("ans").innerHTML = answer;
}
function b2(){
    var answer = document.getElementById("n1").value - document.getElementById("n2").value;
    var speakThis = new SpeechSynthesisUtterance(answer);
    synth.speak(speakThis);
    document.getElementById("ans").innerHTML= answer;

}
function b3(){
    var answer = document.getElementById("n1").value*document.getElementById("n2").value;
    var speakThis = new SpeechSynthesisUtterance(answer);
    synth.speak(speakThis);
    document.getElementById("ans").innerHTML= answer
}
function b4(){
    var answer = document.getElementById("n1").value/document.getElementById("n2").value;
    var speakThis = new SpeechSynthesisUtterance(answer);
    synth.speak(speakThis);
    document.getElementById("ans").innerHTML= answer
}





//Homework : add css for your website. make it look better! 
//Make the b3 and b4 button work. 
//multiplication sign : *
//division sign : /

//DO NOT COPY PASTE OR I WILL KNOW :/