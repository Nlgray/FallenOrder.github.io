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


            const q2 = [
  {
    //inital question
    id: 1,
    text: 'Starter cranks?',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 2
      },
      {
        text: 'no',
        continue: {cont: true},
        nextText: 27
      }
    ]
  },
  {
    //yes to question 1
    id: 2,
    text: 'Engine fires?',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 3
      },
      {
        text: 'no',
        continue: {cont: true},
        nextText: 14
      }
    ]
  },
  {
    id: 3,
    text: 'Starts and stalls?',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 4
      },
      {
        text: 'no',
        continue: {cont: true},
        nextText: 5
      }

    ]
  },
  {
    id: 4,
    text: 'Check OBD, blink code?',
    options: [
    {
        text: 'yes',
        continue: {cont: true},
        nextText: 6
      },
      {
        text: 'no',
        continue: {cont: true},
        nextText: 7
      }
    ]
  },
  {
    //end this branch
    id: 5,
    text: 'Ignition timing, fuel problem, cranking too slow – battery, starter.',
    options: [
      {
        
        //continue: {cont: false},
        nextText: 0
      }
    ]
  },
  {
    //end this branch
    id: 6,
    text: 'Read OBD or OBD II or check for blink code access.',
    options: [
      {
        //continue: {cont: false},
        nextText: 0
      }
    ]
  },
  {
    id: 7,
    text: 'Stalls on key release to run?',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 8
      },
      {
        text: 'no',
        continue: {cont: true},
        nextText: 9
      }
    ]
  },
  {
    id: 8,
    text: 'Ignition “run” circuit or column key switch failure. Ring out with meter',
    options: [
      {
        //continue: {cont: true},
        nextText: 0
      }
    ]
  },
  {
    id: 9,
    text: 'Stalls in rain? ',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 10
      },
      {
        text: 'no',
        continue: {cont: true},
        nextText: 11
      }
    ]
  },
  {
    id: 10,
    text: 'Check for cracked coil, distributor. Check visible electrical arcing running in dark',
    options: [
      {
        //text: 'Restart',
        nextText: 0
      }
    ]
  },
  {
    id: 11,
    text: 'Stalls warm?',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 12
      },
      {
        text: 'no',
        continue: {cont: true},
        nextText: 13
      }
    ]
  },
  {
    id: 12,
    text: 'On cold stalling, check for stuck choke, EGR. Check for vacuum leak.',

  },
  {
    id: 13,
    text: 'Adjust idle, blow out fuel filter, check fuel pump output. Check vacuum leak or sensor failure'
  },
  {
    id: 14,
    text: 'Spark to plugs?',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 15
      },
      {
        text: 'no',
        continue: {cont: true},
        nextText: 16
      }
    ]
  },
  {
    id: 15,
    text: 'Fuel to filter?',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 17
      },
      {
        text: 'no',
        continue: {cont: true},
        nextText: 18
      }
    ]
  },
  {
    id: 16,
    text: 'Spark from coil?',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 21
      },
      {
        text: 'no',
        continue: {cont: true},
        nextText: 22
      }
    ]
  },
  {
    id: 17,
    text: 'Fuel injected?',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 19
      },
      {
        text: 'no',
        continue: {cont: true},
        nextText: 20
      }
    ]
  },
  {
    id: 18,
    text: 'Vapor lock, fuel pump, blockage.',

  },
  {
    id: 19,
    text: 'Single point, check throttle body. Electronic multipoint, separate diagnostic.',

  },
  {
    id: 20,
    text: 'Try starter spray in carb, throttle open.',

  },
  {
    id: 21,
    text: 'Mechanical distriibutor?',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 23
      },
      {
        text: 'no',
        continue: {cont: true},
        nextText: 24
      }
    ]
  },
  {
    id: 22,
    text: '12V+ at coil primary?',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 25
      },
      {
        text: 'no',
        continue: {cont: true},
        nextText: 26
      }
    ]
  },
  {
    id: 23,
    text: 'Check condenser, points or magnetic pick-up, rotor, or cap damage.',

  },
  {
    id: 24,
    text: 'For electronic distribution, see model manual for diagnostic checks.',

  },
  {
    id: 25,
    text: 'Test coil for internal short. Check secondary output wire resistance.',

  },
  {
    id: 26,
    text: 'Ignition system wiring, voltage regulator.',

  },
  {
    id: 27,
    text: 'Starter spins?',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 28
      },
      {
        text: 'no',
        continue: {cont: true},
        nextText: 29
      }
    ]
  },
  {
    id:28,
    text: 'Solenoid stuck, not powered. Missing teeth on flywheel.',
 
  },
  {
    id: 29,
    text: 'Battery reads over 12V.',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 30
      },
      {
        text: 'no',
        continue: {cont: true},
        nextText: 31
      }
    ]
  },
  {
    id: 30,
    text: 'Cleaned terminals',
    options: [
      {
        text: 'yes',
        continue: {cont: true},
        nextText: 32
      },
      {
        text: 'no',
        continue: {cont: true},
        nextText: 33
      }
    ]
  },
  {
    id: 31,
    text: 'Jump start or pop start car and check if battery is charging.',

  },
  {
    id: 32,
    text: 'With car in park or neutral, use heavy jumper or screwdriver to bypass starter relay solenoid. Test starter.',

  },
  {
    id: 33,
    text: 'Clean battery terminals and connectors, engine ground.',

  }
]

questions()
            addEventListener("click", displayQuestions, false);