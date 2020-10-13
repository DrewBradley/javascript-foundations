class Dragon {
    constructor(name, rider, color) {
      this.name = name;
      this.rider = rider;
      this.color = color;
      this.meals = 0;
      this.hungry = true;
    }
    eat() {
        this.meals += 1;
        if (this.meals === 3){
            this.hungry = false;
        }
    }
}

module.exports = Dragon;