// initialization
let currentPlayer = 'Player 1';

let resetButton = document.getElementById('reset')
resetButton.addEventListener('click', ()=> {
  reset();
});

const reset = () => {
  let squares = document.querySelectorAll('td');
  currentPlayer = 'Player 1';

  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = '[  ]'
    squares[i].addEventListener('click', ()=> {
      event.currentTarget.innerText = '[ x ]'
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
  // event.currentTarget
}

