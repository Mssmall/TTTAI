
let gameBoard = [
  
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9']
];

let playerTurn = true;

const checkWin = function () {
  if ('X' === gameBoard[0][0] && 'X' === gameBoard[0][1] && 'X' === gameBoard[0][2]) {
    $('.hardMessage').html("Congratulations player01")}; 
  if ('O' === gameBoard[0][0] && 'O' === gameBoard[0][1] && 'O' === gameBoard[0][2]) {
    $('.hardMessage').html("Congratulations player02")}; 
  if ('X' === gameBoard[1][0] && 'X' === gameBoard[1][1] && 'X' === gameBoard[1][2]) {
    $('.hardMessage').html("Congratulations player01")}; 
  if ('O' === gameBoard[1][0] && 'O' === gameBoard[1][1] && 'X' === gameBoard[1][2]) {
    $('.hardMessage').html("Congratulations player02")}; 
  if ('X' === gameBoard[2][0] && 'X' === gameBoard[2][1] && 'X' === gameBoard[2][2]) {
    $('.hardMessage').html("Congratulations player01")}; 
  if ('O' === gameBoard[2][0] && 'O' === gameBoard[2][1] && 'O' === gameBoard[2][2]) {
    $('.hardMessage').html("Congratulations player02")}; 
  if ('X' === gameBoard[0][0] && 'X' === gameBoard[1][0] && 'X' === gameBoard[2][0]) {
    $('.hardMessage').html("Congratulations player01")}; 
  if ('O' === gameBoard[0][0] && 'O' === gameBoard[1][0] && 'O' === gameBoard[2][0]) {
    $('.hardMessage').html("Congratulations player02")}; 
  if ('X' === gameBoard[0][1] && 'X' === gameBoard[1][1] && 'X' === gameBoard[2][1]) {
    $('.hardMessage').html("Congratulations player01")}; 
  if ('O' === gameBoard[0][1] && 'O' === gameBoard[1][1] && 'O' === gameBoard[2][1]) {
    $('.hardMessage').html("Congratulations player02")}; 
  if ('X' === gameBoard[0][2] && 'X' === gameBoard[1][2] && 'X' === gameBoard[2][2]) {
    $('.hardMessage').html("Congratulations player01")}; 
  if ('O' === gameBoard[0][2] && 'O' === gameBoard[1][2] && 'O' === gameBoard[2][2]) {
    $('.hardMessage').html("Congratulations player02")}; 
  if ('X' === gameBoard[0][0] && 'X' === gameBoard[1][1] && 'X' === gameBoard[2][2]) {
    $('.hardMessage').html("Congratulations player01")}; 
  if ('O' === gameBoard[0][0] && 'O' === gameBoard[1][1] && 'O' === gameBoard[2][2]) {
    $('.hardMessage').html("Congratulations player02")}; 
  if ('X' === gameBoard[2][0] && 'X' === gameBoard[1][1] && 'X' === gameBoard[0][2]) {
    $('.hardMessage').html("Congratulations player01")}; 
  if ('O' === gameBoard[2][0] && 'O' === gameBoard[1][1] && 'O' === gameBoard[0][2]) {
    $('.hardMessage').html("Congratulations player02")}; 
};

// const checkDuplicate = function (row, index) {                      
//   // console.log(row, index);        
//   // console.log(gameBoard[row][index] === 'X');
//   // console.log(gameBoard[row][index] === 'O');
//   // console.log(gameBoard[row][index] === 'O');
//   if (gameBoard[row][index] === 'X' || gameBoard[row][index] === 'O') {
//     alert('That square is already taken')
//   };
// };

let player01 = function (row, index, square) {
  // console.log(playerTurn);
  if (playerTurn === true) {
    //player selects square to place marker, inputting a row # and index #
    //checks whether selected square is already taken by a marker
    if (gameBoard[row][index] === 'X' || gameBoard[row][index] === 'O') {
      alert('That square is already taken. Move on.')
      return; 
    };
    //marker is assigned to gameBoard array dependent on row and index input 
    gameBoard[row][index] = 'X';
    let markerOne = gameBoard[row][index];
    //marker is put on specific square dependent on row and index input
    
    $(square).text(markerOne);
    // console.log( gameBoard[row][index] ); //later change to jquery, clicking
    playerTurn = false;
    // console.log(playerTurn);
    checkWin();
  } else {
    alert("Player 1, hold your horses. It's not your turn")
  }
  // console.log(gameBoard);
};

let player02 = function (row, index, square) {
  if (playerTurn === false) {
    if (gameBoard[row][index] === 'X' || gameBoard[row][index] === 'O') {
      alert('That square is already taken. Move on.')
      return; 
    };
    gameBoard[row][index] = 'O';
    let markerTwo = gameBoard[row][index];
    $(square).text(markerTwo);
    // console.log( gameBoard[row][index] );
    checkWin();
    playerTurn = true;
  } else {
    alert("Player 2, hold your horses. It's not your turn")
  }
};

// Event listeners
$(document).ready(function () {
  $('.square').on('click', function() {
    //to find the row and index that user has clicked on.
    const previousSquares = $(this).prevAll().length;
    const r = Math.floor( previousSquares / 3 );
    const i = previousSquares % 3;
    // console.log(previousSquares);
    // console.log( r, i );
    // debugger;
    // console.log(playerTurn);
    if (playerTurn === true) {
      player01(r, i, this);
    } else {
      player02(r, i, this);
    };
    
  });
  });
  // $('.square').on('click', function() {
  //   const previousSquares = $(this).prevAll().length;
  //   const r = Math.floor( previousSquares / 3 );
  //   const i = previousSquares % 3;
  //   // console.log( r, i );
  //   player02(r, i, this);
  // } );
  

