class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    
    if (this.color == undefined){
      this.color = 'white';
    }else{
      this.color == this.color;
    };
  }

  isWhite(){
    if (this.color !== 'white') {
      return false
    }
  };

  says(words){
      return `**;* ${words} *;**`
  };
}

module.exports = Unicorn;
