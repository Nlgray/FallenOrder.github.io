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
    text: "The recruit’s choice involved: Accepting Kingston’s wide array of shops.",
    options: [{
      continue: {cont: true},
      nextText: 58,
      character: 'Narrator'
      }
    ]
  },
  {
    id: 58,
    text: "Brilliant of ya rookie! *Pats heavily on the recruit’s back and grins* Now I reckon with the gold ya got, ya can only choose one of ‘em to shop at. So, I suggest ya go to each shop n hear ‘em all out. Ya can decline whatever shop keeper that sounds fishy. And Selphie! Get o’er here! We ain’t feedin’ yer addiction.",
    options: [{
      continue: {cont: true},
      nextText: 59,
      character: 'Braedon'
      }
    ]
  },
  {
    id: 59,
    text: "Hmmph! I wanted those trinkets. *Pouts then clears sadness* Anyway this is for the recruit, so they might as well choose what they want. ",
    options: [{
      continue: {cont: true},
      nextText: 60,
      character: 'Selphie'
      }
    ]
  },
  //first store
{
    id: 60,
    text: "Then let us start with this shop... it seems to be called, “The Unlucky Bear”. Not a good sign, but might be a good shop.",
    options: [{
      continue: {cont: true},
      nextText: 61,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 61,
    text: "The group enters The Unlucky Bear and is greeted by a large individual, with pronounced posture. Clothed with a bold blue and pearly white garment while wearing small spectacles, you wonder, is he clearly to be trusted? And how is he seeing from such small eyewear?",
    options: [{
      continue: {cont: true},
      nextText: 62,
      character: 'Narrator'
      }
    ]
  },
{
    id: 62,
    text: "Hello, my name is Brooker Goodsman. I supervise this fine establisment. What can I interest you in? ",
    options: [{
      continue: {cont: true},
      nextText: 63,
      character: 'Brooker'
      }
    ]
  },
  {
    id: 63,
    text: "Yes, I would like your finest equipment and gear for my new founded recruit. Preferably armor would suffice.",
    options: [{
      continue: {cont: true},
      nextText: 64,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 64,
    text: "Both Kingston and Selphie mysteriously vanished behind Tesmond and the recruit. Almost as if they were swallowed by every man’s adversary: CAPITALISM.",
    options: [{
      continue: {cont: true},
      nextText: 65,
      character: 'Narrator'
      }
    ]
  },
  {
    id: 65,
    text: "*Digging through wares* *Hands chestplate to the recruit* This is our top of the line steel and bronze chestplate. A best seller! ",
    options: [{
      continue: {cont: true},
      nextText: 66,
      character: 'Brooker'
      }
    ]
  },
  {
    id: 66,
    text: "Inspecting closely, the armor was engraved with various inscriptions or rather decorations. Decorated with horns from a wild Markhor for each shoulder. A lining of cheap bronze and shoddy skill. Almost as if a “factory in China” created this... not that I know what a factory is... and neither a China. ",
    options: [{
      continue: {cont: true},
      nextText: 67,
      character: 'Narrator'
      }
    ]
  },
//option for accepting and declining
  {
    id: 67,
    text: "So, does this store satisfy your needs, recruit? [Accept] [Decline]",
    options: [{
        text: '[Accept]',
      continue: {cont: true},
      nextText: 71,
      character: 'Narrator'
      },
      {
        text: '[Decline]',
        continue: {cont: true},
      nextText: 68
      }
    ]
  },
  /*for declining option*/
{
    id: 68,
    text: "And with a shake of the recruit’s head from left to right, the owner’s head turned droopy, knowing he had lost another customer. ",
    options: [{
      continue: {cont: true},
      nextText: 69,
      character: 'Narrator'
      }
    ]
  },
  {
    id: 69,
    text: "How unfortunate, well do come again! We have other wares in stock! Namely, a brand new pot for your crusty stove! Just look at that glisten!",
    options: [{
      continue: {cont: true},
      nextText: 70,
      character: 'Brooker'
      }
    ]
  },
  {
    id: 70,
    text: "As the rambling merchant went on and on about pots, pans, gadgets, trinkets, unnecessary items, and whatnot, the band of adventurers left... I would too from that damn annoying merchant... f%#k.",
    options: [{
      continue: {cont: true},
      nextText: 74,
      character: 'Narrator'
      }
    ]
  },
  //end of decline option and start of accept option
{
    id: 71,
    text: "And with a shake of the recruit’s head from top to bottom, the owner’s eyes widen and sparkle.",
    options: [{
      continue: {cont: true},
      nextText: 72,
      character: 'Narrator'
      }
    ]
  },
  {
    id: 72,
    text: "Oh customer, what an excellent purchase you have just given yourself! *The recruit hands the gold* *Owner registers the armor as sold* ",
    options: [{
      continue: {cont: true},
      nextText: 73,
      character: 'Brooker'
      }
    ]
  },
  //bad ending return to option to accept or decline the 1st shop
{
    id: 73,
    text: "SCAMMED: After walking away from the Unlucky Bear, the group discovered the purchased armor was not made of metal at all. It was made from wood, stained with brown for a copper design and grey for its steel appearance. You truly became the Unlucky Bear.",
    options: [{
      continue: {cont: true},
      nextText: 67,
      character: 'Narrator'
      }
    ]
  },
// start of 2nd shop
  {
    id: 74,
    text: "What an awfully tacky shop that was. At least we did not purchase anything unnecessary... *Turns and stares at Selphie and Kingston with disgust*",
    options: [{
      continue: {cont: true},
      nextText: 75,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 76,
    text: "*Holding useless trinkets* What? These will go great with my collection of interesting cubes!",
    options: [{
      continue: {cont: true},
      nextText: 77,
      character: 'Selphie'
      }
    ]
  },
  {
    id: 77,
    text: "*Holding cookware* Same here! These pots n pans will pair well with some good steak.",
    options: [{
      continue: {cont: true},
      nextText: 78,
      character: 'Braedon'
      }
    ]
  },
  {
    id: 78,
    text: "Fine, I will not question your purchases. Anyway, the next shop is the Hare’s Tinctures and Tonics. Are you serious Kingston? This is a potion shop!",
    options: [{
      continue: {cont: true},
      nextText: 79,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 79,
    text: "Ah quite yer yappin’ Tesmond! Just cause it’s a potion shop don’t mean it doesn’t have gear! Trust me! I know many great armor smiths who also work as alchemists.",
    options: [{
      continue: {cont: true},
      nextText: 80,
      character: 'Braedon'
      }
    ]
  },
{
    id: 80,
    text: "I agree with Kingston, it would not hurt to try the shop. Come recruit, let's head inside while those two argue.",
    options: [{
      continue: {cont: true},
      nextText: 81,
      character: 'Selphie'
      }
    ]
  },
  {
    id: 81,
    text: "While Tesmond and Kingston vigorously argue about the store’s credibility, Selphie and the recruit headed into the Hare’s Tinctures and Tonics. They saw an abundance of potions and armor scattered in disarray with nobody there to greet them. ",
    options: [{
      continue: {cont: true},
      nextText: 82,
      character: 'Narrator'
      }
    ]
  },
  {
    id: 82,
    text: "*Rose from behind the countertops* Hello, my name is Radcliff Newton. I specialize in potions, but as I see you birdbrains, I bet you need better armor than my highly valued potions. Quite stupendous, aren’t you? No matter, a customer is another person to take advantage of. *Walks to a pile of armor* Okay, I recommend this piece of armor. It is enchanted with very high durability, and a strong affinity to demonic powers. Wear it at your own risk. *Clasping hands in a sinister way* heheheheh.",
    options: [{
      continue: {cont: true},
      nextText: 83,
      character: 'Radcliff'
      }
    ]
  },
{
    id: 83,
    text: "*Whispers* I do not think it is wise to accept the chest plate, recruit. I get a looming feeling of dread and fright. Maybe we should go to the next shop?",
    options: [{
      continue: {cont: true},
      nextText: 84,
      character: 'Selphie'
      }
    ]
  },
  {
    id: 84,
    //text: "",
    options: [{
        text: '[Yes]',
      continue: {cont: true},
      nextText: 90,
      character: 'Narrator'
      },
      {
        text:'[No]',
        continue: {cont: true},
        nextText: 85,
        character: 'Narrator'
        }
    ]
  },
{
    id: 85,
    text: "As Selphie was making her way to the door to exit the Hare’s Tinctures and Tonics, she turned around, seeing that the recruit took an interest at the piece of armor the skeptical salesman presented. And with a quick exchange, the recruit now owns this unknown breastplate.",
    options: [{
      continue: {cont: true},
      nextText: 86,
      character: 'Narrator'
      }
    ]
  },
  {
    id: 86,
    text: "*Selphie and the recruit walk out* *Ends squabble* Aye! Would ya look at that! Ain’t I always right! *Smirking at Tesmond* So, what ya get?",
    options: [{
      continue: {cont: true},
      nextText: 87,
      character: 'Braedon'
      }
    ]
  },
{
    id: 87,
    text: "It is a chest plate, but it might be dangerous.",
    options: [{
      continue: {cont: true},
      nextText: 88,
      character: 'Selphie'
      }
    ]
  },
  {
    id: 88,
    text: "Actually? In fairness it does not look possessed or rather demonic... now is it...?",
    options: [{
      continue: {cont: true},
      nextText: 89,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 89,
    text: "As a matter of fact, Tesmond’s question was answered the moment the recruit placed the breastplate onto his own body. POSSESSED: The demonic power surging through the recruit rejected its host, causing a misshape. The morphing armor engulfed the recruit’s mind and transformed them into a horrifying creature. Should have listened to the shopkeeper’s warning “Wear at your own risk.”",
    options: [{
      continue: {cont: true},
      nextText: 74,
      character: 'Narrator'
      }
    ]
  },
  //start of yes option for the second shop
  {
    id: 90,
    text: "Selphie and the recruit left the Hare’s Tinctures and Tonics and came back towards the disorderly squabble between Kingston and Tesmond.",
    options: [{
      continue: {cont: true},
      nextText: 91,
      character: 'Narrator'
      }
    ]
  },
{
    id: 91,
    text: "*Ends squabble and looks at the recruit* Hah, Kingston! It seems that my intuition was correct. Selphie and the recruit did not acquire any equipment as they approach us. Almost as if a potion shop does not have any armor. *Irritated Kingston*",
    options: [{
      continue: {cont: true},
      nextText: 92,
      character: 'Tesmond'
      }
    ]
  },
  // start of 3rd shop
  {
    id: 92,
    text: "Tesmond is technically not correct with his assumption of the Hare’s Tinctures and Tonics’dealing with potions exclusively, but for the most part correct. The final store looked old and decayed, like the story of the big bad wolf who just blew one of the three pigs’ home and left... just to spite them.",
    options: [{
      continue: {cont: true},
      nextText: 93,
      character: 'Narrator'
      }
    ]
  },
  {
    id: 93,
    text: "Aight the final shop, the Blank Monkey! *Puts arm on the recruit’s shoulder* And have faith in me fledglin’! I swear on the celestial beings that this shop is the best. Now it may not look like it, but its charm is pushin’.",
    options: [{
      continue: {cont: true},
      nextText: 94,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 60,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 62,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 64,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 57,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 58,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 58,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 59,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 59,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 60,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 60,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 62,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 64,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 57,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 58,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 58,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 59,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 59,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 60,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 60,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 62,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 64,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 57,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 58,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 58,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 59,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 59,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 60,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 60,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 62,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 64,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 57,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 58,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 58,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 59,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 59,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 60,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 60,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 62,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 64,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 57,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 58,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 58,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 59,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 59,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 60,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 60,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 62,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 64,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 57,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 58,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 58,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 59,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 59,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 60,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 60,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 62,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 64,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 57,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 58,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 58,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 59,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 59,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 60,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 60,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 62,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 64,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 57,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 58,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 58,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 59,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 59,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 60,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 60,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 62,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 64,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 57,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 58,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 58,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 59,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 59,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 60,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 60,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 62,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 64,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 57,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 58,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 58,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 59,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 59,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 60,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 60,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 62,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 64,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 57,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 58,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 58,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 59,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 59,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 60,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 60,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 62,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 64,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 57,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 58,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 58,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 59,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 59,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 60,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 60,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 62,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 64,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 57,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 58,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 58,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 59,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 59,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 60,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 60,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 62,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 64,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 57,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 58,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 58,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 59,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 59,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 60,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 60,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 62,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 64,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 57,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 58,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 58,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 59,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 59,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 60,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 60,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 62,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 64,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 57,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 58,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 58,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 59,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 59,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 60,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 60,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 62,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
{
    id: 64,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: {cont: true},
      nextText: 35,
      character: 'Tesmond'
      }
    ]
  },
];

questions()
addEventListener("click", displayQuestions, false);