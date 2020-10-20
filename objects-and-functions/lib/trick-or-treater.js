class TrickOrTreater {
    constructor(costume, bag) {
        this.dressedUpAs = costume.style;
        this.bag = bag;
        this.hasCandy = false;
        this.countCandies = 0;
    }
    putCandyInBag(candy){
        var bag = this.bag;
        this.hasCandy = true;
        bag.fill(candy);
        this.countCandies++;
    }
    eat(){
        var bag = this.bag;
        this.countCandies--;
        bag.candies.pop();
    }
}

module.exports = TrickOrTreater;