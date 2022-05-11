
var FilledSound = new Audio('../audio/350496__tris6970__plastic-tile.wav');
var StartSound = new Audio('../audio/201805__fartheststar__poker-chips3.wav');
var WinSound = new Audio('../audio/425663__camo1018__clapping.mp3');
//var GameMusic = new Audio('../audio/437415__frederic-font__puckr-music-level-1-133bpm.wav');
var GameMusic = new Audio('../audio/396458__patricklieberkind__futuristic-rhythmic-game-ambience.wav');
GameMusic.loop = true;

//GAME----------------------------------------
class Game{
  constructor(){
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }
  
  //creates two players and returns them
  createPlayers(){
    const players = [ new Player('Player1',1,'#e15258',true), new Player('Player2',2,'#e59a13')];
    return players;
  }
  
  //initializes the game
  startGame(){
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
    StartSound.play();
    GameMusic.play();
  }
  
  //gets current active player
  get activePlayer(){
    return this.players.find(player => player.active);
  }
  
  //handles directional movement
  handleKeydown(e){
    if(this.ready){
      //left
      if(e.key ==='ArrowLeft'){
        this.activePlayer.activeToken.moveLeft();
        StartSound.play();
      }
      //right 
      else if(e.key ==='ArrowRight'){
        this.activePlayer.activeToken.moveRight(this.board.columns);
        StartSound.play();
      }
      //down
      else if(e.key ==='ArrowDown'){
        this.playToken();
        FilledSound.play()
      }
    }
  }
  
  //finds open spot selected and drops token to that spot.
  playToken(){
    let spaces = this.board.spaces;
    let activeToken = this.activePlayer.activeToken;
    let targetColumn = spaces[activeToken.columnLocation];
    let targetSpace = null;
    
    for(let space of targetColumn){
      if(space.token === null){
        targetSpace = space;
      }
    }
    
    if(targetSpace !== null){
      const game = this;
      game.ready = false;
      activeToken.drop(targetSpace, function(){
        game.updateGameState(activeToken, targetSpace);           
      });
    }
    
  }
  
  checkForWin(target){
      const owner = target.token.owner;
      let win = false;

      // vertical
      for (let x = 0; x < this.board.columns; x++ ){
          for (let y = 0; y < this.board.rows - 3; y++){
              if (this.board.spaces[x][y].owner === owner && 
                  this.board.spaces[x][y+1].owner === owner && 
                  this.board.spaces[x][y+2].owner === owner && 
                  this.board.spaces[x][y+3].owner === owner) {
                      win = true;
              }           
          }
      }

      // horizontal
      for (let x = 0; x < this.board.columns - 3; x++ ){
          for (let y = 0; y < this.board.rows; y++){
              if (this.board.spaces[x][y].owner === owner && 
                  this.board.spaces[x+1][y].owner === owner && 
                  this.board.spaces[x+2][y].owner === owner && 
                  this.board.spaces[x+3][y].owner === owner) {
                      win = true;
              }           
          }
      }

      // diagonal
      for (let x = 3; x < this.board.columns; x++ ){
          for (let y = 0; y < this.board.rows - 3; y++){
              if (this.board.spaces[x][y].owner === owner && 
                  this.board.spaces[x-1][y+1].owner === owner && 
                  this.board.spaces[x-2][y+2].owner === owner && 
                  this.board.spaces[x-3][y+3].owner === owner) {
                      win = true;
              }           
          }
      }

      // diagonal
      for (let x = 3; x < this.board.columns; x++ ){
          for (let y = 3; y < this.board.rows; y++){
              if (this.board.spaces[x][y].owner === owner && 
                  this.board.spaces[x-1][y-1].owner === owner && 
                  this.board.spaces[x-2][y-2].owner === owner && 
                  this.board.spaces[x-3][y-3].owner === owner) {
                      win = true;
              }           
          }
      }

      return win;
  }
  
  //switches active player
  switchPlayer(){
    for(let player of this.players){
      player.active = player.active === true ? false : true;
    }
  }
  
  //displays winner
  gameOver(message){
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('game-over').textContent = message;
  }
  
  //updates game status
  updateGameState(token,target){
    target.mark(token);
    
    if(!this.checkForWin(target)){
      this.switchPlayer();
      if(this.activePlayer.checkTokens()){
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
      }
      else{
        this.gameOver('No more tokens');
      }
    }
    else{
      GameMusic.pause();
      this.gameOver(`${target.owner.name} wins!`);
      WinSound.play();
      setTimeout(function(){
        location.reload();
      }, 3500);
    }
  }
  
  
  
}