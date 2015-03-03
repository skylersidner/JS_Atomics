window.onload = function(){

  // Collection of all squares on the board.
  var squares = document.getElementsByTagName('td');

  var turn = "X";
  var turnCounter = 0;
  var message = "Player X, it's your move!";

  //fires after addMark(); switches the turn, updates the number of turns that have elapsed
  //and then calls the tracker().
  function switchTurn() {
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
    turnCounter++;
    tracker();    
  }

  //updates the H2 that tells players whose turn it is (or if the game is over)
  //also tracks who won, who hasn't yet won
  function tracker() {
    var a = document.getElementById("turn-tracker");
    var msg = determineWinner();

    if (msg === "X") {
      message = "Player X wins!";
      gameOver();
    }
    else if (msg === "O") {
      message = "Player O wins!";
      gameOver();
    }
    else if (turnCounter < 9) {
      message = "Player " + turn + ", it's your move!";
    } 
    else {
      message = "Game over!";
      gameOver();
    } 
    a.innerHTML = message;
  }


  //returns "X" if player X wins, "O" if player O wins, or "" if no one wins.
  function determineWinner() {
    var m = "";
    //left column
    if (squares[0].className == squares[3].className && squares[3].className == squares[6].className) {
      m = squares[0].className;
    } //middle column
    else if (squares[1].className == squares[4].className && squares[4].className == squares[7].className) {
      m = squares[1].className;
    } //right column
    else if (squares[2].className == squares[5].className && squares[5].className == squares[8].className) {
      m = squares[2].className;
    } //top row
    else if (squares[0].className == squares[1].className && squares[1].className == squares[2].className) {
      m = squares[1].className;
    } //middle row
    else if (squares[3].className == squares[4].className && squares[4].className == squares[5].className) {
      m = squares[3].className;
    } //bottom row 
    else if (squares[6].className == squares[7].className && squares[7].className == squares[8].className) {
      m = squares[6].className;
    } //diagonal-1 
    else if (squares[0].className == squares[4].className && squares[4].className == squares[8].className) {
      m = squares[0].className;
    } //diagonal 2
    else if (squares[2].className == squares[4].className && squares[4].className == squares[6].className) {
      m = squares[2].className;
    } //no winner 
    else {
      // no winner
    }

    return m;
  }

  function gameOver() {
    for(var i = 0; i < squares.length; i++) {
      squares[i].removeEventListener("click", addMark);
    }
  }


  //defines the add_mark method
  function addMark(){
    this.innerHTML = turn;
    this.className = turn;

    //switch from X to O and do other housekeeping
    switchTurn();

    //remove the event listener so the square can't be clicked again
    this.removeEventListener("click", addMark);
  }

  // provides add_mark() method / listener to each square
  for(var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", addMark);
  }

}