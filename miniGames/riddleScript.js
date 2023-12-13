const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Stand behind me, unified Or stand beside me in the light. To stand before me is suicide, so kneel below me or fight. What am I',
    options: [
      {
        text: 'Protector',
        setState: { First: true },
        nextText: 4
      },
      {
        text: 'looser',
        nextText: 2
      },
      {
        text: 'cryer',
        nextText: 2
      }

    ]
  },
  {
    id: 2,
    text: 'How bout a hint...A mother hen to her chicks, Stand behind me, unified Or stand beside me in the light. To stand before me is suicide, so kneel below me or fight. What am I',
    options: [
      {
        text: 'Protection',
        setState: { First: true },
        nextText: 4
      },
      {
        text: 'Bitcher',
        nextText: 3
      },
      {
        text: 'Moaner',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'I can only do one more hint...The job of a guard for a castle... Stand behind me, unified Or stand beside me in the light. To stand before me is suicide, so kneel below me or fight. What am I',
    options: [
      {
        text: 'Protect',
        setState: { First: true },
        nextText: 4
      },
      {
        text: 'Noone',
        nextText: 11
      },
      {
        text: 'Me',
        setState: { oops1: true },
        nextText: 11
      }
    ]
  },
  {
    id: 4,
    text: 'I am born in fear, raided in truth, and I come to my own in deed. When comes a time that I\m called forth, I come to serve the cause of need.',
    options: [
      {
        text: 'Courage',
        setState: { Second: true },
        nextText: 7
      },
      {
        text: 'Pourage',
        nextText: 5
      },
      {
        text: 'Storage',
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: 'ok ok.... some people say lions are this....I am born in fear, raided in truth, and I come to my own in deed. When comes a time that I\'m called forth, I come to serve the cause of need.',
    options: [
      {
        text: 'brave',
        setState: { Second: true },
        nextText: 7
      },
      {
        text: 'cool',
        nextText: 6
      },
      {
        text: 'big',
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    text: 'I dont know mann what do knights have?..I am born in fear, raided in truth, and I come to my own in deed. When comes a time that I\'m called forth, I come to serve the cause of need.',
    options: [
      {
        text: 'Valor',
        setState: { Second: true },
        nextText: 7
      },
      {
        text: 'Swords',
        nextText: 11
      },
      {
        text: 'The Ladiessss',
        setState: { oops2: true },
        nextText: 11
      }
    ]
  },
  {
    id: 7,
    text: 'More precious than gold, more powerful than the sword. With it you are a hero, without it, a murder',
    options: [
      {
        text: 'Honor',
        setState: { Third: true },
        nextText: 10
      },
      {
        text: 'Power',
        nextText: 8
      },
      {
        text: 'Steel',
        nextText: 8
      },
    ]
  },
  {
    id: 8,
    text: 'here is a hint for the road, have you ever heard of the Samerai code...More precious than gold, more powerful than the sword. With it you are a hero, without it, a murder',
    options: [
      {
        text: 'Honor',
        setState: { Third: true },
        nextText: 10
      },
      {
        text: 'blades',
        nextText: 9
      },
      {
        text: 'crying more',
        nextText: 9
      },
    ]
  },
  {
    id: 9,
    text: 'Your Lucky i have many hints what about having respect for someone... here is a hint for the road, have you ever heard of the Samerai code...More precious than gold, more powerful than the sword. With it you are a hero, without it, a murder',
    options: [
      {
        text: 'Honor',
        setState: { Third: true },
        nextText: 10
      },
      {
        text: 'Glory',
        nextText: 11
      },
      {
        text: 'Valor',
        setState: { oops3: true },
        nextText: 11
      },
    ]
  },
  {
    id: 10,
    text: 'You have completed all 3 of my rideles with flying colors!! Congrats to the smartest person in this city by far here is the legendary Sword of Night',
    options: [
      {
        text: 'Thanks for Playing',

        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'Your going to need some practice my friend....',
    options: [
      {
        text: 'Oof',
        nextText: -1
      }
    ]
  }
]

startGame()