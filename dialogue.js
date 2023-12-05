const q = document.getElementById('carcheck');
            const choices = document.getElementById('check');

            let cont = {};

            function questions(){
              cont = {};
              displayQuestions(1);
            }

            function displayQuestions(index){
              const textvalue = q2.find(textvalue => textvalue.id === index)
              q.innerText = textvalue.text; 
              while(choices.firstChild){
                choices.removeChild(choices.firstChild);
              }

              textvalue.options.forEach(option => {
                if (showChoice(option)) {
                  var b = document.createElement('button');
                  b.innerText = option.text;
                  b.classList.add('btn');
                  b.addEventListener('click', () => selectYesOrNo(option));
                  choices.appendChild(b);
                }
              })
            }

            function showChoice(option){
              return option.continue != null;
            }

            function selectYesOrNo(option){
              var nextQ = option.nextText;
              cont = Object.assign(cont, option.continue);
              displayQuestions(nextQ);
            }

            const characters = ["Braedon", "Tesmond", "Selphie", "Belginoff", "Narrator"];
            const spItems = 5;
            const item = ["breastplate"];

            const q2 = [
  {
//intro story

//
    id: 1,
    text: 'Before the lands of our time were molded into existence, a great calamity befell every being known within the grand cities of Camuth. The Dark Lord Palentheous Irzaline summoned his vast army of minions onto the peaceful citizens around the continent. Only a few brave souls dare challenge this irreversible catastrophe, they were known as the Knights of the Fallen Order. They overcame many of the Dark Lord’s warlords: Paluth the wretched butcher, Molgon the horrid warlock, Thaulrod the devastating mortar, Zyroneeuch the tinkering puppeteer, and Andurath the knightmare. As the Knights of the Fallen Order defeated each warlord, one by one, they emerged towards their final fight with the Dark Lord Palentheous Irzaline. The fight was victorious yet costed heavily. Many knights died during the battle, and many others died after. Only a few knights still rest in tranquility... ',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 2 
      }
    ]
  },{
 // move to the tavern

 //
    id: 2,
    text: 'Well, that was true till the Ol boy Andurath reappear’d back in Pleamore. ',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 3,
        character: "Braedon"
      }
    ]
  },
  {
    id: 3,
    text: 'Ah Kingston, you’ve finally arrived. Now that everyone is here, let me reintroduce ourselves to the recruit. *Moves everyone into position* We are the Fearless Chevaliers, a guild comprised of the most accomplished mortals in all the 7 regions of Camuth. I am Tesmond Ulgar, the guildmaster, the dashing swordsman, the heroic... ',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 4,
        character: "Tesmond"
      }

    ]
  },
  {
    id: 4,
    text: '*Pushes away Tesmond* Sorry about that. My name is Sephie Levi. I am the elementalist for the “guild”, well more like the party of adventurers. I don’t know how Tesmond always comes up with the most extravagant and exaggerated story. ',
    options: [
    {
        text: 'yes',
        continue: {cont: true},
        nextText: 5,
        character: 'Selphie'
      }
    ]
  },
  {
    id: 5,
    text: 'Okay, true that our tiny band is not yet as outstretched as a guild, but it will be! Just you wait and see Selphie. We are going to be swimming in Camuth gold within our own domicile with an army waiting for ME to lead. ',
    text: 'yes',
    continue: {cont: true},
    nextText: 6,
    character: 'Tesmond'
  },
  {
  
    id: 6,
    text: 'Ain’t that quite aspirin’ Tes. Anyway kiddo, the names Braedon Kingston. I’m the warrior of this merry gang. Or ya can refer to me as yer sturdy meat shield. Hahahahaha... ',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 7,
        character: 'Braedon'
      }
    ]
  },
  {

    id: 7,
    text: 'Now that the introductions are over, lets go... ',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 8,
        character: 'Tesmond'
      }
    ]
  },
  {
    id: 8,
    text: '*Ignores Tesmond**astonished/sulking Tesmond* Kingston, did you get any quests from the guild or were you just flirting with the GuildMaster as you always do? ',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 9,
        character: 'Selphie'
      }

    ]
  },
  {
    id: 9,
    text: 'Bah, did ya think I just went in the guild to flirt with the Guild Master n forget to grab any quests? *Everyone faced Kingston with a nod* Almost! Bahahahahah. Well, I grabbed two. *Opens and lays both quests on the table* one quest wants us to explore these newly ‘scovered caverns and the other wants to figure out the racket o’er at Pelna Forest. So, whats the vote? ',
    options: [
    {
        text: 'yes',
        continue: {cont: true},
        nextText: 10,
        character: 'Braedon'
      }
    ]
  },
  {
    //inital question
    id: 11,
    text: 'I would like to investigate the disturbance in Pelna Forest. ',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 12,
        character:'Tesmond'
      }
    ]
  },
  {
    //yes to question 1
    id: 12,
    text: 'I do not know; I am leaning on the caverns. We might get some good loot! ',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 13,
        character: 'Selphie'
      }
    ]
  },
  {
    id: 13,
    text: 'It doesn’t matter to me. How ‘bout we give the recruit the option? ',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 14,
        character: 'Braedon'
      }
    ]
  },
  {
    id: 14,
    text: 'That is a great idea!',
    options: [
    {
        text: 'yes',
        continue: {cont: true},
        nextText: 15,
        character: 'Selphie'
      }
    ]
  },
  {
    //inital question
    id: 15,
    text: 'Now this is a great team exercise! One of the many reasons why we are the “Fearless Chevaliers!” *Selphie and Kingston pulled Tesmond aside and “properly” addressed Tesmond that their group is not named “The Fearless Chevaliers” * ',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 16,
        character: 'Tesmond'
      }
    ]
  },
  {
    //yes to question 1
    id: 16,
    text: 'While Tesmond was being detained and interrogated, out of the 2 options, the recruit choose...',
    options: [
      {
        text: 'Pelna Forest',
        continue: {cont: true},
        nextText: 17,
        character: 'Narrator'
      },
      {
        text: 'Caverns',
        continue: {cont: true},
        nextText: 19,
        character: 'Narrator'
      }
    ]
  },
  {
    id: 17,
    text: 'The recruit chose to take: Investigate Pelna Forest and its disturbance. ',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 18,
        character: 'Narrator'
      }

    ]
  },
  {
    id: 18,
    text: '*Pops out from being lectured by Selphie and Kingston* Then Pelna Forest it is!',
    options: [
    {
        text: 'yes',
        continue: {cont: true},
        nextText: 21,
        character: 'Tesmond'
      }
    ]
  },
  {
    id: 19,
    text:'The recruit chose to take: Discover the Caverns. ',
    options: [{
      continue: {cont: true},
      nextText: 20,
      character: 'Narrator'
    }
  ]
  },
  {
    id: 20,
    text: '*Turns around after lecturing Tesmond* Great answer recruit! Okay everyone stop the incomprehensible talking and let us get ready for the Caverns! ',
     options: [{ 
      continue: {cont: true},
      nextText: 49, //when the player chooses the caverns
      character: 'Selphie'
    }
  ]
  },
/* start of village 
needs 15 total options witht the last being a choice to choose the game
*/
  {
    id: 20,
    text: 'Alright, is everyone well equipped and ready? *Everyone gestures, except you*',
    options: [{
      continue: {cont: true},
      nextText: 21,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 21,
    text: 'Seems like the recruit does not have any equipment. I think we should go shopping in Stagcross for gear.',
    options: [{
      continue: {cont: true},
      nextText: 22,
      character: 'Selphie'
      }
    ]
  },
  {
    id: 22,
    text: "Aight. Let's get this a move on. N ya betta not go shoppin’ for hours on end Selphie like last time. I don’t want the same incident where we began shoppin’ during Father Sun and came back to our home till Mother Moon appear’d. ",
    options: [{
      continue: {cont: true},
      nextText: 23,
      character: 'Braedon'
      }
    ]
  },
  {
    id: 23,
    text: "The group exits the Tavern, named the Drunken Sow, and entered onto the streets of Stagcross. While strolling through the open air of commerce and festivity, Kingston and Selphie found their target... a store, well... various stores... and a mysterious vendor.",
    options: [{
      continue: {cont: true},
      nextText: 24,
      character: 'Narrator'
      }
    ]
  },
  {
    id: 24,
    text: "Aight young recruit. Ya can choose one of the three. Don’t really care, but they seem fi...",
    options: [{
      continue: {cont: true},
      nextText: 25,
      character: 'Braedon'
      }
    ]
  },
  {
    id: 25,
    text: "*Excited and points at trader* Look! There's a man selling some interesting goods!",
    options: [{
      continue: {cont: true},
      nextText: 26,
      character: 'Selphie'
      }
    ]
  },
  {
    id: 26,
    text: "Nope! Nope! Nope! Not this again! Tesmond, stop her will ya!",
    options: [{
      continue: {cont: true},
      nextText: 27,
      character: 'Braedon'
      }
    ]
  },
  {
    id: 27,
    text: 'Right... about that... it seems like she already is over there.',
    options: [{
      continue: {cont: true},
      nextText: 28,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 28,
    text: "*Gesturing and touching everything* These trinkets are delightful! We should buy them!",
    options: [{
      continue: {cont: true},
      nextText: 29,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 29,
    text: "Sorry young miss. But everything you see here is not on “sale”. I go by a gambling rule, it makes everything interesting.",
    options: [{
      continue: {cont: true},
      nextText: 30,
      character: 'Belginoff'
      }
    ]
  },
  {
    id: 30,
    text: 'That makes it even better! How much?',
    options: [{
      continue: {cont: true},
      nextText: 31,
      character: 'Selphie'
      }
    ]
  },
  {
    id: 31,
    text: "Ah hell nah! Ya gonna spend all yer gold Selphie.",
    options: [{
      continue: {cont: true},
      nextText: 32,
      character: 'Braedon'
      }
    ]
  },
  {
    id: 32,
    text: "Well, it does not affect or concern everyone Kingston, it is her share of gold, let her be. ",
    options: [{
      continue: {cont: true},
      nextText: 33,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 33,
    text: "*Scoffs at Tesmond and whispers*Ain’t ya just a swell leader...",
    options: [{
      continue: {cont: true},
      nextText: 34,
      character: 'Braedon'
      }
    ]
  },
  {
    id: 34,
    text: "*Confused and oblivious from Kingston’s statement* What? Anyway, because this trip is for you recruit, how about you decide which choice best fits your needs. The gambling game with Selphie or the three shops with Kingston?",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 35,
    text: '',
    options: [{
      text: 'Selphie',
      continue: {cont: true},
      nextText: 36,
      character: 'Narrattor'
    },
    {
      text: 'Kingston',
        continue: {cont: true},
        nextText: 0,
        character: 'Narrator'

      }
    ]
  },
  /*
  Begin village gamble game; needs to open the game
  */
  {
    id: 36,
    text: "The recruit’s choice involved: Accepting Selphie’s addiction, SPENDING MONEY.",
    options: [{
      continue: {cont: true},
      nextText: 37,
      character: 'Narrator'
      }
    ]
  },
  {
    id: 37,
    text: "Great! I knew our recruit would make the right choice. *Grins at Kingston* Now vendor, tell us how this “gambling” works?",
    options: [{
      continue: {cont: true},
      nextText: 38,
      character: 'Selphie'
      }
    ]
  },
  {
    //set the game picture to morning
    id: 38,
    text: "The rules are simple. All you have to do is roll this dice. If the dice lands on 1 – 4, you lose and you give me one of your valuables. If the dice lands on 5 – 6, you win and you can pick whatever I have!",
    options: [{
      continue: {cont: true},
      nextText: 39,
      character: 'Belginoff'
      }
    ]
  },
  {
    id: 39,
    text: "Here goes another mistake of my lifetime. Kiddo, don’t just stand there, time to roll the die. ",
    options: [{
      continue: {cont: true},
      nextText: 40,
      character: 'Braedon'
      }
    ]
  },
/*
need to start the dice game
*/

  {
    //if user wins 1st try
    id: 40,
    text: "Holy Stars, offsprings of Father Sun and Mother Moon! How’d ya pull it off in one try?",
    options: [{
      continue: {cont: true},
      nextText: 41,
      character: 'Braedon'
      }
    ]
  },
  {
    id: 41,
    text: "Never underestimate our recruit, Kingston! He just might be our blessed reason for living another day!",
    options: [{
      continue: {cont: true},
      nextText: 42,
      character: 'Selphie'
      }
    ]
  },
  {
    id: 42,
    text: "That sounds a little over the top, but nevertheless, I am impressed recruit.",
    options: [{
      continue: {cont: true},
      nextText: 43,
      character: 'Tesmond'
      }
    ]
  },
  {
    //end of game if player wins 1st try
    id: 43,
    text: "Dang! In all my travels, I have yet to be beaten so easily. You, are very lucky. Okay, pick your prize.",
    options: [{
      continue: {cont: true},
      nextText: 53,
      character: 'Belginoff'
      }
    ]
  },
  //choices for during 2nd - 4th roll
  {
    id: 44,
    text: "At least ya got it in the end.",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Braedon'
      }
    ]
  },
  {
    id: 45,
    text: "Well done recruit! Seems like it is your lucky day recruit.",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Selphie'
      }
    ]
  },
  {
    id: 46,
    text: "Now that you won recruit, pick your prize from the vendor.",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    //end of 2nd - 4th roll dialogue still need to add the picture change for the 3rd roll
    id: 47,
    text: "My wares expand from household items, unnecessary gadgets, intricate charms, to adventurous necessities. Pick your prize! ",
    options: [{
      continue: {cont: true},
      nextText: 53,
      character: 'Belginoff'
      }
    ]
  },
  //start of dialogue for 5th roll
  {
    id: 48,
    text: "See what ya did! I told ya’ll so! Now we got nothin’ and lost everythin’!",
    options: [{
      continue: {cont: true},
      nextText: 49,
      character: 'Braedon'
      }
    ]
  },
  {
    id: 49,
    text: "Better luck next time young recruit.",
    options: [{
      continue: {cont: true},
      nextText: 50,
      character: 'Selphie'
      }
    ]
  },
  {
    id: 50,
    text: "Now that we are in this predicament, I suggest we go back home and restore our equipment tomorrow morning. I bid you farewell and good night to you, vendor.",
    options: [{
      continue: {cont: true},
      nextText: 51,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 51,
    text: "You too! I had fun while the game lasted. *Pushes merchant trolley away*",
    options: [{
      continue: {cont: true},
      nextText: 52,
      character: 'Belginoff'
      }
    ]
  },
  {
    //bad ending for the gambling game insert goes back to beginning  village
    id: 52,
    text: "SPENT ALL DAY GAMBLING: the party of “not so merry folk” left the scene with gloom and despair as their equipment was gathered away by the travelling merchant. Such a shame, losing everything and accomplishing nothing... you might as well restart at the very beginning.",
    options: [{
      continue: {cont: true},
      nextText: 20,
      character: 'Narrator'
      }
    ]
  },
  {
    //end of gambling game without losing dialogue
    id: 53,
    text: "The recruit points toward the glowing metal breastplate. Its aura emanated throughout the entire merchant’s cart, causing a fascination to spur throughout every person’s being, especially through Braedon Kingston.",
    options: [{
      continue: {cont: true},
      nextText: 54,
      character: 'Narrator'
      }
    ]
  },
  {
    id: 54,
    text: "*Kingston’s eyes widen* Quite the interesting item you chose for yourself young child. This chestplate here was previously owned by a knight. Seemed like he didn’t want to keep it, so he gave it to me as well as the idea for the gambling game. *Gives chestplate to recruit* *Waves goodbye and pushes merchant trolley away*",
    options: [{
      continue: {cont: true},
      nextText: 55,
      character: 'Belginoff',
      item: {breastplate: true}
      }
    ]
  },
  {
    id: 55,
    text: "This chestplate has been inscribed with various enchantments. I am surprised anyone would abandon this.",
    options: [{
      continue: {cont: true},
      nextText: 56,
      character: 'Selphie'
      }
    ]
  },
  {
    id: 56,
    text: "Indeed, but with their disinterest at heart, we are now the owners of such fine craftsmanship. So, recruit, now that we have finished the task at hand, let us go to Pelna Forest! *Everyone walks toward the exit of Stagcross*",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  /*
  start of village scammer game
  need to move to after the village
  */
  {
    id: 57,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 34,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 34,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
];