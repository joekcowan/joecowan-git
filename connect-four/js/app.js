//Create Game object and initiate the game
const game = new Game();

$('#begin-game').on('click',function(){
  game.startGame();
  this.style.display = 'none';
  $('#game-title').hide();
  $('#instructions').show();
  document.getElementById('play-area').style.opacity = '1';
})

document.addEventListener('keydown', function(event){
  game.handleKeydown(event); 
})