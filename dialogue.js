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
      text:'[Right]',
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
      nextText: 60,
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
      nextText: 142,
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
    text: "Yes! This\’ll piece is a treasure meant for the highest order. Not somethin\’ ya find anywhere. *Turns around* Now that we got ourselves some loot, let\’s go back the other way, got the feelin\’ it might be the way out.",
    options: [{
      continue: { cont: true },
      nextText: 183,
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
      nextText: 35,
      character: 'Narrator'
    }
    ]
  },
  {
    id: 192,
    text: "*Ignores Tesmond* Selphie! *Runs to her* Are ya injured?",
    options: [{
      continue: { cont: true },
      nextText: 58,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 193,
    text: "I am fine. Minor injuries, nothing fatal.",
    options: [{
      continue: { cont: true },
      nextText: 59,
      character: 'Selphie'
    }
    ]
  },
  {
    id: 194,
    text: "That’s good! That we lost ya! *Pauses and looks around* Now that everyone is here, let's see why these monsters were so adamant ‘bout this place...",
    options: [{
      continue: { cont: true },
      nextText: 60,
      character: 'Braedon'
    }
    ]
  },
  {
    id: 195,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 196,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 197,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 198,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 199,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 200,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 201,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 202,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 203,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 58,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 204,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 59,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 205,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 60,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 206,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 207,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 208,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 209,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 210,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 211,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 212,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 213,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 214,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 58,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 215,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 59,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 216,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 60,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 217,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 218,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 219,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 220,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 221,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 222,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 223,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 224,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 225,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 58,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 226,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 59,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 227,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 60,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 228,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 229,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 230,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 231,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 232,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 233,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 234,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 235,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 236,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 58,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 237,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 59,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 238,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 60,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 239,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 240,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 241,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 242,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 243,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 244,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 245,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 246,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 247,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 58,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 248,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 59,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 249,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 60,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 250,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 62,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 64,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 57,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 58,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 58,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 59,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 59,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 60,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 60,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 62,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 64,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 57,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 58,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 58,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 59,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 59,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 60,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 60,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 61,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 62,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 63,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 64,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 65,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 66,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
  {
    id: 67,
    text: "",
    options: [{
      continue: { cont: true },
      nextText: 35,
      character: 'Tesmond'
    }
    ]
  },
];

questions()
addEventListener("click", displayQuestions, false);