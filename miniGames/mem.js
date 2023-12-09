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
    text: 'Hmmmmmmm...tell me... who am I the creation of...young child?',
    options: [
      {
        text: 'Father Sun and Mother Moon',
        setState: { First: true },
        nextText: 2
      },
      {
        text: 'Father Moon and Mother Sun',
        nextText: 2
      },
      {
        text: 'Father water and Mothr Fire',
        nextText: 2
      }
      
    ]
  },
  {
    id: 2,
    text: 'Hmmmmmm...Who is the man...that terrorized all?',
    options: [
      {
        text: 'Dark Lord Palentheous Irzaline',
        setState: {Second: true},
        nextText: 3
      },
      {
        text: 'Princess Peach',
        nextText: 3
      },
      {
        text: 'Lord Farquad',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'Hmmmmm...What...is my blessing?',
    options: [
      {
        text: 'Wisdom',
        setState: {Third: true},
        nextText: 4
      },
      {
        text: 'Fear',
        nextText: 4
      },
      {
        text: 'Flight',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'I know your probably wondering why I am asking you these questions',
    options: [
      {
        text: 'I wouldnt question you...',
        requiredState: (currentState) => currentState.First & currentState.Second & currentState.Third,
        nextText: 5
      },
      {
        text: 'I was scared there for a second...',
        nextText: 6
      },
    ]
  },
  {
    id: 5,
    text: 'Young child...you have greatly pleased me...as well as our Mother and Father. I shall give the helm of a knight of the fallen order. This help is known as the Helpm of Insight. A man who knows of the past, knows of the future. Lastly, the road you tread will be dirty and ferocious... I pray that you will forgive me...in giving you such a treacherous path. Until next time we meet, young child.',
    options: [
      {
        text: 'You have recieved the Blessing',
        nextText: 5
      },
     
    ]
  },
  {
    id: 6,
    text: 'Hmmm... young child... you have much labor to do... unfortunately. But do not fret... Andurath should not strike so soon... unless a fool prods the beast. I encourage you and your companions to train... for now. I will be in wait for your next encounter... ',
    options: [
      {
        text: 'what could be her reasoning...',
      },
      
    ]
  },
]

startGame()