class Hobbit {
    constructor(name, rider, color) {
      this.name = name;
      this.rider = rider;
      this.color = color;
      this.age = 0;
      this.adult = true;
      this.old = false;
      this.hasRing = this.name === 'Frodo' ? true : false;
    }
    celebrateBirthday() {
        this.age += 1;
        if (this.age < 32){
            this.adult = false;
        }else if (this.age >= 33 && this.age < 100){
            this.adult = true;
        }else if (this.age > 100){
            this.old = true;
        }
    }

}

module.exports = Hobbit;