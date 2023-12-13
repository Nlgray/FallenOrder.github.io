//mazes

let maze1 = [
  `###############`,
  `_.........#####`,
  `#..#..##..#####`,
  `#..#..##......#`,
  `#..#..######..#`,
  `#..#..######..#`,
  `#..#..##......#`,
  `#..#..#########`,
  `#..#..........#`,
  `#..#######..###`,
  `#..#######..###`,
  `#...........###`,
  `#..########.###`,
  `#............!#`,
  `###############`,
];

let maze2 = [

  `########################################`, //index 1
  `_......................#...............#`,
  `#..#################...#...#########...#`,
  `#..#.......#.......#...#...#.......#...#`,
  `#..#...#...#...#...#...#...#...#..##...#`,
  `#..#...#.......#...........#...#...#...#`,
  `#..#########...#############...#...#...#`,
  `#..........#...............#...#...#...#`,
  `#####################..#...#...#...#...#`,
  `#......................#...#...#.......#`,
  `#..#################...#...#...#########`,
  `#..#...............#...#...#...........#`,
  `#..#############...#...#...#####...#...#`,
  `#......#.......#.......#.......#...#...#`,
  `#..#...#...#...#...#########...#####...#`,
  `#..#.......#...#...........#.......#...#`,
  `############...#################...#...#`,
  `#..............#.......#.......#...#...#`,
  `#..#############...#...#...#...#####...#`,
  `#..................#.......#..........-#`,
  `########################################`
];

let maze3 = [
  `#########################################`, //index 2
  `_.......................#...............#`,
  `#####################...#...#############`,
  `#...#.......#.......#...#...#...........#`,
  `#...#...#...#...#...#...#...#...#####...#`,
  `#.......#.......#.......#.......#...#...#`,
  `#...#########...#############...#...#####`,
  `#...........................#.......#...#`,
  `#######..#####..#########...#...#...#...#`,
  `#..........#............#...#...#.......#`,
  `#...#####..##########...#...#...#########`,
  `#...#...............#.......#...........#`,
  `#...#############...#...#...#####...#...#`,
  `#...#....#......#.......#.......#...#...#`,
  `#...###..#..#....#...#########...#####..#`,
  `#..........#....#...........#.......#...#`,
  `########..####...####..###########...#..#`,
  `#...............#.......#.......#.......#`,
  `#...#############...#...#...#...#####...#`,
  `#...................#.......#..........!#`,
  `#########################################`
];

let maze4 = [
  `#############################################################`, //index 3
  `_.......######.............##............#..................#`,
  `######..##......#..######......#####..#..#########..######..#`,
  `#....#..#########..##..######..#..##..#..................#..#`,
  `###.....##.........##.................#..#################..#`,
  `#....#######...######..########..######..#...............#..#`,
  `###.......#######..##..##.....#..#..###..#..#################`,
  `########..#.........#..##..#..###........#..#...........##..#`,
  `#......#..#..#..#####..##..#..#....#######..#..#..#..#..##..#`,
  `#..#####..#..#.........##..#..###..#.....#..#..#..#..#......#`,
  `#.........#..#..#..######..#..###..####..####..#..#..#..#####`,
  `########..####..#####..#####....#..............#..####..#...#`,
  `##.....#........#.............##################........##..#`,
  `##..#..#..#######..#..#..######...................####...#..#`,
  `#####..####..####..#..#..##..##..##################..#..##..#`,
  `###..........#.....#..#..##..............................#..#`,
  `#....######..####..#..#..##..#############################..#`,
  `###..#..###.....#..#..#..##..#..............##..............#`,
  `#.#..#.......####..#..#..##..###..####..#..#..#..#####..#####`,
  `#.#..######..#..#..#..#..##..#....#..#..#..#..#..#..#####..##`,
  `#.#.......#........#..#####....#..#..#..#..................##`,
  `#.######..##..######.........###..#.....################..###`,
  `#......#..#####..#####..##############..#..........#####..###`,
  `#..#####.............####...............###..#######........#`,
  `#..#......#########..#..#..################..#........#..#..#`,
  `#..#..##..##.........#..#..#..............#######..####..#..#`,
  `#..#####..#########..#..#..#..#..#..####..#..............#..#`,
  `#................##.....#..#..#..####..#..#..###..#..##..#..#`,
  `########..#####..########..#..#........#..#..#..###..##..#..#`,
  `#.............#...............##########.....#........#....!#`,
  `#############################################################`
];

let maze5 = [
  `#############################################################`, //index 4
  `_.........#.....................#.....................#######`,
  `########..##...#######..######..#..#################........#`,
  `##.....#..###..##............#..##########..##############..#`,
  `##..#.......#..##..#..#####..#..........................##..#`,
  `##..#########..##..####..#########..#############..#######..#`,
  `##..#..........##...............................#..#######..#`,
  `##..#..######..################..################...........#`,
  `##..#.......#..#................................##########..#`,
  `##..#########..######..###########..######################..#`,
  `##.............#............#..........#.............#......#`,
  `#############..######..######..#..########..###..#####..##..#`,
  `######..#########..##########..#######..##...............#..#`,
  `#.......................................##..#################`,
  `##########################################..#..............##`,
  `#.......#...................................###..########..##`,
  `#########..####################################..#......#..##`,
  `#.......#..#........#........................##..#..#####..##`,
  `#########..#..####..#..####################..##..#.........##`,
  `#.......#..#.....#..#..#..................#..##..############`,
  `#########..#######..#..#..##############..#..##..#..........#`,
  `#..........#...........#..#......#.....#..#..##.....######..#`,
  `#..##################..#..#..##..#..#..#..#..##########..#..#`,
  `#..#...................#..#..##..#..#..#..#..............#..#`,
  `#..########..########..#..#####..#..#..#..##########..#..#..#`,
  `#..#.........#.........#.........#..#..#..............#..#..#`,
  `#..#..############################..#..################..#..#`,
  `#..#.............#....##............#....................#..#`,
  `#..############..###..##..################################..#`,
  `#.....................##..................................-!#`,
  `#############################################################`
];

//global variables
let currentLevel = maze3;
let levels = [maze3];
let body = document.querySelector('body');
let divTable = document.getElementById('cover');
let tableEl = document.querySelector('table');
//if button clicked it loads this function for info on keys
let info = () => {
  let b1 = document.querySelector('#one')
  b1.textContent = 'WASD to move; press to play';
};
//if button clicked it loads the game
let loadPage = () => {
  let getRideOfMenu = () => {
    let b1 = document.querySelector('#one');
    let b2 = document.querySelector('#two');
    b1.style.display = 'none';
    b2.style.display = 'none';
    body.style.flexDirection = 'row';
    body.style.justifyContent = 'flex-start';
    body.style.alignItems = 'flex-start';

  };
  getRideOfMenu();

  let winer = () => {
    let winerP = document.createElement('section2');
    let para2 = document.createElement('p2');
    let h2 = document.createElement('h2');
    let button2 = document.createElement('button2');
    clearTable(tableEl);
    //styles for end condition
    mover.style.display = 'none';
    h2.textContent = 'Congrats!';
    para2.textContent = 'Wow you actually found the legendary item!!!';
    button2.textContent = 'Move on';
    button2.setAttribute('onclick', 'window.open("../story.html")');
    button2.setAttribute('type', 'button2');
    //adding end para to body and other child elements
    body.appendChild(winerP);
    winerP.appendChild(h2);
    winerP.appendChild(para2);
    winerP.appendChild(button2);
    body.style.justifyContent = 'center';

  }

  let lose = () => {
    //needed variables for end condition
    let looseP = document.createElement('section');
    let para = document.createElement('p');
    let h1 = document.createElement('h1');
    let button = document.createElement('button');
    clearTable(tableEl);
    //styles for end condition
    mover.style.display = 'none';
    h1.textContent = 'GAME OVER';
    para.textContent = 'You seem to have found your way back to the begining...try not to run into the walls they mess everything up';
    button.textContent = 'Move on';
    button.setAttribute('onclick', 'window.location.reload();');
    button.setAttribute('type', 'button');
    //adding end para to body and other child elements
    body.appendChild(looseP);
    looseP.appendChild(h1);
    looseP.appendChild(para);
    looseP.appendChild(button);
    body.style.justifyContent = 'center';
  };


  const clearTable = (tableEl) => {
    while (tableEl.firstChild) {
      tableEl.removeChild(tableEl.firstChild);
    }
  };

  let mover = document.createElement('div');
  const drawMaze = (maze) => {
    //creating a function to draw maze
    clearTable(tableEl);
    divTable.appendChild(mover);
    //equipting the mover
    mover.style.left = '320px';
    mover.style.top = '50px';
    mover.setAttribute('id', 'player');
    mover.textContent = '@';

    for (let i = 0; i < currentLevel.length; i++) { //loop for tr's

      let rowEl = document.createElement('tr');

      tableEl.appendChild(rowEl);

      for (let x = 0; x < currentLevel[i].length; x++) { //loop for td's
        let tdEl = document.createElement('td');
        rowEl.appendChild(tdEl)

        tdEl.innerHTML = maze[i].charAt(x);

        //conditionals below if the char is a specific character
        //then run the code below

        switch (maze[i].charAt(x)) {
          case '#':
            tdEl.setAttribute('class', 'wall');
            break;
          case '.':
            tdEl.setAttribute('class', 'freespace');
            break;
          case '_':
            tdEl.setAttribute('id', 'start');
            break;
          case '!':
            tdEl.setAttribute('id', 'win');
            break;


        }

      }

    };

  };

  // print the maze and table on the page
  drawMaze(currentLevel);


  window.addEventListener('keydown', event => {
    //mover based on which key is pressed 
    switch (event.key) {
      case 'w':
        mover.style.top = parseInt(mover.style.top) - 10 + 'px';
        //the mover moves on left and top axis then parseInt gives a interger

        break;
      case 'a':
        mover.style.left = parseInt(mover.style.left) - 10 + 'px';
        break;
      case 's':
        mover.style.top = parseInt(mover.style.top) + 10 + 'px';

        break;
      case 'd':

        mover.style.left = parseInt(mover.style.left) + 10 + 'px';
        break;
    }

    //defining variables to use for win and lose conditions
    let pos = mover.getBoundingClientRect();
    let win = document.querySelector('#win');
    let wins = win.getBoundingClientRect();
    let walls = document.querySelectorAll('.wall');


    for (let wall of walls) {
      let wowWalls = wall.getBoundingClientRect();
      // checks for wall and player collision
      if (pos.x < wowWalls.x + wowWalls.width && pos.x + pos.width > wowWalls.x && pos.y < wowWalls.y + wowWalls.height && pos.y + pos.height > wowWalls.y) {
        lose();
      } else if (pos.x < wins.x + wins.width && pos.x + pos.width > wins.x && pos.y < wins.y + wins.height && pos.y + pos.height > wins.y) {
        for (let i = 0; i < levels.length; i++) {
          winer();

        }
      }
      if (pos.x == 0) {
        lose();
      }
    }

  });

}; 