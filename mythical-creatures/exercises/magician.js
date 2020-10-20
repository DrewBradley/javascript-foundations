class Magician {
    constructor(name, topHat) {
        this.name = name;
        this.topHat = topHat === undefined ? true : false;
        this.confident = false;
        this.confidenceCount = 0;
    };
    
    incantation(magicWord){
        return magicWord.toUpperCase() + "!";
    };
    
    cast(){
        this.confidenceCount += 1;
        if(this.confidenceCount >= 3){
            this.confident = true
        };
        var topHat = this.topHat;
        if (!topHat) {
            return 'PULL RABBIT FROM TOP HAT';
        }else if (topHat){
            return 'PULL DOVE FROM SLEEVE';
        };
    }
    
    performShowStopper(){
        if (this.confident = false){
            return 'Oh no! Practice more before attempting this trick!'
        }else{
            return 'WOW! The magician totally just sawed that person in half!'
        }
    }
};

module.exports = Magician;