// initialization
let players = { 
  'Player 1' : true
}
let squares = document.querySelectorAll('td');
let resetButton = document.getElementById('reset')
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
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = '[    ]' 
  };
};
reset();

//check methods
const verticalCheck = () => {
  let emptySq = '[ ]'
  for (var i = 0; i < 3; i++) {
    if ( (squares[i].innerText === squares[i+3].innerText) && 
    squares[i+3].innerText && squares[i+6].innerText && 
    ( squares[i].innerText !== emptySq && squares[i+3].innerText!== emptySq && squares[i+6].innerText!== emptySq)) {
      console.log('vertical win')
    }
  }
}

const horizCheck = () => {
  let emptySq = '[ ]'
  for (var i = 0; i < 3; i++) {
    if ( (squares[i].innerText === squares[i+1].innerText ) && 
    (squares[i+1].innerText === squares[i+2].innerText) && 
    ( squares[i].innerText !== emptySq && squares[i+1].innerText !== emptySq && squares[i+3]!== emptySq)) {
      console.log('horiz win')
    }
  }
}

const diagCheck = () => {
  for (var i = 0; i < 2; i++) {
    
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
}

