// Define variables
let boardSize = 3;
let board = [];
let player1Icon;
let player2Icon;
let player1Turn = true;
let slider;
let resetButton;
let resizeButton;
let a = 255;
let cellSize;

// Set up the canvas
function setup() {
  createCanvas(400, 400);
  cellSize = width / boardSize;
  player1Icon = loadImage('rev.webp');
  player2Icon = loadImage('bevo.png');
  resetButton = createButton('Reset');
  resetButton.position(width + 20, 20);
  resetButton.mousePressed(resetGame);
  resizeButton = createButton('Resize');    ////// Could do a dropdown for this ????
  resizeButton.position(width + 20, 50);
  resizeButton.mousePressed(toggleSize);
  slider = createSlider(0, 255, 255);
  slider.position(width + 20, 80);
  slider.style('width', '80px');
  setupBoard();
}

// Set up the tic-tac-toe board
function setupBoard() {
  board = [];
  for (let i = 0; i < boardSize; i++) {
    let row = [];
    for (let j = 0; j < boardSize; j++) {
      row.push('');
    }
    board.push(row);
  }
}

// Draw the tic-tac-toe board
function drawBoard() {
  background(10, a, 10);
  stroke(0);
  strokeWeight(2);
  for (let i = 1; i < boardSize; i++) {
    line(i * cellSize, 0, i * cellSize, height);
    line(0, i * cellSize, width, i * cellSize);
  }
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      let x = j * cellSize + cellSize / 2;
      let y = i * cellSize + cellSize / 2;
      let icon = board[i][j] === 'X' ? player1Icon : board[i][j] === 'O' ? player2Icon : null;
      if (icon) {
        imageMode(CENTER);
        image(icon, x, y, cellSize * 0.8, cellSize * 0.8);
      }
    }
  }
}

// Handle mouse clicks
function mouseClicked() {
  if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) {
    return;
  }
  let i = floor(mouseY / cellSize);
  let j = floor(mouseX / cellSize);
  if (board[i][j] === '') {
    board[i][j] = player1Turn ? 'X' : 'O';
    player1Turn = !player1Turn;
    drawBoard();
    checkWinner();
  }
}

// Check for a winner
function checkWinner() {
  for (let i = 0; i < boardSize; i++) {
    let row = board[i].join('');
    if (row === 'XXX' || row === 'OOO') {
      announceWinner(row[0]);
      return;
    }
    let col = board.map(row => row[i]).join('');
    if (col === 'XXX' || col === 'OOO') {
      announceWinner(col[0]);
      return;
    }
  }
  let diag1 = '';
  let diag2 = '';
  for (let i = 0; i < boardSize; i++) {
    diag1 += board[i][i];
    diag2 += board[i][boardSize - 1 - i];
  }
  if (diag1 === 'XXX' || diag1 === 'OOO') {
  announceWinner(diag1[0]);
  return;
  }
  if (diag2 === 'XXX' || diag2 === 'OOO') {
    announceWinner(diag2[0]);
    return;
  }
  let tie = true;
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (board[i][j] === '') {
        tie = false;
        break;
      }
    }
    if (!tie) {
      break;
    }
  }
  if (tie) {
    announceWinner('tie');
  }
}

// Announce the winner or tie
function announceWinner(winner) {
let message;
if (winner === 'tie') {
  message = 'Tie game!';
} else {
  message = `Player ${winner} wins!`;      //////////// WINNER RESULT APPEAR ON SCREEN RATHER THAN AN ALERT
}
alert(message);
  resetGame();
}
  
// Reset the game
function resetGame() {
  player1Turn = true;
  setupBoard();
  drawBoard();
}
  
// Toggle the board size
function toggleSize() {
  boardSize = boardSize === 3 ? 5 : 3;
  cellSize = width / boardSize;
  setupBoard();
  drawBoard();
}
  
  // // Update the board color
  // function updateColor() {
  //   a = slider.value();
  //   drawBoard();
  // }
  
  