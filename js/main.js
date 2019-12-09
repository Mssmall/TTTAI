var emptyArr = [];
var copyEmptyArr = [];
var winner = "";
let gameBoard = [

  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9']
];
//hello
let playerTurn = true;

const checkWin = function () {
  winner = "";
  if ('X' === gameBoard[0][0] && 'X' === gameBoard[0][1] && 'X' === gameBoard[0][2]) {
    winner = 'player01';
    //$('.message').html("Congratulations player01")
  };
  if ('O' === gameBoard[0][0] && 'O' === gameBoard[0][1] && 'O' === gameBoard[0][2]) {
    winner = 'player02';
    //$('.message').html("Congratulations player02")
  };
  if ('X' === gameBoard[1][0] && 'X' === gameBoard[1][1] && 'X' === gameBoard[1][2]) {
    winner = 'player01';
    //$('.message').html("Congratulations player01")
  };
  if ('O' === gameBoard[1][0] && 'O' === gameBoard[1][1] && 'X' === gameBoard[1][2]) {
    winner = 'player02';
    //$('.message').html("Congratulations player02")
  };
  if ('X' === gameBoard[2][0] && 'X' === gameBoard[2][1] && 'X' === gameBoard[2][2]) {
    winner = 'player01';
    //$('.message').html("Congratulations player01")
  };
  if ('O' === gameBoard[2][0] && 'O' === gameBoard[2][1] && 'O' === gameBoard[2][2]) {
    winner = 'player02';
    //$('.message').html("Congratulations player02")
  };
  if ('X' === gameBoard[0][0] && 'X' === gameBoard[1][0] && 'X' === gameBoard[2][0]) {
    winner = 'player01';
    //$('.message').html("Congratulations player01")
  };
  if ('O' === gameBoard[0][0] && 'O' === gameBoard[1][0] && 'O' === gameBoard[2][0]) {
    winner = 'player02';
    //$('.message').html("Congratulations player02")
  };
  if ('X' === gameBoard[0][1] && 'X' === gameBoard[1][1] && 'X' === gameBoard[2][1]) {
    winner = 'player01';
    //$('.message').html("Congratulations player01")
  };
  if ('O' === gameBoard[0][1] && 'O' === gameBoard[1][1] && 'O' === gameBoard[2][1]) {
    winner = 'player02';
    //$('.message').html("Congratulations player02")
  };
  if ('X' === gameBoard[0][2] && 'X' === gameBoard[1][2] && 'X' === gameBoard[2][2]) {
    winner = 'player01';
    //$('.message').html("Congratulations player01")
  };
  if ('O' === gameBoard[0][2] && 'O' === gameBoard[1][2] && 'O' === gameBoard[2][2]) {
    winner = 'player02';
    //$('.message').html("Congratulations player02")
  };
  if ('X' === gameBoard[0][0] && 'X' === gameBoard[1][1] && 'X' === gameBoard[2][2]) {
    winner = 'player01';
    //$('.message').html("Congratulations player01")
  };
  if ('O' === gameBoard[0][0] && 'O' === gameBoard[1][1] && 'O' === gameBoard[2][2]) {
    winner = 'player02';
    //$('.message').html("Congratulations player02")
  };
  if ('X' === gameBoard[2][0] && 'X' === gameBoard[1][1] && 'X' === gameBoard[0][2]) {
    winner = 'player01';
    //$('.message').html("Congratulations player01")
  };
  if ('O' === gameBoard[2][0] && 'O' === gameBoard[1][1] && 'O' === gameBoard[0][2]) {
    winner = 'player02';
    //$('.message').html("Congratulations player02")
  };
};

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
    $(square).css('background-color', '#e6f7ff')
    // console.log( gameBoard[row][index] ); //later change to jquery, clicking
    playerTurn = false;
    // console.log(playerTurn);
    checkWin();
    player02();
  } else {
    alert("Player 1, hold your horses. It's not your turn")
  }
  // console.log(gameBoard);
};

let player02 = function (){
  //var copyEmptyArr = pickBestSquare();
  
  moveObj = minimax(gameBoard, 'O');
  index = moveObj.coords
  console.log('pos ' + index)
  let markerTwo = index;
  gameBoard[moveObj.pos1][moveObj.pos2] = 'O'
  //pos = 'O'
  console.log(markerTwo)
  $( "#sq" + markerTwo ).text('O')
  $( "#sq" + markerTwo ).css( 'background-color', '#b3ffb3' );
  checkWin();
  console.log(winner)
  playerTurn = true;
  emptyArr = [];
}


let resetBoard = function(){
  for(i=0; i<copyEmptyArr.length; i++){
    pos = copyEmptyArr[i]
    gameBoard[pos[0]][pos[1]] = '';
  }
  return gameBoard;
}

let pickBestSquare = function(){
  emptyArr = [];
  for(i=0; i < gameBoard.length; i++){
    var arr = gameBoard[i];
    for(j=0; j< arr.length; j++){
      item = arr[j];
      if (item === 'X' || item === 'O'){
        console.log(j + ': ' + item);
      } else {
        //console.log(i);
        obj = [i, j];
        console.log(j + ': ' + obj)
        emptyArr.push(obj);
      }
    }
  }

  console.log('empty array length' + emptyArr.length);
  return emptyArr;
}

let minimax = function(board, player){
  console.log('minimax is called')
  var freeSpots = pickBestSquare();
  checkWin();
  if(winner === 'player01'){
    return {score: -10 };
  } else if (winner === 'player02'){
    return {score: 10};
  } else if (freeSpots.length === 0){
    return {score: 0};
  } else {
    console.log('no winner');
  }

  var moves = [];
  for (k=0; k < freeSpots.length; k++){
    var pos = freeSpots[k];
    var pos1 = pos[0];
    var pos2 = pos[1];
    console.log('target pos ' + pos1 + ',' + pos2)
    var move = {};
    move.coords = board[pos1][pos2];
    move.pos1 = pos1;
    move.pos2 = pos2;
    board[pos1][pos2] = player;

    if (player === 'O'){
      var result = minimax(board, 'X');
      move.score = result.score;
      console.log('score: ' + move.score + ' coords:' + move.coords)
    } else {
      var result = minimax(board, 'O');
      move.score = result.score;
      console.log('score: ' + move.score + ' coords:' + move.coords)
    }

    board[pos1][pos2] = move.coords;
    //board = resetBoard();
    console.log('end of for' + board[1][2]);
    moves.push(move);
    //console.log('move ' + move.coords)
  }

  //pickBestSquare();

  var bestMove;
  if(player === 'O'){
    var bestScore = -10000;
    for(var i=0; i < moves.length; i++){
      if(moves[i].score > bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      } 
    }
  } else {
    var bestScore = 10000;
    for(var i=0; i < moves.length; i++){
      if(moves[i].score < bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      } 
    }
  }
  return moves[bestMove];

}

/* 

  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9']

let player02 = function (row, index, square) {
  if (playerTurn === false) {
    if (gameBoard[row][index] === 'X' || gameBoard[row][index] === 'O') {
      alert('That square is already taken. Move on.')
      return;
    };
    gameBoard[row][index] = 'O';
    let markerTwo = gameBoard[row][index];
    $(square).text(markerTwo);
    $(square).css('background-color', '#b3ffb3')
    // console.log( gameBoard[row][index] );
    checkWin();
    playerTurn = true;
  } else {
    alert("Player 2, hold your horses. It's not your turn")
  }
}; */

// Event listeners
$(document).ready(function () {
  $('.square').on('click', function() {
    //to find the row and index that user has clicked on.
    const previousSquares = $(this).prevAll().length;
    console.log(previousSquares);
    const row = Math.floor( previousSquares / 3 );
    console.log(row);
    const index = previousSquares % 3;
    console.log(index);
    // console.log( r, i );
    // debugger;
    // console.log(playerTurn);
    if (playerTurn === true) {
      player01(row, index, this);
    } else {
      player02(row, index, this);
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


  // const checkDuplicate = function (row, index) {
  //   // console.log(row, index);
  //   // console.log(gameBoard[row][index] === 'X');
  //   // console.log(gameBoard[row][index] === 'O');
  //   // console.log(gameBoard[row][index] === 'O');
  //   if (gameBoard[row][index] === 'X' || gameBoard[row][index] === 'O') {
  //     alert('That square is already taken')
  //   };
  // };
