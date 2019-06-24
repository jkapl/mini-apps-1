// initialization
let players = { 
  'Player 1' : true
}
let squares = document.querySelectorAll('td');

let resetButton = document.getElementById('reset')
resetButton.addEventListener('click', ()=> {
  reset();
});

const reset = () => {
  currentPlayer = 'Player 1';

  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = '[  ]'
    squares[i].addEventListener('click', (event)=> {
      // event.currentTarget.innerText = '[ x ]'
      addToe(event);
    })
  };
};
reset();

//check methods
const verticalCheck = () => {

}

const horizCheck = () => {

}

const diagCheck = () => {

}

//play methods
const addToe = (event) => {
  if (players["Player 1"]) {
    event.currentTarget.innerText = '[  x  ]'
  } else {
    event.currentTarget.innerText = '[  o  ]'
  }
  players['Player 1'] = !players['Player 1'];
}

