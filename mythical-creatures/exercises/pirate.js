class Pirate {
    constructor(name,job, cursed){
        this.name = name;
        this.job = job === undefined ? 'scallywag' : job;
        this.cursed = cursed === undefined ? false : true;
        this.booty = 0;
    }
    robShip() {
        this.booty += 100;
        return 'YAARRR!';
    }
}

module.exports = Pirate;