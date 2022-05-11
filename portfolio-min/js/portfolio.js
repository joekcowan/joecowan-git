//fade in sections when scrolled
$(document).ready(function() {
  ScrollReveal().reveal('.scroll-reveal', {delay: 200});
  //  $('section').fadeIn('slow');
});

// handle about options
$("#about_btns a").on('click', function() {
  try {
    const targetDiv = $("#" + this.target);
    const toggleBtn = $("#" + this.id);

    // reset other btns
    $("#about_btns a").removeClass('active');

    //hide other divs
    $("#about_btns a").each(function() {
      $("#" + this.target).hide();
    });

    //Show selected area, activate toggled button, and replace correct image
    if(targetDiv.is(':hidden')) {
      targetDiv.fadeIn();
      toggleBtn.addClass('active');

      //change image and alt
      if(targetDiv[0].id === 'work_div') {
        $('#about_img').hide();
        $('#about_img').attr("src", "img/undraw_sculpting_1c9p.png");
        $('#about_img').attr("alt", "man sculpting a face");
        $('#about_img').fadeIn();
      }
      else if(targetDiv[0].id === 'exp_div') {
        $('#about_img').hide();
        $('#about_img').attr("src", "img/undraw_code_review_l1q9.png");
        $('#about_img').attr("alt", "man walking with code in background");
        $('#about_img').fadeIn();
      }
      else if(targetDiv[0].id === 'know_div') {
        $('#about_img').hide();
        $('#about_img').attr("src", "img/undraw_absorbed_in_xahs.png");
        $('#about_img').attr("alt", "man reading and walking in park");
        $('#about_img').fadeIn();
      }

    }
  } catch(e) {
    alert(e.message);
  }
});

//close card windows
$('.close-btn').on('click', function(e) {
  $(this.parentNode.parentNode).slideUp();

  //show appropriate links at navbar
  if(this.parentNode.parentNode.id === 'about_sect') {
    $('#about').slideDown();
  }
  else if(this.parentNode.parentNode.id === 'site_sect') {
    $('#site').slideDown();
  }
  else if(this.parentNode.parentNode.id === 'inter_sect') {
    $('#inter').slideDown();
  }
  else if(this.parentNode.parentNode.id === 'contact_sect') {
    $('#contact').slideDown();
  }

});

//open card windows
$('.open-link').on('click', function(e) {
  //  $('#'+this.id).slideUp();
  //  $('#'+this.id+'_sect').slideDown();
  $([document.documentElement, document.body]).animate({
    scrollTop: $('#' + this.id + '_sect').offset().top
  }, 1000);
});

//go to specific
$('#contact_link').on('click', function() {
  $('#contact_sect').show();
  $([document.documentElement, document.body]).animate({
    scrollTop: $('#contact_sect').offset().top
  }, 1000);
});


// handle interactive buttons
$("#interactive_btns a").on('click', function() {
  try {
    const targetDiv = $('#' + this.target);
    const toggleBtn = $(this);

    // reset other btns
    $("#interactive_btns a").removeClass('text-light bg-success');

    //hide other divs
    $("#interactive_btns a").each(function() {
      $("#" + this.target).hide();
    });

    //Show selected area, activate toggled button, and replace correct image
    if(targetDiv.is(':hidden')) {
      targetDiv.fadeIn();
      toggleBtn.addClass('bg-success text-light');

      if(targetDiv[0].id == 'villain_div') {
        handleHeroSelections();
      }

    }
  }
  catch(e) {console.log('error: portfolio.js -> handle interactive buttons: ' + e.message);}
});

$('#freelance_btn').on('click', function() {
  window.location.href = 'freelance/index.php';
});