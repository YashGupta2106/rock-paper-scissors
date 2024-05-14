function playKaro(playerSelection,computerSelection){
    // let a=1;
    // let b=2;
    // let c=3;
     let ans=0;
     var regex=playerSelection.toLowerCase();
     console.log("ans is: ",regex);
     if(regex=="rock"){
         ans=1;
     }
     else if(regex=="paper"){
         ans=2;
     }
     else{
         ans=3;
     }
     let anss=0;
     if(computerSelection=="rock"){
         anss=1;
     }
     else if(computerSelection=="paper"){
         anss=2;
     }
     else{
         anss=3;
     }// rock 1   paper 2 scissors 3
     console.log("ans and anss are: ",ans,anss);
     if(ans==anss){
         console.log("Tied hai ");
     }
     else if(ans==1 && anss==2){
         console.log("You lose! Paper beats rock.");
     }
     else if(ans==1 && anss==3){
         console.log("You win! rock beats scissors.");
     }
     else if(ans==2 && anss==1){
         console.log("You win! Paper beats rock.");
     }
     else if(ans==2 && anss==3){
         console.log("You lose! Scissors beats paper.");
     }
     else if(ans==3 && anss==1){
         console.log("You lose! rock beats scissors.");
     }
     else if(ans==3 && anss==2){
         console.log("You win! Scissors beats paper.");
     }
 
 
 
 
 }
 function getComputerChoice(){
     var min = 1;
     var max = 3;
     var randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
     //console.log(randomInteger); // Output will be a random integer between 1 and 3 (inclusive)
 
     //let comp=math.floor(math.random()*10)*
     switch(randomInteger){
         case 1:
             return "rock";
             //break;
         case 2:
             return "paper";
             //break;
         case 3:
             return "scissors";
             //break;
     }
     
 }
 const playerSelection=prompt("Enter a choice","rock");
 const computerSelection=getComputerChoice();
 console.log("computer choose: ",computerSelection);
 playKaro(playerSelection,computerSelection);
 