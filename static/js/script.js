//challenge 1:
function ageindays(){
    var birthyear=prompt("Enter your birthyear:)");
    var ageindayss=(2020-birthyear)*365;
    var h1=document.createElement("h1");
    var textanswer=document.createTextNode("You are" + ageindayss + "days old!!");
    h1.setAttribute("id","ageindays");
    h1.appendChild(textanswer);
    document.getElementById("flex-box-result").appendChild(h1); 
}
function reset(){
    document.getElementById("ageindays").remove();
}

//challenge 2:cat generator
function generateCat(){
    var image=document.createElement('img');
    var div=document.getElementById("flex-cat-gen");
    image.src="images/cat.jpg";
    div.appendChild(image);
}

//challenge 3:rock paper scissors

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice=numberToChoice(randomrpsIntoint());
    results=decideWinner(humanChoice,botChoice);
    console.log(results);
    message=finalMessage(results);
    console.log(message);
    frontEndlook(yourChoice.id,botChoice,message);
}
function randomrpsIntoint(){
    return (Math.floor(Math.random () * 3 ));
}
function numberToChoice(number){
    return (['rock','paper','scissors'][number]);
}
function decideWinner(yourChoice,computerChoice){
    var rpsDatabase={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}
    }

    var yourScore=rpsDatabase[yourChoice][computerChoice];
    var computerScore=rpsDatabase[computerChoice][yourChoice];
    return [yourScore,computerScore];
}
function finalMessage([yourScore,computerScore]){
    if(yourScore === 0){
        return {'message':'You Lost!','color':'red'};
    }
    else if(yourScore===0.5){
        return{'message':'You Tied!','color':'yellow'};
    }
    else{
        return{'message':'You Won!','color':'green'};
    }
}
function frontEndlook(humanImageChoice,botImageChoice,finalMessage){
    var imageDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    humanDiv.innerHTML="<img src='"+ imageDatabase[humanImageChoice] +"'>"
    messageDiv.innerHTML="<h1 style='color:"+finalMessage['color']+";font-size:80px ; padding:30px'>"+finalMessage['message']+"</h1>";
    
    botDiv.innerHTML="<img src='"+ imageDatabase[botImageChoice] +"'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)

    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}