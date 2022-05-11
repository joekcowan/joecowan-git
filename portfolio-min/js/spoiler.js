$('.spoiler-front').on('click', function(){
  try {
    const clickedBtn = $(this);
    clickedBtn.hide();
    clickedBtn.next().fadeIn();
    
  } catch (e) {
    alert(e.message);
  }
})

$('.spoiler-back').on('click', function(){
  try {
    const clickedBtn = $(this);
    clickedBtn.hide();
    clickedBtn.prev().fadeIn();
    
  } catch (e) {
    alert(e.message);
  }
})