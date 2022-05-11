<?php
  include 'objects.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Joseph Cowan, Joe K. Cowan, Web Developer and Graphic Designer in Callahan, near Jacksonville, Florida. Joseph Cowan.">
    <meta name="keywords" content="web design, graphic design, Callahan, Jacksonville, Florida,
    Jax, Service, Freelance, developer, designer, logo, artists, websites, local, joekcowan, joe-cowan.com">
    <meta name="author" content="Joseph K. Cowan">
	<title>www.joe-cowan.com</title>

	<link rel="shortcut icon" href="img/undraw_profile_pic_ic5t.png" type="image/x-icon">
	<link rel="apple-touch-icon" href="">

  
	<!-- Bootstrap CSS -->
    <!--<link rel="stylesheet" href="bootstrap-grid.min.css">-->
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css?" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> -->

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">


    <!--Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Nunito|Roboto+Condensed|Literata&display=swap" rel="stylesheet">
  
    <!--Font Awesome-->
    <script src="https://kit.fontawesome.com/55c6e66a2f.js" crossorigin="anonymous"></script>
    
	<!-- Link to your css file-->
	<link rel="stylesheet" href="styles.css">
    <style>
      html,body{
      font-family: 'Nunito', sans-serif;
      background: #f7f7f7;
      }
      
      a{cursor: pointer;}
      
      .card-body{}
    
    </style>
</head>

<body>
  <!--NAVBAR-->
  <?php include 'parts/navbar_top.php'; ?>
  
  <div class="container" style="padding-top: 2rem;">
    
    <!--ABOUT ME CARD-->
    <?php include 'parts/about.php';?>
    
    <!--INTERACTIVE -->
    <?php include 'parts/interactive.php';?>
    
    <!--PROJECTS-->
    <?php include 'parts/projects.php';?>
    
    <!--CONTACT ME-->
    <?php include 'parts/contact.php';?>

    <!--RESUMÉ-->
    <?php include 'parts/resume.php';?>
    
  <!--INTRO MODAL-->
  <div class="modal fade p-5 w-100 h-100" id="intro_modal" tabindex="-1" role="dialog" aria-labelledby="intro_modalTitle" aria-hidden="true" >
    <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
      <div class="modal-content p-5">

          <h1 class="modal-title text-center" id="intro_modalTitle">Welcome!</h1>
          <h3 class="modal-title text-center" id="intro_modalTitle">Please select a version of my website you would like to visit.</h3>
          

        <div class="modal-body">
          <div class="row justify-content-center">
            <button id="freelance_btn" type="button" class="col-5 btn btn-success p-5 m-2">
              <h3>Interested in my freelance services?</h3>
              <br>
              <h1>Freelance Site</h1>
            </button>
            <button type="button" class="col-5 btn btn-block btn-primary p-5 m-2" data-dismiss="modal">
              <h3>Interested in my experience and abilities?</h3>
              <br>
              <h1>Portfolio Site</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  </div><!--container-->

  <!--jQuery-->
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  
  <!--Validator-->
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/jquery.form-validator.min.js"></script> 
  
  <!--Scrollreveal-->
  <script src="https://unpkg.com/scrollreveal"></script>
  
  <!--Flip-->
  <script src="https://cdn.rawgit.com/nnattawat/flip/master/dist/jquery.flip.min.js"></script>
  
  <!--Cloudflare-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  
  <!--Bootstrap js-->
  <!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> -->

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  
  <!--custom js-->
  <script src="js/portfolio.js" type=text/javascript></script>
  <script src="js/spoiler.js" type=text/javascript></script>
  <script src="js/blog.js" type=text/javascript></script>
  <script src="js/hero.js" type=text/javascript></script>
  <script src="js/quotes.js" type=text/javascript></script>
  
  <script>
  $.validate({
    lang: 'en',
    validateOnBlur : false, // disable validation when input looses focus
    errorMessagePosition : 'top' // Instead of 'inline' which is default
  });
    
  // $('#intro_modal').modal('toggle')  
  </script>
  
</body>
</html>