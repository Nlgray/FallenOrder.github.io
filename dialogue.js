const q = document.getElementById('game story');
const choices = document.getElementById('choiceButtons');

let cont = {};

function questions() {
  cont = {};
  displayQuestions(1);
}

function displayQuestions(index) {
  const textvalue = q2.find(textvalue => textvalue.id === index)
  q.innerText = textvalue.text;
  while (choices.firstChild) {
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

function showChoice(option) {
  return option.continue != null;
}

function selectYesOrNo(option) {
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

    // Begin intro IMG
    id: 1,
    text: 'Before the lands of our time were molded into existence, a great calamity befell every being known within the grand cities of Camuth. The Dark Lord Palentheous Irzaline summoned his vast army of minions onto the peaceful citizens around the continent. Only a few brave souls dare challenge this irreversible catastrophe, they were known as the Knights of the Fallen Order. They overcame many of the Dark Lord’s warlords: Paluth the wretched butcher, Molgon the horrid warlock, Thaulrod the devastating mortar, Zyroneeuch the tinkering puppeteer, and Andurath the knightmare. As the Knights of the Fallen Order defeated each warlord, one by one, they emerged towards their final fight with the Dark Lord Palentheous Irzaline. The fight was victorious yet costed heavily. Many knights died during the battle, and many others died after. Only a few knights still rest in tranquility... ',
    options: [
      {
        text: 'yes',
        continue: { cont: true },
        nextText: 2
      }
    ]
  },
  // End intro IMG
  {
    // move to the tavern

    // Tavern1 IMG
    id: 2,
    text: "Well, that was true till the Ol boy Andurath reappear\’d back in Pleamore. ",
    options: [
      {
        text: 'yes',
        continue: { cont: true },
        nextText: 3,
        character: "Braedon"
      }
    ]
  },
  {
    id: 3,
    text: 'Ah Kingston, you\’ve finally arrived. Now that everyone is here, let me reintroduce ourselves to the recruit. *Moves everyone into position* We are the Fearless Chevaliers, a guild comprised of the most accomplished mortals in all the 7 regions of Camuth. I am Tesmond Ulgar, the guildmaster, the dashing swordsman, the heroic... ',
    options: [
      {
        text: 'yes',
        continue: { cont: true },
        nextText: 4,
        character: "Tesmond"
      }

    ]
  },
  {
    id: 4,
    text: '*Pushes away Tesmond* Sorry about that. My name is Sephie Levi. I am the elementalist for the “guild”, well more like the party of adventurers. I don\’t know how Tesmond always comes up with the most extravagant and exaggerated story. ',
    options: [
      {
        text: 'yes',
        continue: { cont: true },
        nextText: 5,
        character: 'Selphie'
      }
    ]
  },
  {
    id: 5,
    text: 'Okay, true that our tiny band is not yet as outstretched as a guild, but it will be! Just you wait and see Selphie. We are going to be swimming in Camuth gold within our own domicile with an army waiting for ME to lead. ',
    options: [{
      text: 'yes',
      continue: { cont: true },
      nextText: 6,
      character: 'Tesmond'
    }]
  },
  {

    id: 6,
    text: "Ain\’t that quite aspirin\’ Tes. Anyway kiddo, the names Braedon Kingston. I\’m the warrior of this merry gang. Or ya can refer to me as yer sturdy meat shield. Hahahahaha... ",
    options: [
      {
        text: 'yes',
        continue: { cont: true },
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
        continue: { cont: true },
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
        continue: { cont: true },
        nextText: 9,
        character: 'Selphie'
      }

    ]
  },
  // End Tavern1 IMG

  // Begin Tavern2 IMG
  {
    id: 9,
    text: 'Bah, did ya think I just went in the guild to flirt with the Guild Master n forget to grab any quests? *Everyone faced Kingston with a nod* Almost! Bahahahahah. Well, I grabbed two. *Opens and lays both quests on the table* one quest wants us to explore these newly \‘scovered caverns and the other wants to figure out the racket o’er at Pelna Forest. So, whats the vote? ',
    options: [
      {
        text: 'yes',
        continue: { cont: true },
        nextText: 10,
        character: 'Braedon'
      }
    ]
  },
  {
    //inital question
    id: 10,
    text: 'I would like to investigate the disturbance in Pelna Forest. ',
    options: [
      {
        text: 'yes',
        continue: { cont: true },
        nextText: 11,
        character: 'Tesmond'
      }
    ]
  },
  {
    //yes to question 1
    id: 11,
    text: 'I do not know; I am leaning on the caverns. We might get some good loot! ',
    options: [
      {
        text: 'yes',
        continue: { cont: true },
        nextText: 13,
        character: 'Selphie'
      }
    ]
  },
  {
    id: 12,
    text: 'It doesn\’t matter to me. How \‘bout we give the recruit the option? ',
    options: [
      {
        text: 'yes',
        continue: { cont: true },
        nextText: 13,
        character: 'Braedon'
      }
    ]
  },
  {
    id: 13,
    text: 'That is a great idea!',
    options: [
      {
        text: 'yes',
        continue: { cont: true },
        nextText: 14,
        character: 'Selphie'
      }
    ]
  },
  {
    //inital question
    id: 14,
    text: 'Now this is a great team exercise! One of the many reasons why we are the “Fearless Chevaliers!” *Selphie and Kingston pulled Tesmond aside and “properly” addressed Tesmond that their group is not named “The Fearless Chevaliers” * ',
    options: [
      {
        text: 'yes',
        continue: { cont: true },
        nextText: 15,
        character: 'Tesmond'
      }
    ]
  },
  {
    //yes to question 1
    id: 15,
    text: 'While Tesmond was being detained and interrogated, out of the 2 options, the recruit choose...',
    options: [
      {
        text: 'Pelna Forest',
        continue: { cont: true },
        nextText: 16,
        character: 'Narrator'
      },
      {
        text: 'Caverns',
        continue: { cont: true },
        nextText: 18,
        character: 'Narrator'
      }
    ]
  },
  {
    id: 16,
    text: 'The recruit chose to take: Investigate Pelna Forest and its disturbance. ',
    options: [
      {
        text: 'yes',
        continue: { cont: true },
        nextText: 17,
        character: 'Narrator'
      }

    ]
  },
  // End Tavern2 IMG

  // Begin Tavern1 IMG
  {
    id: 17,
    text: '*Pops out from being lectured by Selphie and Kingston* Then Pelna Forest it is!',
    options: [
      {
        text: 'yes',
        continue: { cont: true },
        nextText: 21,
        character: 'Tesmond'
      }
    ]
  },
  // End Tavern1 IMG

  // Begin Tavern2 IMG
  {
    id: 18,
    text: 'The recruit chose to take: Discover the Caverns. ',
    options: [{
      continue: { cont: true },
      nextText: 19,
      character: 'Narrator'
    }
    ]
  },
  // End Tavern2 IMG

  // Begin Tavern1 IMG
  {
    id: 19,
    text: '*Turns around after lecturing Tesmond* Great answer recruit! Okay everyone stop the incomprehensible talking and let us get ready for the Caverns! ',
    options: [{
      continue: { cont: true },
      nextText: 124, //when the player chooses the caverns
      character: 'Selphie'
    }
    ]
  },
  // End Tavern1 IMG

  /* start of village 
  needs 15 total options witht the last being a choice to choose the game
  */
  // Begin Tavern1 IMG
  {
    id: 20,
    text: 'Alright, is everyone well equipped and ready? *Everyone gestures, except you*',
    options: [{
      continue: { cont: true },
      nextText: 21,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 21,
    text: 'Seems like the recruit does not have any equipment. I think we should go shopping in Stagcross for gear.',
    options: [{
      continue: { cont: true },
      nextText: 22,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 22,
    text: "Aight. Let's get this a move on. N ya betta not go shoppin\’ for hours on end Selphie like last time. I don\’t want the same incident where we began shoppin\’ during Father Sun and came back to our home till Mother Moon appear\’d. ",
    options: [{
      continue: { cont: true },
      nextText: 23,
      character: 'Braedon'
    }
    ]
  },
  // End Tavern1 IMG

  // Begin Stagcross1 IMG
  {
    id: 23,
    text: "The group exits the Tavern, named the Drunken Sow, and entered onto the streets of Stagcross. While strolling through the open air of commerce and festivity, Kingston and Selphie found their target... a store, well... various stores... and a mysterious vendor.",
    options: [{
      continue: { cont: true },
      nextText: 24,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 24,
    text: "Aight young recruit. Ya can choose one of the three. Don\’t really care, but they seem fi...",
    options: [{
      continue: { cont: true },
      nextText: 25,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 25,
    text: "*Excited and points at trader* Look! There's a man selling some interesting goods!",
    options: [{
      continue: { cont: true },
      nextText: 26,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 26,
    text: "Nope! Nope! Nope! Not this again! Tesmond, stop her will ya!",
    options: [{
      continue: { cont: true },
      nextText: 27,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 27,
    text: 'Right... about that... it seems like she already is over there.',
    options: [{
      continue: { cont: true },
      nextText: 28,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 28,
    text: "*Gesturing and touching everything* These trinkets are delightful! We should buy them!",
    options: [{
      continue: { cont: true },
      nextText: 29,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 29,
    text: "Sorry young miss. But everything you see here is not on “sale”. I go by a gambling rule, it makes everything interesting.",
    options: [{
      continue: { cont: true },
      nextText: 30,
      character: 'Belginoff'
    }
    ]
  },
  {
    id: 30,
    text: 'That makes it even better! How much?',
    options: [{
      continue: { cont: true },
      nextText: 31,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 31,
    text: "Ah hell nah! Ya gonna spend all yer gold Selphie.",
    options: [{
      continue: { cont: true },
      nextText: 32,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 32,
    text: "Well, it does not affect or concern everyone Kingston, it is her share of gold, let her be. ",
    options: [{
      continue: { cont: true },
      nextText: 33,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 33,
    text: "*Scoffs at Tesmond and whispers*Ain\’t ya just a swell leader...",
    options: [{
      continue: { cont: true },
      nextText: 34,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 34,
    text: "*Confused and oblivious from Kingston\’s statement* What? Anyway, because this trip is for you recruit, how about you decide which choice best fits your needs. The gambling game with Selphie or the three shops with Kingston?",
    options: [{
      continue: { cont: true },
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
      continue: { cont: true },
      nextText: 36,
      character: 'Narrattor'
    },
    {
      text: 'Kingston',
      continue: { cont: true },
      nextText: 0,
      character: 'Narrator'

    }
    ]
  },
  // End Stagcross1 IMG

  /*
  Begin village gamble game; needs to open the game
  */
  // Begin Gamble1 IMG
  // Use Dice1 - Dice6
  {
    id: 36,
    text: "The recruit\’s choice involved: Accepting Selphie\’s addiction, SPENDING MONEY.",
    options: [{
      continue: { cont: true },
      nextText: 37,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 37,
    text: "Great! I knew our recruit would make the right choice. *Grins at Kingston* Now vendor, tell us how this “gambling” works?",
    options: [{
      continue: { cont: true },
      nextText: 38,
      character: 'Selphie'
    }
    ]
  },
  {
    //set the game picture to morning (Gamble1 IMG)
    id: 38,
    text: "The rules are simple. All you have to do is roll this dice. If the dice lands on 1 through 4, you lose and you give me one of your valuables. If the dice lands on 5 through 6, you win and you can pick whatever I have!",
    options: [{
      continue: { cont: true },
      nextText: 39,
      character: 'Belginoff'
    }
    ]
  },
  {
    id: 39,
    text: "Here goes another mistake of my lifetime. Kiddo, don\’t just stand there, time to roll the die. ",
    options: [{
      continue: { cont: true },
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
    text: "Holy Stars, offsprings of Father Sun and Mother Moon! How\’d ya pull it off in one try?",
    options: [{
      continue: { cont: true },
      nextText: 41,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 41,
    text: "Never underestimate our recruit, Kingston! He just might be our blessed reason for living another day!",
    options: [{
      continue: { cont: true },
      nextText: 42,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 42,
    text: "That sounds a little over the top, but nevertheless, I am impressed recruit.",
    options: [{
      continue: { cont: true },
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
      continue: { cont: true },
      nextText: 53,
      character: 'Belginoff'
    }
    ]
  },
  // End Gamble1 IMG

  //choices for during 2nd - 4th roll
  // Change to Gamble2 IMG on 3rd roll
  {
    id: 44,
    text: "At least ya got it in the end.",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 45,
    text: "Well done recruit! Seems like it is your lucky day recruit.",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 46,
    text: "Now that you won recruit, pick your prize from the vendor.",
    options: [{
      continue: { cont: true },
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
      continue: { cont: true },
      nextText: 53,
      character: 'Belginoff'
    }
    ]
  },
  // End Gamble2 IMG

  //start of dialogue for 5th roll
  // Begin Gamble3 IMG
  {
    id: 48,
    text: "See what ya did! I told ya\’ll so! Now we got nothin\’ and lost everythin\’!",
    options: [{
      continue: { cont: true },
      nextText: 49,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 49,
    text: "Better luck next time young recruit.",
    options: [{
      continue: { cont: true },
      nextText: 50,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 50,
    text: "Now that we are in this predicament, I suggest we go back home and restore our equipment tomorrow morning. I bid you farewell and good night to you, vendor.",
    options: [{
      continue: { cont: true },
      nextText: 51,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 51,
    text: "You too! I had fun while the game lasted. *Pushes merchant trolley away*",
    options: [{
      continue: { cont: true },
      nextText: 52,
      character: 'Belginoff'
    }
    ]
  },
  // End Gamble3 IMG

  // Begin Stagcross2 IMG
  {
    //bad ending for the gambling game insert goes back to beginning  village
    id: 52,
    text: "SPENT ALL DAY GAMBLING: the party of “not so merry folk” left the scene with gloom and despair as their equipment was gathered away by the travelling merchant. Such a shame, losing everything and accomplishing nothing... you might as well restart at the very beginning.",
    options: [{
      continue: { cont: true },
      nextText: 20,
      character: 'Narrator'
    }
    ]
  },
  // End Stagcross2 IMG
  {
    //end of gambling game without losing dialogue
    // Use either Gamble1 or Gamble2 depending on when user wins (1st - 2nd: Gamble1) (3rd - 4th: Gamble2)
    id: 53,
    text: "The recruit points toward the glowing metal breastplate. Its aura emanated throughout the entire merchant\’s cart, causing a fascination to spur throughout every person\’s being, especially through Braedon Kingston.",
    options: [{
      continue: { cont: true },
      nextText: 54,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 54,
    text: "*Kingston\’s eyes widen* Quite the interesting item you chose for yourself young child. This chestplate here was previously owned by a knight. Seemed like he didn\’t want to keep it, so he gave it to me as well as the idea for the gambling game. *Gives chestplate to recruit* *Waves goodbye and pushes merchant trolley away*",
    options: [{
      continue: { cont: true },
      nextText: 55,
      character: 'Belginoff',
      item: { breastplate: true }
    }
    ]
  },
  {
    id: 55,
    text: "This chestplate has been inscribed with various enchantments. I am surprised anyone would abandon this.",
    options: [{
      continue: { cont: true },
      nextText: 56,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 56,
    text: "Indeed, but with their disinterest at heart, we are now the owners of such fine craftsmanship. So, recruit, now that we have finished the task at hand, let us go to Pelna Forest! *Everyone walks toward the exit of Stagcross*",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  // End Gamble1 or Gamble2 IMG

  /*
  start of village scammer game
  need to move to after the village
  */
  // Begin Stagcross1 IMG
  {
    id: 57,
    text: "The recruit\’s choice involved: Accepting Kingston\’s wide array of shops.",
    options: [{
      continue: { cont: true },
      nextText: 58,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 58,
    text: "Brilliant of ya rookie! *Pats heavily on the recruit\’s back and grins* Now I reckon with the gold ya got, ya can only choose one of \‘em to shop at. So, I suggest ya go to each shop n hear \‘em all out. Ya can decline whatever shop keeper that sounds fishy. And Selphie! Get o\’er here! We ain\’t feedin\’ yer addiction.",
    options: [{
      continue: { cont: true },
      nextText: 59,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 59,
    text: "Hmmph! I wanted those trinkets. *Pouts then clears sadness* Anyway this is for the recruit, so they might as well choose what they want. ",
    options: [{
      continue: { cont: true },
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
      continue: { cont: true },
      nextText: 61,
      character: 'Tesmond'
    }
    ]
  },
  // End Stagcross1 IMG

  // Begin Store1 IMG
  {
    id: 61,
    text: "The group enters The Unlucky Bear and is greeted by a large individual, with pronounced posture. Clothed with a bold blue and pearly white garment while wearing small spectacles, you wonder, is he clearly to be trusted? And how is he seeing from such small eyewear?",
    options: [{
      continue: { cont: true },
      nextText: 62,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 62,
    text: "Hello, my name is Brooker Goodsman. I supervise this fine establisment. What can I interest you in? ",
    options: [{
      continue: { cont: true },
      nextText: 63,
      character: 'Brooker'
    }
    ]
  },
  {
    id: 63,
    text: "Yes, I would like your finest equipment and gear for my new founded recruit. Preferably armor would suffice.",
    options: [{
      continue: { cont: true },
      nextText: 64,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 64,
    text: "Both Kingston and Selphie mysteriously vanished behind Tesmond and the recruit. Almost as if they were swallowed by every man\’s adversary: CAPITALISM.",
    options: [{
      continue: { cont: true },
      nextText: 65,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 65,
    text: "*Digging through wares* *Hands chestplate to the recruit* This is our top of the line steel and bronze chestplate. A best seller! ",
    options: [{
      continue: { cont: true },
      nextText: 66,
      character: 'Brooker'
    }
    ]
  },
  {
    id: 66,
    text: "Inspecting closely, the armor was engraved with various inscriptions or rather decorations. Decorated with horns from a wild Markhor for each shoulder. A lining of cheap bronze and shoddy skill. Almost as if a “factory in China” created this... not that I know what a factory is... and neither a China. ",
    options: [{
      continue: { cont: true },
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
      continue: { cont: true },
      nextText: 71,
      character: 'Narrator'
    },
    {
      text: '[Decline]',
      continue: { cont: true },
      nextText: 68
    }
    ]
  },
  /*for declining option*/
  {
    id: 68,
    text: "And with a shake of the recruit\’s head from left to right, the owner\’s head turned droopy, knowing he had lost another customer. ",
    options: [{
      continue: { cont: true },
      nextText: 69,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 69,
    text: "How unfortunate, well do come again! We have other wares in stock! Namely, a brand new pot for your crusty stove! Just look at that glisten!",
    options: [{
      continue: { cont: true },
      nextText: 70,
      character: 'Brooker'
    }
    ]
  },
  {
    id: 70,
    text: "As the rambling merchant went on and on about pots, pans, gadgets, trinkets, unnecessary items, and whatnot, the band of adventurers left... I would too from that damn annoying merchant... f%#k.",
    options: [{
      continue: { cont: true },
      nextText: 74,
      character: 'Narrator'
    }
    ]
  },
  //end of decline option and start of accept option
  {
    id: 71,
    text: "And with a shake of the recruit\’s head from top to bottom, the owner\’s eyes widen and sparkle.",
    options: [{
      continue: { cont: true },
      nextText: 72,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 72,
    text: "Oh customer, what an excellent purchase you have just given yourself! *The recruit hands the gold* *Owner registers the armor as sold* ",
    options: [{
      continue: { cont: true },
      nextText: 73,
      character: 'Brooker'
    }
    ]
  },
  // End Store1 IMG

  // Begin scammed IMG
  //bad ending return to option to accept or decline the 1st shop
  {
    id: 73,
    text: "SCAMMED: After walking away from the Unlucky Bear, the group discovered the purchased armor was not made of metal at all. It was made from wood, stained with brown for a copper design and grey for its steel appearance. You truly became the Unlucky Bear.",
    options: [{
      continue: { cont: true },
      nextText: 67,
      character: 'Narrator'
    }
    ]
  },
  // End scammed IMG

  // start of 2nd shop
  // Begin Stagcross1 IMG
  {
    id: 74,
    text: "What an awfully tacky shop that was. At least we did not purchase anything unnecessary... *Turns and stares at Selphie and Kingston with disgust*",
    options: [{
      continue: { cont: true },
      nextText: 75,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 76,
    text: "*Holding useless trinkets* What? These will go great with my collection of interesting cubes!",
    options: [{
      continue: { cont: true },
      nextText: 77,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 77,
    text: "*Holding cookware* Same here! These pots n pans will pair well with some good steak.",
    options: [{
      continue: { cont: true },
      nextText: 78,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 78,
    text: "Fine, I will not question your purchases. Anyway, the next shop is the Hare\’s Tinctures and Tonics. Are you serious Kingston? This is a potion shop!",
    options: [{
      continue: { cont: true },
      nextText: 79,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 79,
    text: "Ah quite yer yappin\’ Tesmond! Just cause it\’s a potion shop don\’t mean it doesn\’t have gear! Trust me! I know many great armor smiths who also work as alchemists.",
    options: [{
      continue: { cont: true },
      nextText: 80,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 80,
    text: "I agree with Kingston, it would not hurt to try the shop. Come recruit, let's head inside while those two argue.",
    options: [{
      continue: { cont: true },
      nextText: 81,
      character: 'Selphie'
    }
    ]
  },
  // End Stagcross1 IMG

  // Begin Store2 IMG
  {
    id: 81,
    text: "While Tesmond and Kingston vigorously argue about the store\’s credibility, Selphie and the recruit headed into the Hare\’s Tinctures and Tonics. They saw an abundance of potions and armor scattered in disarray with nobody there to greet them. ",
    options: [{
      continue: { cont: true },
      nextText: 82,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 82,
    text: "*Rose from behind the countertops* Hello, my name is Radcliff Newton. I specialize in potions, but as I see you birdbrains, I bet you need better armor than my highly valued potions. Quite stupendous, aren\’t you? No matter, a customer is another person to take advantage of. *Walks to a pile of armor* Okay, I recommend this piece of armor. It is enchanted with very high durability, and a strong affinity to demonic powers. Wear it at your own risk. *Clasping hands in a sinister way* heheheheh.",
    options: [{
      continue: { cont: true },
      nextText: 83,
      character: 'Radcliff'
    }
    ]
  },
  {
    id: 83,
    text: "*Whispers* I do not think it is wise to accept the chest plate, recruit. I get a looming feeling of dread and fright. Maybe we should go to the next shop?",
    options: [{
      continue: { cont: true },
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
      continue: { cont: true },
      nextText: 90,
      character: 'Narrator'
    },
    {
      text: '[No]',
      continue: { cont: true },
      nextText: 85,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 85,
    text: "As Selphie was making her way to the door to exit the Hare\’s Tinctures and Tonics, she turned around, seeing that the recruit took an interest at the piece of armor the skeptical salesman presented. And with a quick exchange, the recruit now owns this unknown breastplate.",
    options: [{
      continue: { cont: true },
      nextText: 86,
      character: 'Narrator'
    }
    ]
  },
  // End Store2 IMG

  // Begin Stagcross1 IMG
  {
    id: 86,
    text: "*Selphie and the recruit walk out* *Ends squabble* Aye! Would ya look at that! Ain\’t I always right! *Smirking at Tesmond* So, what ya get?",
    options: [{
      continue: { cont: true },
      nextText: 87,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 87,
    text: "It is a chest plate, but it might be dangerous.",
    options: [{
      continue: { cont: true },
      nextText: 88,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 88,
    text: "Actually? In fairness it does not look possessed or rather demonic... now is it...?",
    options: [{
      continue: { cont: true },
      nextText: 89,
      character: 'Tesmond'
    }
    ]
  },
  // End Stagcross1

  // Begin posssessed IMG
  {
    id: 89,
    text: "As a matter of fact, Tesmond\’s question was answered the moment the recruit placed the breastplate onto his own body. POSSESSED: The demonic power surging through the recruit rejected its host, causing a misshape. The morphing armor engulfed the recruit\’s mind and transformed them into a horrifying creature. Should have listened to the shopkeeper’s warning “Wear at your own risk.”",
    options: [{
      continue: { cont: true },
      nextText: 74,
      character: 'Narrator'
    }
    ]
  },
  // End possessed IMG

  // Begin Stagcross1 IMG
  //start of yes option for the second shop
  {
    id: 90,
    text: "Selphie and the recruit left the Hare\’s Tinctures and Tonics and came back towards the disorderly squabble between Kingston and Tesmond.",
    options: [{
      continue: { cont: true },
      nextText: 91,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 91,
    text: "*Ends squabble and looks at the recruit* Hah, Kingston! It seems that my intuition was correct. Selphie and the recruit did not acquire any equipment as they approach us. Almost as if a potion shop does not have any armor. *Irritated Kingston*",
    options: [{
      continue: { cont: true },
      nextText: 92,
      character: 'Tesmond'
    }
    ]
  },
  // start of 3rd shop
  {
    id: 92,
    text: "Tesmond is technically not correct with his assumption of the Hare\’s Tinctures and Tonics\’ dealing with potions exclusively, but for the most part correct. The final store looked old and decayed, like the story of the big bad wolf who just blew one of the three pigs\’ home and left... just to spite them.",
    options: [{
      continue: { cont: true },
      nextText: 93,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 93,
    text: "Aight the final shop, the Blank Monkey! *Puts arm on the recruit\’s shoulder* And have faith in me fledglin\’! I swear on the celestial beings that this shop is the best. Now it may not look like it, but its charm is pushin\’.",
    options: [{
      continue: { cont: true },
      nextText: 94,
      character: 'Tesmond'
    }
    ]
  },

  //excuse to not go to the 3rd store
  {
    id: 94,
    text: "I will pass on this occasion. I just saw another merchant with interesting trinkets! *Scurries away*",
    options: [{
      continue: { cont: true },
      nextText: 95,
      character: 'Selphie'
    }
    ]
  },
  //excuse to not go to the 3rd store
  {
    id: 95,
    text: "Uhhm, then I best be on my way to stop Selphie from impulsively buying every trinket she sees. *Runs after Selphie*",
    options: [{
      continue: { cont: true },
      nextText: 96,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 97,
    text: "Then it looks like it's just you and me. Aight, lets head inside.",
    options: [{
      continue: { cont: true },
      nextText: 98,
      character: 'Braedon'
    }
    ]
  },
  // End Stagcross1 IMG

  // Begin Store3 IMG
  {
    id: 98,
    text: "As Kingston and the recruit enter the Blank Monkey, the air of dust and desolation filled the room, walls barely clinging onto its frame, contained in a tight and confined space with only a few goods displayed in the middle of the store. Behind the counter, the sound of continuous dings from the blacksmith’s relentless hammering echoed throughout the store.",
    options: [{
      continue: { cont: true },
      nextText: 99,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 99,
    text: "Greetings customer! Hol\’ on for just one second. *Stops smithing, and enters the same room* My name is Ekur Yozu. What would like from this humble shop? *Smiles* ",
    options: [{
      continue: { cont: true },
      nextText: 101,
      character: 'Ekur'
    }
    ]
  },

  // Unfinished
  {
    id: 100,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 101,
      character: 'Tesmond'
    }
    ]
  },
  // Unfinished

  {
    id: 101,
    text: "Yes, my companion here needs some proper good armor! Any suggestions?",
    options: [{
      continue: { cont: true },
      nextText: 102,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 102,
    text: "I recommend this piece here! It might not look as ornated than other shops, but for sure, it is exceedingly durable. I crafted it from the skin of young megalodons. It took me weeks to fully create it. ",
    options: [{
      continue: { cont: true },
      nextText: 103,
      character: 'Ekur'
    }
    ]
  },
  {
    id: 103,
    text: "Kingston turns to the recruit. Expecting a response, the recruit answers the shopkeeper with...",
    options: [{
      text: 'Accept',
      continue: { cont: true },
      nextText: 107,
      character: 'Narrator'
    },
    {
      text: 'Decline',
      continue: { cont: true },
      nextText: 104,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 104,
    text: "As the recruit was about to decline the shopkeeper\’s armor...",
    options: [{
      continue: { cont: true },
      nextText: 105,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 105,
    text: "We\’ll take it! *Smiles at the recruit* I knew this shop had remarkable wares. Megalodon skin is hard to come by, ya must\’ve gotten it for a hefty price.",
    options: [{
      continue: { cont: true },
      nextText: 106,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 106,
    text: "Thank you, I hunted the meg myself. I was an adventurer too! Until I took an arrow to the knee. Now I blacksmith with the materials my mates give me and hone my craft. ",
    options: [{
      continue: { cont: true },
      nextText: 109,
      character: 'Ekur'
    }
    ]
  },
  {
    id: 107,
    text: "The recruit nods towards the shopkeeper. With delight, the shopkeeper rang the armor and sold it to the recruit.",
    options: [{
      continue: { cont: true },
      nextText: 108,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 108,
    text: "Thank you very much! Please, do come again! *Waves goodbye*",
    options: [{
      continue: { cont: true },
      nextText: 109,
      character: 'Ekur'
    }
    ]
  },
  // End Store3 IMG

  // Begin Stagcross1 IMG
  {
    id: 109,
    text: "Now that we\’re done shoppin\’, lets grab the others and get ready for Pelna Forest!",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Braedon'
    }
    ]
  },
  // End Stagcross1 IMG

  // Begin Stagcross3 IMG or Stagcross4 IMG if user wins gamble game 3rd or 4th try
  //start of end of village
  {
    id: 110,
    text: "As everyone leaves and gets ready, Selphie barges with...",
    options: [{
      continue: { cont: true },
      nextText: 111,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 111,
    text: "I still do not recommend going to Pelna Forest. I believe it is wise that we should go into the Caverns.",
    options: [{
      continue: { cont: true },
      nextText: 112,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 112,
    text: "Whatever is the problem, Selphie? I know ya like ya gold, but now addin\’ on the fact ya get a sinkin\’ feelin\’ \‘bout Pelna Forest? *Takes a minute to think, turns to Tesmond and gestures an agreement, then turns to the recruit* Aight, rookie, final offer. Wanna keep goin\’ to Pelna Forest or take the trip to the Caverns? Ya choice! Hahahahah.",
    options: [{
      continue: { cont: true },
      nextText: 113,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 113,
    text: "Continue or Deviate",
    options: [{
      text: '[Continue]',
      continue: { cont: true },
      nextText: 114,
      character: 'Tesmond'
    },
    {
      text: '[Deviate]',
      continue: { cont: true },
      nextText: 118,
      character: 'Tesmond'
    }
    ]
  },
  //chooses to continue
  {
    id: 114,
    text: "Excellent! Then for...",
    options: [{
      continue: { cont: true },
      nextText: 115,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 115,
    text: "FORWARD we go! Ya take the lead on this one rookie. *Pats heavily on the recruit\’s back and grins* Hahahaha",
    options: [{
      continue: { cont: true },
      nextText: 116,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 116,
    text: "*Sigh* I hope we can finish this quest quickly.",
    options: [{
      continue: { cont: true },
      nextText: 117,
      character: 'Selphie'
    }
    ]
  },
  // move to the forest
  {
    id: 117,
    text: "With the band of the so called “Fearless Cheveliars”, they departed the city of Stagcross. And approached the open entrance of Pelna Forest. To complete their quest: Investigate Pelna Forest and its disturbance.",
    options: [{
      continue: { cont: true },
      nextText: 150,
      character: 'Narrator'
    }
    ]
  },
  //deviate option
  {
    id: 118,
    text: "Seems like ya persuasion got the best of the rookie, Selphie! *Points towards the direction for the Caverns* Aight, Onward! To the caverns.",
    options: [{
      continue: { cont: true },
      nextText: 119,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 119,
    text: "*Whispers to himself* Man... I really wanted to go to Pelna Forest. Could\’ve gotten a few elven babes.",
    options: [{
      continue: { cont: true },
      nextText: 120,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 120,
    text: "*Pops at Tesmond\’s shoulder* What did you say? *Grins*",
    options: [{
      continue: { cont: true },
      nextText: 121,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 121,
    text: "Nothing of importance. *Clears throat* Well then, we best be on our way.",
    options: [{
      continue: { cont: true },
      nextText: 122,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 123,
    text: "With the band of the so called “Fearless Chevaliers”, they departed the city of Stagcross. And with a swift decision, a detour was made to complete their quest: Discover the Caverns.",
    options: [{
      continue: { cont: true },
      nextText: 124,
      character: 'Narrator'
    }
    ]
  },
  // End Stagcross3 or Stagcross4 IMG

  /*
  start of caverns
  */
  // Begin Caverns1 IMG
  {
    id: 124,
    text: "At long last! A long trip ensued for our group of adventurers to the entrance of the Caverns. Its dark, concealed entrance conveyed an unfathomable fear towards Tesmond, Selphie, and the recruit. But, with a quick motion, Kingston held a torch and lit it overhead.",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 125,
    text: "Aight ya scared cats. Time to go in n explore! ",
    options: [{
      continue: { cont: true },
      nextText: 126,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 126,
    text: "*Legs shaking* Fine, but Selphie you go on ahead with Kingston. After all, you proposed this idea. ",
    options: [{
      continue: { cont: true },
      nextText: 127,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 127,
    text: "Hummph! Okay, maybe I will. Come Kingston, let us lead this party of frightened deer. *Grabs Kingston\’s torch* *Starts sprinting into the Caverns*",
    options: [{
      continue: { cont: true },
      nextText: 128,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 128,
    text: "Hol' up missie! *Beckons Tesmond and the recruit* Hurry up! We\’re gonna lose her before ya know it! *Lights another torch*",
    options: [{
      continue: { cont: true },
      nextText: 129,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 129,
    text: "The group attempted to reach Selphie, but encountered a difficult problem...",
    options: [{
      continue: { cont: true },
      nextText: 130,
      character: 'Narrator'
    }
    ]
  },
  // End Caverns1 IMG

  // Begin Caverns2 IMG
  {
    id: 130,
    text: "*Stops running* Damn it! The path is split in two ways! If ya hadn\’t gotten Sephie all riled up just \‘cause she wanted to do this quest, we wouldn\’t be in this mess!",
    options: [{
      continue: { cont: true },
      nextText: 131,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 131,
    text: "I believe it was not my intention. Ultimately, it was her decision to start sprinting into the dark caverns without us!",
    options: [{
      continue: { cont: true },
      nextText: 132,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 132,
    text: "Quite yer petty excuses. *Thinks* Hmmph, I think we should go...",
    options: [{
      continue: { cont: true },
      nextText: 133,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 133,
    text: "As Kingston was about to point in the direction, he believes Selphie wandered off to, Tesmond pointed to the complete opposite direction.",
    options: [{
      continue: { cont: true },
      nextText: 134,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 134,
    text: "THE RIGHT!",
    options: [{
      continue: { cont: true },
      nextText: 135,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 135,
    text: "THE LEFT!",
    options: [{
      continue: { cont: true },
      nextText: 136,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 136,
    text: "HUH! What the hell are you doing? *Facepalms* *Turns to the recruit* Seems like we are at a stalemate... recruit... you decide. Want to go left or right?",
    options: [{
      continue: { cont: true },
      nextText: 137,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 137,
    text: "Left or Right",
    options: [{
      text: '[Left]',
      continue: { cont: true },
      nextText: 138,
      character: 'Narrator'
    },
    {
      text: '[Right]',
      continue: { cont: true },
      nextText: 140,
      character: 'Narrator'
    }
    ]
  },
  //start of left option
  {
    id: 138,
    text: "The recruit pointed towards the: left.",
    options: [{
      continue: { cont: true },
      nextText: 139,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 139,
    text: "Then left it is! *Points at Tesmond* And I do not want to hear you make a smirking remark! We got to get Selphie first!",
    options: [{
      continue: { cont: true },
      nextText: 142,
      character: 'Tesmond'
    }
    ]
  },
  //start of right option
  {
    id: 140,
    text: "The recruit pointed towards the: right.",
    options: [{
      continue: { cont: true },
      nextText: 141,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 141,
    text: "Then right it is! Let\’s hurry before something happens to Selphie!",
    options: [{
      continue: { cont: true },
      nextText: 183,
      character: 'Braedon'
    }
    ]
  },
  // End Caverns2 IMG

  /*
  start cavern maze game left
  */
  // Begin Maze1
  {
    id: 142,
    text: "Kingston, Tesmond, and the recruit dashed towards the left passage in search of Selphie. 1 minute went by, then 2, then 10 minutes, then 30 minutes, until Kingston realized...",
    options: [{
      continue: { cont: true },
      nextText: 143,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 143,
    text: "Where is Selphie? We searched for countless minutes and still hadn\’t found her! *Thinks, then realizes* Can\’t be! *Turns to Tesmond and the recruit* *Groans* Well, it looks like we are in a maze.",
    options: [{
      continue: { cont: true },
      nextText: 144,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 144,
    text: "It appears so. Possibly, Selphie went in the other direction than this troublesome labyrinth. *Sighs* If only she could give us an indication on where she is... but that is highly unlikely.",
    options: [{
      continue: { cont: true },
      nextText: 145,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 145,
    text: "At that instant, the fortunate group heard a sound reverberating throughout the labyrinth.",
    options: [{
      continue: { cont: true },
      nextText: 146,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 146,
    text: "And there she is... deeper within the clawing arms of this perplexing labyrinth. Seeing how Kingston could not guide us to her, perhaps I can lead?",
    options: [{
      continue: { cont: true },
      nextText: 147,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 147,
    text: "Oh no, Tesmond! Last time you led the way, we were trapped in a nest of goblins! I would feel better if the recruit led the way instead of you. *Looks at recruit* So it seems it's now up to you recruit! We can go left or forward, you decide.",
    options: [{
      continue: { cont: true },
      nextText: 148,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 148,
    text: "Left or Forward",
    options: [{
      text: '[Left]',
      continue: { cont: true },
      nextText: 149,
      character: 'Narrator'
    },
    {
      text: '[Forward]',
      continue: { cont: true },
      nextText: 150,
      character: 'Narrator'
    }
    ]
  },
  // End Maze1 IMG

  //decide to go left but has to go forward
  // Begin Maze3 IMG
  {
    id: 149,
    text: "*Everyone sprints, then halts* Seems like a dead end, let's head back and go forwards instead!",
    options: [{
      continue: { cont: true },
      nextText: 150,
      character: 'Braedon'
    }
    ]
  },
  // End Maze3 IMG

  //decide to go forward
  // Begin Maze2 IMG
  {
    id: 150,
    text: "*Everyone sprints* This path appears correct; I hear Selphie getting closer. *Halts* Now another fork in our path, left or right?",
    options: [{
      continue: { cont: true },
      nextText: 151,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 151,
    text: "Left or Right",
    options: [{
      text: '[Left]',
      continue: { cont: true },
      nextText: 152,
      character: 'Narrator'
    },
    {
      text: '[Right]',
      continue: { cont: true },
      nextText: 153,
      character: 'Narrator'
    }
    ]
  },
  // End Maze2 IMG

  //take 2nd left
  // Begin Maze3 IMG
  {
    id: 152,
    text: "Then let us proceed left. *Hastily ran, then stops* Tsk! An obstruction. *Turns around and starts rushing* Time to head back and go on the other path. ",
    options: [{
      continue: { cont: true },
      nextText: 153,
      character: 'Tesmond'
    }
    ]
  },
  // End Maze3 IMG

  //go right
  // Begin Maze2 IMG
  {
    id: 153,
    text: "Alright! She is getting louder. SELPHIE! SHOUT BACK! *Sees Selphie* HEY TURN AROUND! *Waves arms*",
    options: [{
      continue: { cont: true },
      nextText: 154,
      character: 'Braedon'
    }
    ]
  },
  // End Maze2 IMG

  // Begin Maze4 IMG
  {
    id: 154,
    text: "Finally, the group found Selphie. As they breathed heavily from rushing to find her, Selphie pointed towards an interesting container...",
    options: [{
      continue: { cont: true },
      nextText: 155,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 155,
    text: "*Pant* *Pant* Selphie! Ya scared us! Don\’t go runnin\’ off like that ever again! *Pant* And Tesmond, ya better apologize!",
    options: [{
      continue: { cont: true },
      nextText: 156,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 156,
    text: "*Pant* *Pant* Selphie... in the darkest depths of my heart, I am truly sorry. I will not state another comment concerning your reasons for picking this quest. ",
    options: [{
      continue: { cont: true },
      nextText: 157,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 157,
    text: "*Arms crossed* Very well, that apology satisfies me... for now. *Points forward* Anyways look, I found a chest! I can\’t open it, so maybe you can? *Looks at recruit*",
    options: [{
      continue: { cont: true },
      nextText: 158,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 158,
    text: "Let me interrupt ya Selphie. That chest could be trapped. Who knows what\’ll happen. Are ya sure ya still wanna open it?",
    options: [{
      continue: { cont: true },
      nextText: 159,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 159,
    text: "Of course! There is no possibility that this chest is forged to trap others! Even our recruit agrees, isn\’t that right?",
    options: [{
      continue: { cont: true },
      nextText: 160,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 160,
    text: "Agree or Disagree",
    options: [{
      text: '[Agree]',
      continue: { cont: true },
      nextText: 161,
      character: 'Narrator'
    },
    {
      text: '[Disagree]',
      continue: { cont: true },
      nextText: 165,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 161,
    text: "The recruit bobs his head in complete ignorance to Kingston\’s warnings.",
    options: [{
      continue: { cont: true },
      nextText: 162,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 162,
    text: "Way to go, recruit! Now lets see what is inside that chest!",
    options: [{
      continue: { cont: true },
      nextText: 163,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 163,
    text: "Now hold on! *Gestures to wait*",
    options: [{
      continue: { cont: true },
      nextText: 164,
      character: 'Braedon'
    }
    ]
  },
  // End Maze4 IMG

  // Begin mimicked IMG
  {
    id: 164,
    text: "Unfortunately, as Kingston exclaimed everyone to pause, the recruit opened the chest. GET MIMICKED: And with a quick snarl, the inanimate chest turned alive. *Crunch* *Crack* goes the recruit.",
    options: [{
      continue: { cont: true },
      nextText: 154,
      character: 'Narrator'
    }
    ]
  },
  // End mimicked IMG

  // Begin Maze4 IMG
  {
    id: 165,
    text: "The recruit swayed his head in disapproval. For he was more interested in traveling deeper in this abyssal labyrinth. ",
    options: [{
      continue: { cont: true },
      nextText: 166,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 166,
    text: "Seems like he ain\’t followin\’ yer commands, Selphie. Well, in my opinion, he\’s right. We got more priorities, like figurin\’ out how this maze ends.",
    options: [{
      continue: { cont: true },
      nextText: 167,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 167,
    text: "Then let us carry on! I do not want to stay in this damp and bewildering labyrinth any longer.",
    options: [{
      continue: { cont: true },
      nextText: 168,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 168,
    text: "Humph! *Whispers to herself* What a shame to leave treasure behind...",
    options: [{
      continue: { cont: true },
      nextText: 169,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 169,
    text: "As the recollected group started walking away, a whimpering sound came behind them... plausibly due to the saddened chest... or mimic. What a lucky bunch.",
    options: [{
      continue: { cont: true },
      nextText: 170,
      character: 'Narrator'
    }
    ]
  },
  // End Maze4 IMG

  // Begin Maze2 IMG
  {
    id: 170,
    text: "*Halts* Another split. Aight rook, ya haven\’t failed us yet. So, what is it? Left or right?",
    options: [{
      continue: { cont: true },
      nextText: 58,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 171,
    text: "Left or Right",
    options: [{
      text: '[Left]',
      continue: { cont: true },
      nextText: 172,
      character: 'Narrator'
    },
    {
      text: '[Right]',
      continue: { cont: true },
      nextText: 183,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 172,
    text: "The recruit points: Left. Even when they knew the previous left turns led to hindrances, but what's stopping them. Not me, that\’s for sure... well more like I can\’t even if I wanted too.",
    options: [{
      continue: { cont: true },
      nextText: 173,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 173,
    text: "*Walks ahead* *Halts* Kingston... you will not like this...",
    options: [{
      continue: { cont: true },
      nextText: 174,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 174,
    text: "What seems to be the trouble, Tesmond?",
    options: [{
      continue: { cont: true },
      nextText: 175,
      character: 'Braedon'
    }
    ]
  },
  // End Maze2 IMG

  // Begin Maze5 IMG
  {
    id: 175,
    text: "There is another chest, but this time its lifted high onto a pedestal adorned with an engraving. *Leans in to look closer* This engraving appears to be a hand and... a sun?",
    options: [{
      continue: { cont: true },
      nextText: 176,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 176,
    text: "*Gasp* Okay, we must open this chest! *Stares at Kingston*",
    options: [{
      continue: { cont: true },
      nextText: 177,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 177,
    text: "Aight aight, let me see. *Looks intently* Can it be? *Points* the hand n sun represents Father Sun\’s right hand. It usually symbolizes protection n might. This symbol is only worn on the paladins I\’ve seen back in Atlamond, the undersea city. Interestin\’ how\’d it got here. *Looks at the recruit* I don\’t think this chest is trapped, so ya can open it rook!",
    options: [{
      continue: { cont: true },
      nextText: 178,
      character: 'Braedon'
    }
    ]
  },
  /*
  need to set the special item for gauntlets
  */
  {
    id: 178,
    text: "The recruit steps forward near the pedestal. With deft hands, the recruit swiftly unlocked the chest to reveal…",
    options: [{
      continue: { cont: true },
      nextText: 179,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 179,
    text: "Gauntlets? ",
    options: [{
      continue: { cont: true },
      nextText: 180,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 180,
    text: "Yep, gauntlets. By through his actions, the gauntlets proves a knight\’s valor n protection to the world.Ya can keep it, rook. It\’s size is too small for me.",
    options: [{
      continue: { cont: true },
      nextText: 181,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 181,
    text: "Are we genuinely keeping such a gaudy piece of armor? ",
    options: [{
      continue: { cont: true },
      nextText: 182,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 182,
    text: "Yes! This'll piece is a treasure meant for the highest order. Not somethin\’ ya find anywhere. *Turns around* Now that we got ourselves some loot, let\’s go back the other way, got the feelin\’ it might be the way out.",
    options: [{
      continue: { cont: true },
      nextText: 204,
      character: 'Tesmond'
    }
    ]
  },
  /*
  cavern enemies on the right
  */
  {
    id: 183,
    text: "As the group traversed the extensive path, they heard a screech… plausibly from Selphie.",
    options: [{
      continue: { cont: true },
      nextText: 184,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 184,
    text: "HURRY! I hear Selphie; it seems like she is in trouble!",
    options: [{
      continue: { cont: true },
      nextText: 185,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 185,
    text: "AHH! *Evade attack* *Calms down* elements of wind and fire, I summon thee to procure… Flame Slash!",
    options: [{
      continue: { cont: true },
      nextText: 186,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 186,
    text: "Arggghh! Ayyah! *Creeps in* euughh! hehehe!",
    options: [{
      continue: { cont: true },
      nextText: 187,
      character: 'Monsters'
    }
    ]
  },
  {
    id: 187,
    text: "*Huff* HYAH! *boinks an enemy* SELPHIE! *Turns around* She is surrounded by kobolds and slugs. We need to help her! Tesmond, rookie, time to attack!",
    options: [{
      continue: { cont: true },
      nextText: 188,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 188,
    text: "About time for excitement! Let us charge!",
    options: [{
      continue: { cont: true },
      nextText: 189,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 189,
    text: "As you and Kingston lunge into action, you turn around to see Tesmond missing… seems like he charged into the wrong direction if you ask me.",
    options: [{
      continue: { cont: true },
      nextText: 190,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 190,
    text: "Here rookie! Strike them!",
    options: [{
      continue: { cont: true },
      nextText: 191,
      character: 'Braedon'
    }
    ]
  },
  /*
  start enemy minigame

  it will be a dice roll game this will be in the minigame html file

  */

  /*
  skipping over to 
  */
  {
    id: 191,
    text: "*Reappears* Ahah! That will show those foul beasts the true strength of Tesmond Ulgar! Tis’ but a scratch.",
    options: [{
      //text: '',
      continue: { cont: true },
      nextText: 192,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 192,
    text: "*Ignores Tesmond* Selphie! *Runs to her* Are ya injured?",
    options: [{
      continue: { cont: true },
      nextText: 193,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 193,
    text: "I am fine. Minor injuries, nothing fatal.",
    options: [{
      continue: { cont: true },
      nextText: 194,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 194,
    text: "That’s good! That we lost ya! *Pauses and looks around* Now that everyone is here, let's see why these monsters were so adamant ‘bout this place...",
    options: [{
      continue: { cont: true },
      nextText: 195,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 195,
    text: "For hours, the party of adventurers searched thoroughly in the kobolds’ den. Then, the recruit looked up.",
    options: [{
      continue: { cont: true },
      nextText: 196,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 196,
    text: "Fascinating... even for mere beasts the thought of hiding their pilfered goods above our heads is rather clever.",
    options: [{
      continue: { cont: true },
      nextText: 197,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 197,
    text: "*Climbs up* Ah! Everyone! Come up, I found an item quite riveting!",
    options: [{
      continue: { cont: true },
      nextText: 198,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 198,
    text: "Gauntlets?",
    options: [{
      continue: { cont: true },
      nextText: 199,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 199,
    text: "Interestin'! These gauntlets here were only worn by the paladins I've seen back in Atlamond, the undersea city. They represent might n protection. I wonder how'd it got here. *Looks around* Well, seein' how we're 'quipped with the best gear, I bet we should give this to the rook!",
    options: [{
      continue: { cont: true },
      nextText: 200,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 200,
    text: "Are we genuinely keeping such a gaudy piece of armor?",
    options: [{
      continue: { cont: true },
      nextText: 201,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 201,
    text: "Ya dang right! This’ll piece is a treasure meant for the highest order. Not somethin’ ya find anywhere. *Turns around* Now, is everyone done lootin’?",
    options: [{
      continue: { cont: true },
      nextText: 202,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 202,
    text: "*Scooping treasure* Yes! But unfortunately, I am unable to gather all the treasure.",
    options: [{
      continue: { cont: true },
      nextText: 203,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 203,
    text: "Bah! We don't need 'em, Selphie! Aight! Time to go deeper in this cavern... hopefully we're near the end. ",
    options: [{
      continue: { cont: true },
      nextText: 204,
      character: 'Braedon'
    }
    ]
  },
  /*
  start of cavern conclusion
  */
  {
    id: 204,
    text: "After their long encounter inside the caverns, the group of adventurers emerged from the darkness into the bright luminescence of Father Sun.",
    options: [{
      continue: { cont: true },
      nextText: 205,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 205,
    text: "At long last! We have surfaced back to the outside. And it is quite shining!",
    options: [{
      continue: { cont: true },
      nextText: 206,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 206,
    text: "That's how it is when yer down underground fer too long! Hahaha! *Growls* Ah! It appears that my hunger acts like a wild animal! *Turns to everyone* Why don't we go back to the guild to accept payment for the quest n go devour some food?",
    options: [{
      continue: { cont: true },
      nextText: 207,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 207,
    text: "That sounds like a lovely idea! Let us go now.",
    options: [{
      continue: { cont: true },
      nextText: 208,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 208,
    text: "Wait... is it just me, or are we in Pelna Forest? The exit of the caverns stretches underground into Pelna Forest.",
    options: [{
      continue: { cont: true },
      nextText: 209,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 209,
    text: "Hmm... looks like yer right Tesmond! *Thinks* Ya know, now that we're here, we could finish that other quest; investigate Pelna Forest n its disturbance before we go back.",
    options: [{
      continue: { cont: true },
      nextText: 210,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 210,
    text: "Hmmmm... *Slightly sweats* I do believe there is no reason to go any further. Most importantly we are starving, so it is better for us to go back and recover.",
    options: [{
      continue: { cont: true },
      nextText: 211,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 211,
    text: "Now hold on Selphie that's nonsense! Besides, I got us some dried meat in case we’re in a terrible situation. How 'bout you rook? Wanna end it here or keep goin'?",
    options: [{
      continue: { cont: true },
      nextText: 212,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 212,
    text: "Continue or End",
    options: [{
      text: '[Continue]',
      continue: { cont: true },
      nextText: 213,
      character: 'Narrator'
    },
    {
      text: '[End]',
      continue: { cont: true },
      nextText: 217,
      character: 'Narrator'
    }
    ]
  },
  /*
  choose to continue
  */
  {
    id: 213,
    text: "In excitement, the recruit accepted Kingston's invitation to thrust ahead onto their next quest: Investigate Pelna Forest and its disturbance.",
    options: [{
      continue: { cont: true },
      nextText: 214,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 214,
    text: "Then it's settled! Let's first sit down n recover 'fore our next adventure.",
    options: [{
      continue: { cont: true },
      nextText: 215,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 215,
    text: "*Sigh* I much rather feast on sirloin and tender poultry than this preserved meat...",
    options: [{
      continue: { cont: true },
      nextText: 216,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 216,
    text: "I am not going to enjoy this...",
    options: [{
      continue: { cont: true },
      nextText: 220,
      character: 'Tesmond'
    }
    ]
  },
  /*
  if choose to end
  */
  {
    id: 217,
    text: "Aight! Then let's march back down to Stagcross!",
    options: [{
      continue: { cont: true },
      nextText: 218,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 218,
    text: "Delicious sirloin and tender poultry, here I come!",
    options: [{
      continue: { cont: true },
      nextText: 219,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 219,
    text: "*Relieved sigh* Okay, let us so.",
    options: [{
      continue: { cont: true },
      nextText: 270,
      character: 'Selphie'
    }
    ]
  },
  /*
  forest intro
  */
  {
    id: 220,
    text: "The rustling of leaves trailed behind our fabled adventurers. *Stomp* *Crackle* *Pause* our adventurers went and went until they confronted a hidden village deep within Pelna Forest",
    options: [{
      continue: { cont: true },
      nextText: 221,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 221,
    text: "*Looks around* Now this is a lovely village. I wonder who these people livin' here are?",
    options: [{
      continue: { cont: true },
      nextText: 222,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 222,
    text: "As Kingston looked closer... he saw the inhabitants within Pelna Forest... elves of all races. Sky elves flying carefree, water elves treading through water, wood elves building, and many more.",
    options: [{
      continue: { cont: true },
      nextText: 223,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 223,
    text: "*Looks at village* *Looks back to Selphie* So this is the reason for your worry... you must have a history with this village.",
    options: [{
      continue: { cont: true },
      nextText: 224,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 224,
    text: "No no... there is no correlation with me or this village. Nothing ha-…",
    options: [{
      continue: { cont: true },
      nextText: 225,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 225,
    text: "*Walks up* Hello travelers! I am Ulymar Levi, head of Pelna Forest, prophet to Evergreen Uavine. How may I assist you- SELPHIE? Where have you been, my child? ",
    options: [{
      continue: { cont: true },
      nextText: 226,
      character: 'Ulymar'
    }
    ]
  },
  {
    id: 226,
    text: "*Sweats* Hello... Father... how have you been?",
    options: [{
      continue: { cont: true },
      nextText: 227,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 227,
    text: "HUH? *Looks back and forth between Selphie and Ulymar* Well, ya do look akin. Should've known she was yers Ulymar.",
    options: [{
      continue: { cont: true },
      nextText: 228,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 228,
    text: "HUH?",
    options: [{
      continue: { cont: true },
      nextText: 229,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 229,
    text: "HUH? You know my Father?",
    options: [{
      continue: { cont: true },
      nextText: 230,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 230,
    text: "Yes, Braedon Kingston helped me in years prior, but we should move into my residence to talk further. Come.",
    options: [{
      continue: { cont: true },
      nextText: 231,
      character: 'Ulymar'
    }
    ]
  },
  {
    id: 231,
    text: "*Turns to recruit* Well recruit... I pressume we should accompany them.",
    options: [{
      continue: { cont: true },
      nextText: 232,
      character: 'Tesmond'
    }
    ]
  },
  /*
  start forest memorization game
  */
  {
    id: 232,
    text: "Here we are. Please, make yourselves comfortable while I prepare with sustenance. Selphie... would you mind assisting me?",
    options: [{
      continue: { cont: true },
      nextText: 233,
      character: 'Ulymar'
    }
    ]
  },
  {
    id: 233,
    text: "Sure Father... *Whispers* oh my stars... I wonder what he is going to say... *Walks away*",
    options: [{
      continue: { cont: true },
      nextText: 234,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 234,
    text: "Quite earthy... decoration the elves embellish themselves.",
    options: [{
      continue: { cont: true },
      nextText: 235,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 235,
    text: "Yep! Heard they enjoy the native landscape compared to modern times, especially when they have such long life spans. Everything we do goes by too fast for 'em.",
    options: [{
      continue: { cont: true },
      nextText: 236,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 236,
    text: "*Walks in* That indeed it does. *Hands everyone tea* I remember the times before the Great Calamity my great, great grandfather spoke about. He was the first chosen guardian to oversee Evergreen Uavine, the creation of Father Sun and Mother Moon. He was blessed and tasked to protect and assist all that live on Camuth, or specifically Urth with his wisdom. His existence bears a significant role during the Great Calamity. ",
    options: [{
      continue: { cont: true },
      nextText: 237,
      character: 'Ulymar'
    }
    ]
  },
  {
    id: 237,
    text: "How so?",
    options: [{
      continue: { cont: true },
      nextText: 238,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 238,
    text: "Without Evergreen Uavine, the Knights of the Fallen Order would have never survived Dark Lord Palentheous Irzaline's regime. Pelna Forest was one of the last few remaining strongholds against the dark forces largely due to Evergreen Uavine's blessing.",
    options: [{
      continue: { cont: true },
      nextText: 239,
      character: 'Ulymar'
    }
    ]
  },
  {
    id: 239,
    text: "Okay Father that is enough. Surely everyone knows that story.",
    options: [{
      continue: { cont: true },
      nextText: 240,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 240,
    text: "The world changes rapidly my dear. It is better to always remind every person of their history rather than forget. But you are correct, we have other matters to discuss no doubt... let us talk with Evergreen Uavine.",
    options: [{
      continue: { cont: true },
      nextText: 241,
      character: 'Ulymar'
    }
    ]
  },
  {
    id: 241,
    text: "The band of adventurers guided by Ulymar Levi exited the residence and walked towards the end of the village to a large gate. This large gate was guarded by a mass of elves which when opened, led the path to Evergreen Uavine.",
    options: [{
      continue: { cont: true },
      nextText: 242,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 242,
    text: "Hmmmmmm... Ahhhh... adventurers of the newest age... I have waited for your arrival. I am Evergreen Uavine as you were told by Ulymar Levi. Hmmmm... the world has shaken once more... the reappearance of Andurath the knightmare is upon us. And with his coming, the emergence of a fatal catastrophe will strike once more. To prevent such passing, I must entrust the powers of old to anew. Which is why I startled the fauna of these lands... in search of a champion. Young child... your eyes glimmer with bravery yet you are inexperienced. For me to give such a relic to yourself... I must test you...",
    options: [{
      continue: { cont: true },
      nextText: 243,
      character: 'Evergreen'
    }
    ]
  },
  /*
  starts the game put it in a separate file

  moved to forest conclusion
  */
  {
    id: 243,
    text: "It seems Evergreen Uavine has decided... what will you do now?",
    options: [{
      continue: { cont: true },
      nextText: 244,
      character: 'Ulymar'
    }
    ]
  },
  /*
  if user beats the memorization game
  */
  {
    id: 244,
    text: "Well, it seems this whole adventure was decided by our chosen hero so he's gonna choose. *Pats back* Hahahaha! My boy! Looks like life with yer is gonna be full of surprises.",
    options: [{
      continue: { cont: true },
      nextText: 245,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 245,
    text: "That it is. Who would have thought I would come back here, especially to confront my Father?",
    options: [{
      continue: { cont: true },
      nextText: 246,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 246,
    text: "Young child... as I communicate within your mind... I must mention... for better or for worse... please venture deeper into Pelna Forest... for a shrine built in memory of a knight of the Fallen Order is occupied...",
    options: [{
      continue: { cont: true },
      nextText: 247,
      character: 'Evergreen'
    }
    ]
  },

  {
    id: 247,
    text: "Well, everything is finished here. Shall we head back to Stagcross everyone?",
    options: [{
      continue: { cont: true },
      nextText: 248,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 248,
    text: "Yes or No",
    options: [{
      text: '[Yes]',
      continue: { cont: true },
      nextText: 249,
      character: 'Narrator'
    },
    {
      text: '[No]',
      continue: { cont: true },
      nextText: 250,
      character: 'Narrator'
    }
    ]
  },
  //yes option
  {
    id: 249,
    text: "Aight! LETSAGOOOOOO! Bahahahahaha!",
    options: [{
      continue: { cont: true },
      nextText: 289,
      character: 'Braedon'
    }
    ]
  },
  //no option
  {
    id: 250,
    text: "What! We finished our quest, what else we gotta do, rook? Look at rocks?",
    options: [{
      continue: { cont: true },
      nextText: 251,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 251,
    text: "Yes, recruit. What other objective entices you?",
    options: [{
      continue: { cont: true },
      nextText: 252,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 252,
    text: "With a sharp turn to his left, the recruit points deeper into Pelna Forest. With my experience, people like the recruit know something... it must be involving a plot armor deal.",
    options: [{
      continue: { cont: true },
      nextText: 253,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 253,
    text: "What is deeper in Pelna Forest recruit? I see no need to-",
    options: [{
      continue: { cont: true },
      nextText: 254,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 254,
    text: "A shrine is located there. Before you were born Selphie, we built a shrine for the lost knights of the Fallen Order. I suggest everyone go, especially when the chosen hero proposes it.",
    options: [{
      continue: { cont: true },
      nextText: 255,
      character: 'Ulymar'
    }
    ]
  },
  {
    id: 255,
    text: "Then deeper we go! This could help me resolve a few things...",
    options: [{
      continue: { cont: true },
      nextText: 256,
      character: 'Braedon'
    }
    ]
  },
  /*
  lake intro
  */
  {
    id: 256,
    text: "Our adventurers trudged through the thick forest to discover the shrine built for the lost knights of the Fallen Order.",
    options: [{
      continue: { cont: true },
      nextText: 257,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 257,
    text: "How much longer till we achieve our destination? My sense of time has perceived this trip as prolonging...",
    options: [{
      continue: { cont: true },
      nextText: 258,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 258,
    text: "Stop yer whinin'. I bet we're already close to the shrine.",
    options: [{
      continue: { cont: true },
      nextText: 259,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 259,
    text: "And how do you discern that fact?",
    options: [{
      continue: { cont: true },
      nextText: 260,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 260,
    text: "By everyone else's reaction.",
    options: [{
      continue: { cont: true },
      nextText: 261,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 261,
    text: "Everyone stopped, they saw a flash of blue that overcame the landscape. The glistening sounds of streams grew louder. Then the unfolding waterfall appeared in front of the group where the dazzling site of the shrine sat in the center of lake...",
    options: [{
      continue: { cont: true },
      nextText: 262,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 262,
    text: "Wow! What a marvelous location!",
    options: [{
      continue: { cont: true },
      nextText: 263,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 263,
    text: "*Grins* Whaddya say, Tesmond? Are we there yet?",
    options: [{
      continue: { cont: true },
      nextText: 264,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 264,
    text: "Hmm... fine. Anywho, why must we gaze in front of the shrine, shall we go in and observe instead?",
    options: [{
      continue: { cont: true },
      nextText: 265,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 265,
    text: "Yes! I hope there is treasure!",
    options: [{
      continue: { cont: true },
      nextText: 266,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 266,
    text: "Selphie... ya don't wanna disrespect the dead now do ya? Now I suggest ya leave everythin' alone.",
    options: [{
      continue: { cont: true },
      nextText: 267,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 267,
    text: "Humph... okay.",
    options: [{
      continue: { cont: true },
      nextText: 268,
      character: 'Selphie'
    }
    ]
  },
  /*
  lake scenarios
  */
  {
    id: 268,
    text: "What a beautiful interior! *Goes around and looks*",
    options: [{
      continue: { cont: true },
      nextText: 269,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 269,
    text: "Ya got that right. For the ones who saved the world I expected as much. Imma go around and see these memorials. *Walks away*",
    options: [{
      continue: { cont: true },
      nextText: 270,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 270,
    text: "Same as for me. Recruit, whatsoever is the need for you in this shrine, I encourage you to start now. *Walks away* ",
    options: [{
      continue: { cont: true },
      nextText: 271,
      character: 'Tesmond'
    }
    ]
  },
  //need a conditional statement for this one and also to give the leggings
  {
    id: 271,
    text: "And so, the recruit looked. Why is this shrine necessary to visit? What is its importance? Why was the recruit called the chosen hero? Many questions filled the recruit’s head... gO To tHE rOoM... The startled recruit questions to spoke, but there was no reply...",
    options: [{
      continue: { cont: true },
      nextText: 272,
      character: 'Narrator'
    }
    ]
  },
  //if completed the village gamble game with the chestplate
  {
    id: 272,
    text: "Then a pulsating noise surrounded the recruit... It starts to beat faster... and faster... then it stopped. What was that noise, the recruit questioned? Being lost in thought at that moment, the recruit realized they were in front of an unfinished monument in the room the mysterious voice called. The monument was dressed with greaves and boots.",
    options: [{
      continue: { cont: true },
      nextText: 276,
      character: 'Narrator'
    }
    ]
  },
//end of if user has chestplate
  {
    id: 273,
    text: "… The helm of insight lit up, illuminating the room. *Whispers* dO iT... TaKe hOLd... Of tHe lEGgiNgS oF sWIftNeSS... the voice faded away, as well as the light shining from the helm. Now with a sense of composure, the recruit deduced Evergreen Uavine sent the recruit to the shrine to wear the leggings of swiftness.",
    options: [{
      continue: { cont: true },
      nextText: 274,
      character: 'Narrator'
    }
    ]
  },
//if completed cavern with the gauntlets
  {
    id: 274,
    text: "Suddenly the recruit’s arms moved onto the leggings. Now for sure the recruit knows this was Evergreen Uavine's wish. ",
    options: [{
      continue: { cont: true },
      nextText: 276,
      character: 'Narrator'
    }
    ]
  },
//if the user has completed both chestplate and gauntlets
  {
    id: 275,
    text: "“I know what my task is” the recruit answered... “I understand Evergreen Uavine”. “I will become a hero”...",
    options: [{
      continue: { cont: true },
      nextText: 276,
      character: 'Narrator'
    }
    ]
  },
  //back to regular dialogue choices
  {
    id: 276,
    text: "Hello recruit *Waves* Are you here? *Recruit nods* Good, well I am done inspecting this shrine. *Looks at recruit* And it seems you are done as well. Let us gather everyone else. Hope Kingston does not get infuriated at you “borrowing” those leggings.",
    options: [{
      continue: { cont: true },
      nextText: 277,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 277,
    text: "Hey! *Enters room* Have you seen Kingston? I do not know where he is?",
    options: [{
      continue: { cont: true },
      nextText: 279,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 278,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 279,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 279,
    text: "I have not... strange how he is lost... Come let us find him.",
    options: [{
      continue: { cont: true },
      nextText: 280,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 280,
    text: "Tesmond, Selphie, and the recruit searched throughout the shrine... where could Kingston be?",
    options: [{
      continue: { cont: true },
      nextText: 281,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 281,
    text: "*Stops* Kingston, where have you been? We have been looki-",
    options: [{
      continue: { cont: true },
      nextText: 282,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 282,
    text: "Quiet... Let me finish my prayer. *Stands up*",
    options: [{
      continue: { cont: true },
      nextText: 283,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 283,
    text: "*Looks at monument* A friend of yours?",
    options: [{
      continue: { cont: true },
      nextText: 284,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 284,
    text: "A good one at that. Hew the Undefeated, a friend I will never forget. He was known for his menacing appearance, yet he was the kindest soul. He reminds me of you, Tesmond.",
    options: [{
      continue: { cont: true },
      nextText: 285,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 285,
    text: "How so?",
    options: [{
      continue: { cont: true },
      nextText: 286,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 286,
    text: "He holds an act, just like you. Aight, enough of that. Seems like everyone is done. *Looks at the recruit* Now where did ya get those leggin’?",
    options: [{
      continue: { cont: true },
      nextText: 287,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 287,
    text: "The recruit explains to Kingston the experience he encountered earlier in the shrine.",
    options: [{
      continue: { cont: true },
      nextText: 288,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 288,
    text: "… Aight... then it must be a sign to keep 'em, who knows what consequence will happen without 'em. So, let's go back to Stagcross n hand over our finished quests.",
    options: [{
      continue: { cont: true },
      nextText: 289,
      character: 'Tesmond'
    }
    ]
  },
  /*
  guild
  */
  {
    id: 289,
    text: "Ah... We have arrived back in Stagcross. … And it seems my stomach is rumbling. Kingston if you would be so kind as to procure our payment in the guild while I dine?",
    options: [{
      continue: { cont: true },
      nextText: 290,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 290,
    text: "Sure! Ya get yer fill Tesmond while the rest of us finish our end n afterwards will join ya.",
    options: [{
      continue: { cont: true },
      nextText: 291,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 291,
    text: "In fact, I might not join you, Kingston. I need to use the lavatory. Like... now! *Zooms off*",
    options: [{
      continue: { cont: true },
      nextText: 292,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 292,
    text: "Ooookay... then it's just you n me, rook! *Pats back* Hahaha. Let's go to the guild!",
    options: [{
      continue: { cont: true },
      nextText: 293,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 293,
    text: "Here is your payment! Please come again!",
    options: [{
      continue: { cont: true },
      nextText: 294,
      character: 'Clerk'
    }
    ]
  },
  {
    id: 294,
    text: "Aight, got the gold. Now let's head back to Tesmond!",
    options: [{
      continue: { cont: true },
      nextText: 295,
      character: 'Braedon'
    }
    ]
  },
  //if previous scenario was the lake needs a conditional statement
  {
    id: 295,
    text: "As Kingston and the recruit were leaving the guild, they overhead something... interesting...",
    options: [{
      continue: { cont: true },
      nextText: 296,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 296,
    text: "Hey did ya hear? Supposedly an adventurer came screaming about finding the tomb of one of those knights of the Fallen Order!",
    options: [{
      continue: { cont: true },
      nextText: 297,
      character: 'Group'
    }
    ]
  },
  {
    id: 297,
    text: "No, I didn't. Did anyone figure out what was inside?",
    options: [{
      continue: { cont: true },
      nextText: 298,
      character: 'Group'
    }
    ]
  },
  {
    id: 298,
    text: "Nah. Many folks already left and went in, but none of them returned. ",
    options: [{
      continue: { cont: true },
      nextText: 299,
      character: 'Group'
    }
    ]
  },
  {
    id: 299,
    text: "Then maybe we can give it a shot! No one has ever found a knight’s burial site. There might be some good loot.",
    options: [{
      continue: { cont: true },
      nextText: 300,
      character: 'Group'
    }
    ]
  },
  {
    id: 301,
    text: "Fuhgettaboutit. There's no way.",
    options: [{
      continue: { cont: true },
      nextText: 302,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 302,
    text: "Come on! *Nudge* We won't lose anything!",
    options: [{
      continue: { cont: true },
      nextText: 303,
      character: 'Group'
    }
    ]
  },
  {
    id: 303,
    text: "Except our lives...",
    options: [{
      continue: { cont: true },
      nextText: 304,
      character: 'Group'
    }
    ]
  },
  {
    id: 304,
    text: "Interestin'. *Looks at the recruit* Suppose this is a sign... wouldn't ya think, rook?",
    options: [{
      continue: { cont: true },
      nextText: 305,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 305,
    text: "The recruit nods.",
    options: [{
      continue: { cont: true },
      nextText: 319,
      character: 'Narrator'
    }
    ]
  },
  //end of if went to lake scenario
  {
    id: 306,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 307,
      character: 'Tesmond'
    }
    ]
  },
  //if previous scenario was caverns or forest
  {
    id: 307,
    text: "As Kingston and the recruit were leaving the guild, a young adventurer barged into the guild exclaiming...",
    options: [{
      continue: { cont: true },
      nextText: 308,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 308,
    text: "I FOUND A TOMB OF ONE OF THE KNIGHTS OF THE FALLEN ORDER!",
    options: [{
      continue: { cont: true },
      nextText: 309,
      character: 'Random'
    }
    ]
  },
  {
    id: 309,
    text: "What is all this racket? Ya makin' everyone angsty.",
    options: [{
      continue: { cont: true },
      nextText: 310,
      character: 'Bellecote'
    }
    ]
  },
  {
    id: 310,
    text: "I discovered a knight of the Fallen Order's tomb. And I need a group to help me explore the inside.",
    options: [{
      continue: { cont: true },
      nextText: 311,
      character: 'Random'
    }
    ]
  },
  {
    id: 311,
    text: "So, it seems... Anyone here want to join the young man?",
    options: [{
      continue: { cont: true },
      nextText: 312,
      character: 'Bellecote'
    }
    ]
  },
  {
    id: 312,
    text: "*Looks at recruit* I bet ya wanna join him. This offer sounds temptin'.",
    options: [{
      continue: { cont: true },
      nextText: 313,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 313,
    text: "The recruit nods.",
    options: [{
      continue: { cont: true },
      nextText: 314,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 314,
    text: "Then it's settled. *Raises hand* We wanna join, Bellecote!",
    options: [{
      continue: { cont: true },
      nextText: 315,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 315,
    text: "Ah my good friend! *Looks at adventurer* Now you have your group, young adventurer.",
    options: [{
      continue: { cont: true },
      nextText: 316,
      character: 'Bellecote'
    }
    ]
  },
  {
    id: 316,
    text: "*Bows* Thank you very much GuildMaster. *Walks over* Hello my name is Azazel. I hope you will enjoy my selfish request.",
    options: [{
      continue: { cont: true },
      nextText: 317,
      character: 'Random'
    }
    ]
  },
  {
    id: 317,
    text: "No worries, we were already interested! Oh, and my name is Kingston. *Puts hand on shoulder* And this here is the rookie for my group. I also have two others named Tesmond and Selphie. If it's alright with you, we were plannin' on eatin'.",
    options: [{
      continue: { cont: true },
      nextText: 318,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 318,
    text: "That is fine. ",
    options: [{
      continue: { cont: true },
      nextText: 319,
      character: 'Random'
    }
    ]
  },
  //end of if previous scenario was lake or forests
  //need conditional statement to determine knight trial path
  {
    id: 319,
    text: "Then it's settled! Let's meet back with Tesmond n eat before we go... I wonder if Selphie is alright...",
    options: [{
      continue: { cont: true },
      nextText: 320,
      character: 'Braedon'
    }
    ]
  },
  /*
  knight trial intro
  */
 //if previous was caverns or forest
  {
    id: 320,
    text: "So, how’d ya find this tomb, Azazel?",
    options: [{
      continue: { cont: true },
      nextText: 321,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 321,
    text: "It was by chance. I just happened to find the tomb while I was completing my herb collecting quest and thought this would be a good opportunity to explore it.",
    options: [{
      continue: { cont: true },
      nextText: 322,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 322,
    text: "That it is. No one has found the tomb of a knight of the Fallen Order for generations. You are very lucky. ",
    options: [{
      continue: { cont: true },
      nextText: 323,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 323,
    text: "*Shrugs* You praise me too much... anyways here it is. So, how about we go in?",
    options: [{
      continue: { cont: true },
      nextText: 324,
      character: 'Azazel'
    }
    ]
  },
  {
    id: 324,
    text: "Certainly! *Eyes sparkle*",
    options: [{
      continue: { cont: true },
      nextText: 325,
      character: 'Selphie'
    }
    ]
  },
  //end of if previous was caverns or forest

  //if previous was lake
  {
    id: 325,
    text: "Hmmm... supposedly the tomb is 'round here...",
    options: [{
      continue: { cont: true },
      nextText: 326,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 326,
    text: "Supposedly? I think this is a sham, especially when you rely on information received by lower ranked adventurers.",
    options: [{
      continue: { cont: true },
      nextText: 327,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 327,
    text: "*Saddened*",
    options: [{
      continue: { cont: true },
      nextText: 328,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 328,
    text: "And you are making Selphie cry... she unequivocally wanted to seize the treasures inside and now look at her.",
    options: [{
      continue: { cont: true },
      nextText: 329,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 329,
    text: "Aight, sorry Selphie. Well, maybe me n the recruit was wrong 'bout this tomb business.",
    options: [{
      continue: { cont: true },
      nextText: 330,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 330,
    text: "Or was he... just over the hill a mysterious young adventurer sprinted in their direction...",
    options: [{
      continue: { cont: true },
      nextText: 331,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 331,
    text: "HOY! *Runs over* *Pant* *Pant* Quickly! I need help, my group is stuck in the tomb of one of the knights of the Fallen Order! ",
    options: [{
      continue: { cont: true },
      nextText: 332,
      character: 'Azazel'
    }
    ]
  },
  {
    id: 332,
    text: "Sure! Show the way son. Everyone follow him.",
    options: [{
      continue: { cont: true },
      nextText: 333,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 333,
    text: "Thank you! And my name is Azazel.",
    options: [{
      continue: { cont: true },
      nextText: 334,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 334,
    text: "Kingston",
    options: [{
      continue: { cont: true },
      nextText: 335,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 335,
    text: "Tesmond",
    options: [{
      continue: { cont: true },
      nextText: 336,
      character: 'Tesmond'
    }
    ]
  },
  //need to add the link for the minigame to this
  {
    id: 336,
    text: "Selphie and the quiet companion is our recruit.",
    options: [{
      continue: { cont: true },
      nextText: 337,
      character: 'Selphie'
    }
    ]
  },
  //end of if lake scenario
  /*
  knight riddles opens a new file

  knight conclusion
  */

  {
    id: 337,
    text: "Tesmond, Azazel, and the recruit ran into the new room, along with Kingston and Selphie who came out of another room on the right. ",
    options: [{
      continue: { cont: true },
      nextText: 338,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 338,
    text: "Welp, both me n Selphie had to race up a slope ‘fore we drowned. Luckily, Selphie’s frost breath slowed the water for me.",
    options: [{
      continue: { cont: true },
      nextText: 339,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 339,
    text: "Kingston! Selphie! How did you both get here.",
    options: [{
      continue: { cont: true },
      nextText: 340,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 340,
    text: "Yes. What obstacles did you overcome, Tesmond?",
    options: [{
      continue: { cont: true },
      nextText: 341,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 341,
    text: "Well Azazel, the recruit, and I had to solve three riddles with holy water.",
    options: [{
      continue: { cont: true },
      nextText: 342,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 342,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 343,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 343,
    text: "Must be why Selphie's frost breath didn't freeze the water entirely. ",
    options: [{
      continue: { cont: true },
      nextText: 344,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 344,
    text: "Uh guys... what is Azazel doing?",
    options: [{
      continue: { cont: true },
      nextText: 345,
      character: 'Selphie'
    }
    ]
  },
  /*
  dragon intro
  */
  {
    id: 345,
    text: "As the four peer to the edge of the room, Azazel was near a statue of a knight holding a sword, brazen with power. ",
    options: [{
      continue: { cont: true },
      nextText: 346,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 346,
    text: "After a long time, at last I possess the Fleshripper, blade of woe and terror. ",
    options: [{
      continue: { cont: true },
      nextText: 347,
      character: 'Andurath'
    }
    ]
  },
  //needs a conditional statement
  {
    id: 347,
    text: "I do not want to make assumptions, but I do believe we might be in trouble. ",
    options: [{
      continue: { cont: true },
      nextText: 348,
      character: 'Tesmond'
    }
    ]
  },
  //if lake scenario
  {
    id: 348,
    text: "Hey Azazel! There never was a group stuck in the tomb was there?",
    options: [{
      continue: { cont: true },
      nextText: 349,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 349,
    text: "Why would there be? After all, they all died by my hands. Useless fodder I tell you. Each and every last one of them. ",
    options: [{
      continue: { cont: true },
      nextText: 350,
      character: 'Tesmond'
    }
    ]
  },
  //end of lake scenario path
  {
    id: 350,
    text: "So, this was all part of yer plan! To use us",
    options: [{
      continue: { cont: true },
      nextText: 351,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 351,
    text: "Yes… Braedon Kingston.",
    options: [{
      continue: { cont: true },
      nextText: 352,
      character: 'Andurath'
    }
    ]
  },
  {
    id: 352,
    text: "*Shocked* How’d ya know my full name! I only gave ya my first!",
    options: [{
      continue: { cont: true },
      nextText: 353,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 353,
    text: "How would I ever forget a friend who gave me this parting gift.",
    options: [{
      continue: { cont: true },
      nextText: 354,
      character: 'Andurath'
    }
    ]
  },
  {
    id: 354,
    text: "Azazel lifted his eyepatch, revealing his mutilated eye.",
    options: [{
      continue: { cont: true },
      nextText: 355,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 355,
    text: "… *Realised face*",
    options: [{
      continue: { cont: true },
      nextText: 356,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 356,
    text: "Who is it Kingston?",
    options: [{
      continue: { cont: true },
      nextText: 357,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 357,
    text: "It is not who I am, it is what I am... a forgotten champion, a sacrifice, a warlord of Dark Lord Palentheous Irzaline's reign...",
    options: [{
      continue: { cont: true },
      nextText: 358,
      character: 'Andurath'
    }
    ]
  },
  {
    id: 358,
    text: "Impossible!",
    options: [{
      continue: { cont: true },
      nextText: 359,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 359,
    text: "Yes *Transforms* I am Andurath, the knightmare! *Roar* You mortals banished me to the realms of Palentheous Irzaline as your scapegoat! I was your hero! Now no more... I shall purge this world of their sins! ",
    options: [{
      continue: { cont: true },
      nextText: 360,
      character: 'Andurath'
    }
    ]
  },
  {
    id: 360,
    text: "*Panicked* Um... everyone... what do we do?",
    options: [{
      continue: { cont: true },
      nextText: 361,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 361,
    text: "I'm going to die, I'm going to die, I'm going to die, I'm going to die, I'm going to die...",
    options: [{
      continue: { cont: true },
      nextText: 362,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 362,
    text: "Everyone calm down! *Turns* Rook! Do you have the resolution in you! Tell me, fight or run!",
    options: [{
      continue: { cont: true },
      nextText: 363,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 363,
    text: "Fight or Run",
    options: [{
      text: '[Fight]',
      continue: { cont: true },
      nextText: 388,
      character: 'Tesmond'
    },
    {
      text: '[Run]',
      continue: { cont: true },
      nextText: 364,
      character: 'Tesmond'
    }
    ]
  },
  /*
  Dragon scenarios
  */
 //if choose to run
  {
    id: 364,
    text: "Knowing the dire situation, the recruit points towards the exit. The recruit would rather let everyone live than the possibility of dying.",
    options: [{
      continue: { cont: true },
      nextText: 365,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 365,
    text: "I hope you know what you are doing! *Grabs Tesmond and Selphie* We need to go!",
    options: [{
      continue: { cont: true },
      nextText: 366,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 366,
    text: "*Faints*",
    options: [{
      continue: { cont: true },
      nextText: 367,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 367,
    text: "If you truly believe I would let you mortals live... what a blunder would I take! I mean... the opportunity to kill you all is so alluring!",
    options: [{
      continue: { cont: true },
      nextText: 368,
      character: 'Andurath'
    }
    ]
  },
  {
    id: 368,
    text: "With a loud roar, Andurath puffed a foul breath of toxic venom towards the exit.",
    options: [{
      continue: { cont: true },
      nextText: 369,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 369,
    text: "Run! I will be a distraction. Elements, acquire a gust of wind and take roots of earth... Boulder Rainfall!",
    options: [{
      continue: { cont: true },
      nextText: 370,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 370,
    text: "Hahaha! Such simple pebbles only graze me! How about I give you an example of true power!",
    options: [{
      continue: { cont: true },
      nextText: 371,
      character: 'Andurath'
    }
    ]
  },
  {
    id: 371,
    text: "No, Selphie!",
    options: [{
      continue: { cont: true },
      nextText: 372,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 372,
    text: "Andurath spurred a bolt of lightning with his jaws... BOOM... and ended Selphie...",
    options: [{
      continue: { cont: true },
      nextText: 373,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 373,
    text: "*Awakes* We need to get out of here! Selpie's sacrifice won’t be in vain! ",
    options: [{
      continue: { cont: true },
      nextText: 374,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 374,
    text: "As if! Rookie! Get Tesmond out of here! Andurath is coming!",
    options: [{
      continue: { cont: true },
      nextText: 375,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 375,
    text: "Kingston bolted upward towards Andurath. And with a loud crash, Kingston's warhammer hurled Andurath.",
    options: [{
      continue: { cont: true },
      nextText: 376,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 376,
    text: "*Shriek* Braedon Kingston, your strength is still evident from your renowned days as a knight of the Fallen Order! But your age has paved the way for weakness. ",
    options: [{
      continue: { cont: true },
      nextText: 377,
      character: 'Andurath'
    }
    ]
  },
  {
    id: 377,
    text: "My age has only sharpened my judgment! If I were you Andurath, I would prioritize the opponent in front of me!",
    options: [{
      continue: { cont: true },
      nextText: 378,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 378,
    text: "Have it your way! *Roar*",
    options: [{
      continue: { cont: true },
      nextText: 379,
      character: 'Andurath'
    }
    ]
  },
  {
    id: 379,
    text: "Kingston and Andurath clashed one another with heavy blows. All the more while Kingston’s battle was sought, Tesmond and the recruit encountered a hindrance.",
    options: [{
      continue: { cont: true },
      nextText: 380,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 380,
    text: "The exit! It's closing! We need to leave quick, forget about Kingston!",
    options: [{
      continue: { cont: true },
      nextText: 381,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 381,
    text: "But the recruit was steadfast in his decision. The recruit would rather stay than see another friend die. ",
    options: [{
      continue: { cont: true },
      nextText: 382,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 382,
    text: "Are you insane? No, I am not staying. Damn it all! *Runs away*",
    options: [{
      continue: { cont: true },
      nextText: 383,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 383,
    text: "*Turns around* What are you doing! Rook spare yourself!",
    options: [{
      continue: { cont: true },
      nextText: 384,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 384,
    text: "*Bite* *Slash* ",
    options: [{
      continue: { cont: true },
      nextText: 385,
      character: 'Andurath'
    }
    ]
  },
  {
    id: 385,
    text: "Argh! *Cough*",
    options: [{
      continue: { cont: true },
      nextText: 386,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 386,
    text: "Hahahaha! I thank you ignorant simpleton, your interaction costed Braedon Kingston his life! I must say… I do not know if this is bravery or a straightforward lack of intelligence, but I must repay you. ",
    options: [{
      continue: { cont: true },
      nextText: 387,
      character: 'Andurath'
    }
    ]
  },
  {
    id: 387,
    text: "Andurath huffed and puffed, forming a ball of fire the size of the sun. And with a quick blow, the recruit incinerated into ash… UP IN FLAMES. Afterwards, Andurath’s terror stormed onto the citizens of Stagcross, leaving no survivors… the details of Tesmond Uglar’s whereabouts are unknown and the state of Camuth is ablaze… The world needs a hero… but who can stop Andurath’s inferno?",
    options: [{
      continue: { cont: true },
      nextText: 0,
      character: 'Narrator'
    }
    ]
  },
  //end of bad dragon ending 1
  //end of run option move to stats
  /*
  if option is to fight and has legendary armor
  */
  {
    id: 388,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 389,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 389,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 390,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 390,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 391,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 391,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 392,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 392,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 393,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 393,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 394,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 394,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 395,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 395,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 396,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 396,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 397,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 397,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 398,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 398,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 399,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 399,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 400,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 400,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 401,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 401,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 402,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 402,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 403,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 403,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 404,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 404,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 405,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 405,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 406,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 406,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 407,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 407,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 408,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 408,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 409,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 409,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 410,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 410,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 411,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 411,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 412,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 412,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 413,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 413,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 414,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 414,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 415,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 415,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 416,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 416,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 417,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 417,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 418,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 418,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 419,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 419,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 420,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 420,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 421,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 421,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 422,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 422,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 423,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 423,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 424,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 424,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 425,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 425,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 426,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 426,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 427,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 427,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 428,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 428,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 429,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 429,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 430,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 430,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 431,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 431,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 432,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 432,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 433,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 433,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 434,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 434,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 435,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 435,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 436,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 436,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 437,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 437,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 438,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 438,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 439,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 439,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 440,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 440,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 441,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 441,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 442,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 442,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 443,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 443,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 444,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 444,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 445,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 445,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 446,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 446,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 447,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 447,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 448,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 448,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 449,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 449,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 450,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 450,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 451,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 451,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 452,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 452,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 453,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 453,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 454,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 454,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 455,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 455,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 456,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 456,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 457,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 457,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 458,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 458,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 459,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 459,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 460,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 460,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 461,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 461,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 462,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 462,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 463,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 463,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 464,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 464,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 465,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 465,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 466,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 466,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 467,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 467,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 468,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 468,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 469,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 469,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 470,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 470,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 471,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 471,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 472,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 472,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 473,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 473,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 474,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 474,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 475,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 475,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 476,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 476,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 477,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 477,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 478,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 478,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 479,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 479,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 480,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 480,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 481,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 481,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 482,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 482,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 483,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 483,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 484,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 484,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 485,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 485,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 486,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 486,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 487,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 487,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 488,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 488,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 489,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 489,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 490,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 490,
    text: " ",
    options: [{
      continue: { cont: true },
      nextText: 491,
      character: 'Tesmond'
    }
    ]
  }
];

questions()
addEventListener("click", displayQuestions, false);