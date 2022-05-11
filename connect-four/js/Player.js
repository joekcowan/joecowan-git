//PLAYER----------------------------------------
class Player{
  constructor(name,id,color,active = false){
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens=this.createTokens(21);
  }
  
  //creates token numbers based on param and return to property
  createTokens(num){
    const tokens=[];
    
    for(let i=0; i < num; i++){
      let token = new Token(i, this);
      tokens.push(token);
    }
    
    return tokens;    
  }
  
  //checks token and returns array of unused tokens
  get unusedTokens(){
    return this.tokens.filter(token => !token.dropped);
  }
  
  //returns first unused token
  get activeToken(){
    return this.unusedTokens[0];
  }
  
  // checks for remaining tokens, returns true
  checkTokens(){
    return this.unusedTokens.length == 0 ? false : true;
  }
}