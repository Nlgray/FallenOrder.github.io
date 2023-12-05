var guess,random,input,riddle,usedArr;

usedArr=[];

over=3;

score=0;

i=0;

wrong=0;

while(wrong<over && score<3){
  random=Math.ceil(Math.random()*3);
  
    if(random==1){
    input=prompt("Stand behind me in the light. To stand before me is suicide, so kneel bellow me or fight. What am I?").toLowerCase();
      
      if(input!=="Protector","protection","protect","defense", "defend"){
        wrong++
      alert("OOf I thought you knew this one! The answer is Protector...You now have guessed "+wrong+" question(s) wrong");
      }else{
        alert("Correct, Your smarter than I thought...")
       score++
        usedArr.push(random);
     }
  }
  if(random==2){
    input=prompt("I am born in fear, raised in truth, and I come to my own in deed. When comes a time that I’m called forth, I come to serve the cause of need. ").toLowerCase();
      
      if(input!=="courage", "bravery","valor"){
        wrong++
      alert("ahhhhhh are you even trying, The answer is courage. You now have guessed "+wrong+" question(s) wrong");
      }else{
        alert("Correct, Your smarter than I thought...")
       scorusedArr.push(random);e++
        usedArr.push(random);
    }
  }
      

  if(random==3){
    input=prompt("More precious that gold, More powerful than the sword, With it you are a hero, Without it, a murderer").toLowerCase();
      
      if(input!=="Honor"){
        wrong++
      alert("Im sorry Lad i cant give that one to you even if I wanted, The answer is honor... You now have guessed "+wrong+" question(s) wrong");
     
        
      }else{
        alert("My frang, you are smarter than you look!")
       score++
        usedArr.push(random);
    }
  }

  i++;

}
if(score!==3){
  alert("Lost in thought i see...with only getting "+score+" of my riddels ill definitly see you again!")
}
if(score==3){
  alert("Congratulations, you are the only one who have gotten "+score+" of my riddles right, you have earned this legendary sword of knight!")
}
alert(usedArr);
alert(i)