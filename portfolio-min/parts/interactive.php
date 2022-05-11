<section class="card mb-3 mt-3 shadow-sm  scroll-reveal" id='inter_sect'>
      
  <div class="card-header text-white bg-success text-center h3">Interactive Stuff</div>
  <div class="card-body">
    <h5 class="card-title text-center">Click on one of the links to see a couple different interactive tools (mostly for fun).</h5>
    <div class="row d-flex justify-content-center" id="interactive_btns">
      <div class="col-md-2 col-xs-12" >
        <a class="btn border border-5 rounded" style="width: 100%; height: 100%;" target="connect4_div">
          <h5 class="p-2 m-auto">Connect 4</h5>
        </a>
      </div>
      <div class="col-md-2 col-xs-12" >
        <a class="btn border border-5 rounded" style="width: 100%; height: 100%;" target="spoiler_div">
          <h5 class="p-2 m-auto">Spoilers</h5>
        </a>
      </div>
      <div class="col-md-2 col-xs-12" >
        <a class="btn border border-5 rounded" style="width: 100%; height: 100%;" target="villain_div">
          <h5 class="p-2 m-auto">Heroes &amp; Villains</h5>
        </a>
      </div>
      <div class="col-md-2 col-xs-12" >
        <a class="btn border border-5 rounded" style="width: 100%; height: 100%;" target="quote_div">
          <h5 class="p-2 m-auto">Franken-Quotes</h5>
        </a>
      </div>
    </div>
    
  </div>
    
  <!--CONNECT 4-->
  <div id='connect4_div' class="border border-success border-5 rounded m-3 p-3" style="display: none;">
    <div class="row" >
      <div class="col-12">
        <iframe src="game/game.html" class="w-100" style="height: 800px;"></iframe>
      </div>
    </div>
  </div>

  <!--Spoilers-->
  <div id='spoiler_div' class="border border-success border-5 rounded m-3 p-3" style="display: none;">
    
    <div class="row justify-content-center p-3" >
      <div class="col-12">
        <h3 class="text-center text-success">Click on a card to reveal a Movie Spoiler </h3>
        <h5 class="text-center text-muted">(WARNING: there will be spoilers. However, some of them are not true.)</h5>
      </div>
    </div>
    
    <div class="row justify-content-center" >
      
      <div class="col-xs-12 col-sm-4">
        <div class=" rounded shadow-sm btn-block btn-warning p-2" style="height: 100px;">
          
          <div class="text-center spoiler-front pointer">
            <i class="ft-50 fab fa-rebel"></i>
            <h3 class="ft-helvetica">Star Wars</h3>
          </div>
          
          <div class="pointer spoiler-back" style="display:none;">
            <ul>
              <li>Darth Vader is Luke's father.</li>
              <li>Obi-Wan has the high ground.</li>
              <li>Jar-Jar is a Sith Lord.</li>
            </ul>
          </div>
          
        </div>
      </div>
      
      <div class="col-xs-12 col-sm-4">
        <div class=" rounded shadow-sm btn-block btn-info p-2" style="height: 100px;">
          
          <div class="text-center spoiler-front pointer">
            <i class="ft-50 fas fa-quidditch"></i>
            <h3 class="ft-helvetica">Harry Potter</h3>
          </div>
          
          <div class="pointer spoiler-back" style="display:none;">
            <ul>
              <li>Dumbledore dies.</li>
              <li>Harry is a wizard.</li>
            </ul>
          </div>
          
        </div>
      </div>
      
    </div>
    
    <div class="row justify-content-center mt-2" >
      
      <div class="col-xs-12 col-sm-4">
        <div class=" rounded shadow-sm btn-block btn-dark p-2" style="height: 100px;">
          
          <div class="text-center spoiler-front pointer">
            <i class="ft-50 fas fa-chess-rook"></i>
            <h3 class="ft-helvetica">Game of Thrones</h3>
          </div>
          
          <div class="pointer spoiler-back" style="display:none;">
            <ul>
              <li>Jon Snow weds the Night King.</li>
              <li>Eddard Stark dies.</li>
            </ul>
          </div>
          
        </div>
      </div>
      
      <div class="col-xs-12 col-sm-4">
        <div class=" rounded shadow-sm btn-block btn-success p-2" style="height: 100px;">
          
          <div class="text-center spoiler-front pointer">
            <i class="ft-50 fab fa-pied-piper-alt"></i>
            <h3 class="ft-helvetica">Silicon Valley</h3>
          </div>
          
          <div class="pointer spoiler-back" style="display:none;">
            <ul>
              <li>Gavin buys Pied Piper.</li>
              <li>Pied Piper looses it's funding.</li>
            </ul>
          </div>
          
        </div>
      </div>
      
    </div>
  </div>
    
  <!--Heroes & Villains-->
  <div id='villain_div' class="border border-success border-5 rounded m-3 p-3 hide">
    <div class="row justify-content-center">
      <div class="col-xs-12 col-sm-4 p-4">
        <h3 class="text-center text-success">Select a Hero to find out more about him/her</h3><br/>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-xs-12 col-md-3">
        <h5>Choose A Hero</h5>
        <select id='hero-select' class="form-control-lg">
          <!-- <option value='0'>Choose...</option> -->
        </select>
      </div>
      <div class="col-xs-12 col-md-3">
        <h5>Alternative Names</h5>
        <ul class="list-group text-center text-success" id='alt_names'>
        </ul>
      </div>
      <div class="col-xs-12 col-md-3">
        <h5>Books/Story</h5>
        <ul class="list-group">
          <li class="list-group-item text-center">"<span id='storyLi'>-</span>"</li>
        </ul>
      </div>
      <div class="col-xs-12 col-md-3">
        <h5>Arch Enemies</h5>
        <ul class="list-group text-center text-danger" id='enemies'>
        </ul>
      </div>
    </div>
  </div>
    
  <!--Random quote Generator-->
  <div id='quote_div' class="border border-success rounded border-5 mt-3 p-3 hide">
    <div class="row d-flex justify-content-center">
      <div class="col-12 p-4">
        <h3 class="text-center text-success">Hit the button to get a quote-frankenstein!</h3>
        <h6 class="text-center text-muted">(These quotes are made from the best parts of other famous quotes. Don't worry, no quotes were harmed in the making of this app)</h6>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-12">
        <button id="quoteBtn" type="button" class="btn text-light btn-warning btn-lg w-100">Igor, fetch me a QUOTE!</button>
      </div>
    </div>
    <div class="row justify-content-center p-3">
      <div class="col-xs-12 col-sm-10">
        <h4 id="quoteDiv" class="hide alert text-center p-5"></h4>
      </div>
    </div>
  </div>

</section>