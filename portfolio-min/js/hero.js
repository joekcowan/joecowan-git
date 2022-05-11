// create class for each hero
class Hero {
  constructor(id, name, story) {
    this.id = id;
    this.name = name;
    this.altNames = this.assignAltNames(this.id);
    this.story = story;
    this.enemies = this.assignEnemies(this.id);
  }

  //returns a passed spread array as altNames
  assignAltNames(id) {
    if(id == 1) {return ['Robin of Locksley', 'Robin of the Hood'];}
    else if(id == 2) {return ['Arthur Pendragon'];}
    else if(id == 3) {return ['Muad\'Dib'];}
    else if(id == 4) {return ['Aragorn II', 'Aragorn son of Arathorn', 'Strider', 'Elessar'];}
    else if(id == 5) {return ['Gandalf the Grey', 'Gandalf the White', 'Mithrandir', 'Olórin'];}
    else if(id == 6) {return ['Lady of Rohan', 'Lady of the Shield-arm', 'Lady of Ithilien'];}
    else if(id == 8) {return ['Darth Vader', 'Lord Vader', 'Little Ani'];}
    else if(id == 9) {return ['Queen Amidala', 'Senator Amidala', 'Queen of Naboo'];}
    else if(id == 10) {return ['Jean Luc Picard'];}
    else if(id == 11) {return ['Bruce Wayne', 'The Dark Knight'];}
    else if(id == 12) {return ['Clark Kent', 'Kal-El', 'Man of Steel'];}
    else {return ['None']}
  }

  //returns a passed spread array as names in property enemies
  assignEnemies(id) {
    if(id == 1) {return ['Sheriff of Nottingham', 'Sir Guy of Gisbourne'];}
    else if(id == 2) {return ['Morgan le Fay', 'Sir Mordred'];}
    else if(id == 3) {return ['The Harkonnens'];}
    else if(id == 4) {return ['Sauron', 'Orcs', 'Ringwraiths'];}
    else if(id == 5) {return ['Sauron', 'Sauruman', 'The Witch-king of Angmar'];}
    else if(id == 6) {return ['The Witch-king of Angmar', 'A cage'];}
    else if(id == 7) {return ['Darth Vader', 'Fear', 'Kylo Ren', 'The Emperor'];}
    else if(id == 8) {return ['Luke Skywalker', 'The high ground', 'Obi-wan', 'The Rebelion'];}
    else if(id == 9) {return ['The Senate', 'Sadness', 'A broken heart'];}
    else if(id == 10) {return ['The Borg', 'The Romulans', 'Not tea, earl grey, hot'];}
    else if(id == 11) {return ['The Joker', 'The Court of Owls', 'Scarecrow', 'Bane'];}
    else if(id == 12) {return ['Lex Luthor', 'Doomsday', 'Bizarro', 'Darkseid'];}
    else {return ['None'];}
  }
}

//assign objects
const robinHood = new Hero(1, 'Robin Hood', 'The Adventures of Robin Hood');
const kingArthur = new Hero(2, 'King Arthur', 'King Arthur and the Knights of the Round Table');
const paulAtreidis = new Hero(3, 'Paul Atreidis', 'Dune');
const aragorn = new Hero(4, 'Aragorn', 'The Lord of the Rings');
const gandalf = new Hero(5, 'Gandalf', 'The Lord of the Rings');
const eowyn = new Hero(6, 'Éowyn', 'The Lord of the Rings');
const lukeSkywalker = new Hero(7, 'Luke Skywalker', 'Star Wars');
const anakinSkywalker = new Hero(8, 'Anakin Skywalker', 'Star Wars');
const padmeAmidala = new Hero(9, 'Padmé Amidala', 'Star Wars');
const captainPicard = new Hero(10, 'Captain Picard', 'Star Trek');
const batman = new Hero(11, 'Batman', 'Detective Comics');
const superman = new Hero(12, 'Superman', 'Detective Comics');

function setHeroes() {
  //put objects in an array
  let heroes = [];
  heroes = [
    robinHood,
    kingArthur,
    paulAtreidis,
    aragorn,
    gandalf,
    eowyn,
    lukeSkywalker,
    anakinSkywalker,
    padmeAmidala,
    captainPicard,
    batman,
    superman
  ];

  return heroes;
}

//handles hero dropdown
function handleHeroSelections() {
  try {

    const heroDdl = document.querySelector('#hero-select');
    const storyLi = document.querySelector('#storyLi');

    //reset heroes
    heroDdl.innerHTML = '';
    heroDdl.innerHTML = "<option value='0'>Choose...</option>";
    const heroes = setHeroes();

    //add array content to ddl
    for(let h = 0;h < heroes.length;h++) {
      const option = document.createElement('option');
      option.value = heroes[h].id;
      option.innerHTML = heroes[h].name;
      heroDdl.appendChild(option);
    }

    // fill lists
    heroDdl.onchange = function() {
      if(this.selectedIndex == 0) {
        clearHeroContent();
      }
      else {
        fillAltNamesList(heroes[this.selectedIndex - 1]);
        fillEnemiesList(heroes[this.selectedIndex - 1]);
        storyLi.innerHTML = heroes[this.selectedIndex - 1].story;
      }
    }

  } catch(e) {
    console.log('handleHeroSelections: ' + e.message);
  }
}

function clearHeroContent() {
  try {
    const ul = document.querySelector('#alt_names');
    ul.innerHTML = '';
    const ul2 = document.querySelector('#enemies');
    ul2.innerHTML = '';
    document.querySelector('#storyLi').innerHTML = '-';
  } catch(e) {
    console.log('clearHeroContent:' + e.message)
  }
}

function fillAltNamesList(hero) {

  try {
    const ul = document.querySelector('#alt_names');
    ul.innerHTML = '';

    for(let h = 0;h < hero.altNames.length;h++) {
      const li = document.createElement('li');
      li.classList = 'list-group-item';
      li.innerHTML = hero.altNames[h];
      ul.append(li);
    }
  } catch(e) {
    console.log('fillAltNamesList: ' + e.message);
  }
}

function fillEnemiesList(hero) {

  try {
    const ul = document.querySelector('#enemies');
    ul.innerHTML = '';

    for(let h = 0;h < hero.enemies.length;h++) {
      const li = document.createElement('li');
      li.classList = 'list-group-item';
      li.innerHTML = hero.enemies[h];
      ul.append(li);
    }
  } catch(e) {
    console.log('fillEnemiesList: ' + e.message);
  }
}