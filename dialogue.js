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

            const charcters = ["Braedon", "Tesmond", "Selphie"];

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
    text: 'Bah, did ya think I just went in the guild to flirt with the GuildMaster n forget to grab any quests? *Everyone faced Kingston with a nod* Almost! Bahahahahah. Well, I grabbed two. *Opens and lays 2 quests on the table* 1 quest wants us to explore these newly ‘scovered caverns and the other wants to figure out the racket o’er at Pelna Forest. So, whats the vote? ',
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
    continue: {cont: true},
    nextText: 20,
    character: 'Narrator'
  },
  {
    id: 20,
    text: '*Turns around after lecturing Tesmond* Great answer recruit! Okay everyone stop the incomprehensible talking and let us get ready for the Caverns! ',
    nextText: 30,
    character: 'Selphie'
  }
];