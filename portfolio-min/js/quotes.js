const quoteBtn = document.querySelector("#quoteBtn");
quoteBtn.onclick = function(){
  getquote();
};

function getquote(){
  try{
    
    //get random start sentance
    const startSent = getSentance('start');
    
    //get random end sentance
    const endSent = getSentance('end');
    
    //get random quoter
    const quoter = getquoter();
    
    //concat/template final sentance
    const randomquote = `"${startSent} ${endSent}" <br><br><i>${quoter}</i>`;
    
    //produce template
    const quoteDiv = document.querySelector('#quoteDiv');
    quoteDiv.classList.remove('hide');
    quoteDiv.innerHTML = randomquote;
    
    //randomize color of quote
    const randNum = randomNum(6);
    if(randNum <= 1){
      quoteDiv.classList.add('alert-success');
      quoteDiv.classList.remove('alert-primary', 'alert-warning', 'alert-info', 'alert-danger');
    }
    else if(randNum==2){
      quoteDiv.classList.add('alert-primary');
      quoteDiv.classList.remove('alert-success', 'alert-warning', 'alert-info', 'alert-danger');
    }
    else if(randNum==3){
      quoteDiv.classList.add('alert-warning');
      quoteDiv.classList.remove('alert-success', 'alert-primary', 'alert-info', 'alert-danger');
    }
    else if(randNum==4){
      quoteDiv.classList.add('alert-info');
      quoteDiv.classList.remove('alert-success', 'alert-primary', 'alert-warning', 'alert-danger');
    }
    else if(randNum==5){
      quoteDiv.classList.add('alert-danger');
      quoteDiv.classList.remove('alert-success', 'alert-primary', 'alert-warning', 'alert-info');
    }
    
  }
  catch(e){
    alert('Error @ getquote: '+e.message);
  }
  
}

function getSentance(type){
  try {
    
    const randomNumber1 = randomNum(startSentances.length);
    const randomNumber2 = randomNum(endSentances.length);
    
    switch(type){
      //start
      case 'start':
        for(let i=0; i<startSentances.length; i++){
          if(randomNumber1 == i){
            return startSentances[i];
          }
        }
        break;
      
      //end
      case 'end':
        for(let i=0; i<endSentances.length; i++){
          if(randomNumber2 == i){
            return endSentances[i];
          }
        }
        break;
    }
  }
  catch(e){
    alert('Error @ getSentance: '+e.message);
  }
}

function getquoter(){
  try {

    const randomNumber1 = randomNum(fNames.length);
    const randomNumber2 = randomNum(lNames.length);
    let fname = '';
    let lname = '';
    //get first name
    for(let i=0; i<fNames.length;i++){
      if(randomNumber1 == i){
        fname = fNames[i];
      }
    }
    
    //get last name
    for(let i=0; i<lNames.length;i++){
      if(randomNumber2 == i){
        lname = lNames[i];
      }
    }
    
    const fullName = `${fname} ${lname}`;
    return  fullName;
  }
  catch(e){
    alert('Error @ getquoter: '+e.message);
  }
}

function randomNum(iMaxNum){
  try {
    return Math.floor(Math.random() * iMaxNum);
  }
  catch(e){
    alert('Error @ randomNum: '+e.message);
  }
}

const fNames = [
  'Bilbo',
  'Albert',
  'William',
  'Steve',
  'R.W.',
  'Mahatma',
  'Oprah',
  'Thomas',
  'Anne',
  'Theodore',
  'Abraham',
  'George',
  'Adolf',
  'J.R.R.',
  'C.S.',
  'Marcus',
  'Leanard',
  'Martin Luthor',
  'Marilyn',
  'Dalai',
  'Bob',
  'Benjamin',
  'Darth',
  'Dark Lord',
  'Lord',
  'King',
  'Saint',
  'Napoleon',
  'Genghis',
];

const lNames = [
  'Baggins',
  'Buddha',
  'Einstein',
  'Shakespeare',
  'Jobs',
  'Emerson',
  'Socrates',
  'Gandhi',
  'Winfrey',
  'Edison',
  'Frank',
  'Roosevelt',
  'Lincoln',
  'Washington',
  'Hitler',
  'Tolkien',
  'Lewis',
  'Aurelius',
  'Leroy',
  'King Jr.',
  'Monroe',
  'Lama',
  'Marley',
  'Franklin',
  'the Great',
  'the Terrible',
  'the White',
  'the Wicked',
  'the Dark Lord',
  'Vader',
  'Voldemort',
  'of Arc',
  'Bonapart',
  'Khan'
];

const startSentances = [
  'People say nothing is impossible, but',
  'Whatever you are,',
  'Lasers are cool, but',
  'I fear not the man who has practiced 10,000 kicks once,',
  'Love the life you live,',
  'Be kind whenever possible,',
  'The path to success is to',
  'I have a dream that one day',
  'Imperfection is beauty,',
  'It is better to be absolutely ridiculous than',
  'No matter who you are or what you look like, how you started off, or how and who you love,',
  'The unexamined life is',
  'I don\'t know half of you half as well as I should like, and',
  'Better to remain silent and be thought a fool than',
  'If I had a nickel for every nickel, than',
  'And from then on, the man told himself often that',
  'Dovahkiin, Dohvahkiin!',
  'I wan\'t to know what love is, and',
  'I want to learn the ways of the force and become a Jedi like my father,',
  'If you can\'t beat them,',
  'When in Rome,',
  'Fool of a Took,',
  'Stay hungry,',
  'It\'s dangerous business walking out your front door,',
  'Hakuna matata!',
  'My name is Inigo Montoya, you killed my father,',
  'I used to be an adventurer like you, then',
  'Developers, developers, developers!',
  'The Road goes ever on and on,'
];

const endSentances = [
  'love the life you live.',
  'stay foolish.',
  'to speak out and remove all doubt.',
  'I do nothing every day.',
  'and be kind whenever possible.',
  'it is always possible.',
  'do wrong to none.',
  'realize this, and you will find strength.',
  'I fear the man who has practiced one kick 10,000 times.',
  'be a good one.',
  'I like less than half of you half as well as you deserve.',
  'cows could indeed fly.',
  'the Dragonborn comes.',
  'I find your lack of faith disturbing.',
  'join them.',
  'do as the Roman\'s do.',
  'build me an army worthy of Mordor.',
  'we are the knights who say "Knee".',
  'ride for ruin and the world\'s ending!',
  'prepare to die!',
  'I took an arrow to the knee.',
];