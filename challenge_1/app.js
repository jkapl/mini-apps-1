// initialization
let players = { 
  'Player 1' : true
}
let squares = document.querySelectorAll('td');
let resetButton = document.getElementById('reset');
let winDisplay = document.getElementById('win');
resetButton.addEventListener('click', ()=> {
  reset();
});

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', (event)=> {
    addToe(event);
  })
}

const reset = () => {
  players['Player 1'] = true;
  winDisplay.innerText = '';
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = '[    ]' 
  };
};
reset();

//check methods
const verticalCheck = () => {
  let emptySq = '[ ]'
  for (var i = 0; i < 3; i++) {
    if ( (squares[i].innerText === squares[i+3].innerText) && (squares[i+3].innerText === squares[i+6].innerText)  &&  (squares[i].innerText !== emptySq)   ) {
      winFunc();
    }
  }
}

const horizCheck = () => {
  let emptySq = '[ ]';
  for (var i = 0; i < 3; i++) {
    if ( (squares[i].innerText === squares[i+1].innerText ) && 
    (squares[i+1].innerText === squares[i+2].innerText) && 
    ( squares[i].innerText !== emptySq && squares[i+1].innerText !== emptySq && squares[i+3]!== emptySq)) {
      winFunc();
    }
  }
}

const diagCheck = () => {
  let emptySq = '[ ]';
  if ( (squares[4].innerText !== emptySq) && ( (squares[0].innerText === squares[4].innerText) && (squares[4].innerText === squares[8].innerText) || ( (squares[2].innerText === squares[4].innerText) && (squares[4].innerText === squares[6].innerText) ) ) ) {
    winFunc();
  }
}

//play methods
const addToe = (event) => {
  console.log(players);
  if (players['Player 1']) {
    event.currentTarget.innerText = '[  x  ]'
  } else {
    event.currentTarget.innerText = '[  o  ]'
  }
  players['Player 1'] = !players['Player 1'];
  console.log(players['Player 1'] + ' after')
  horizCheck();
  verticalCheck();
  diagCheck();
}

const winFunc = () => {
  let winner = players["Player 1"] ? 'Player 2' : 'Player 1';
  winDisplay.innerText = winner + ' wins!';
}

