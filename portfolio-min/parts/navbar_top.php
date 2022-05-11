
  <nav class="navbar navbar-expand-lg navbar-dark bg-success sticky-top navbar-nav-scroll mb-5">
  <div class="container">
    <a class="navbar-brand" href="#">
      <span class="brand-text">Joseph Cowan | </span>
      <span class="sub-brand-text">Web Application Developer</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <?php 
        
          for ($i=0; $i < count($sections) ; $i++) { ?>
        
            <li class="nav-item">
              <a class="nav-link" href="#<?=$sections[$i]['sectionId']?>"> <?=$sections[$i]['name']?></a>
            </li>

          <?php } //end loop ?> 

      </ul>
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="btn btn-link nav-link" target="_blank" id="resumé_btn" href="web-app-res.pdf" target="_blank">Resumé</a>
        </li>
      </ul>
    </div>
  </div>
</nav>