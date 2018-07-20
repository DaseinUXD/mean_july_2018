class Bicycle {
    name: string;
    price: number;
    max_speed: number;
    miles: number;
    constructor(name: string, cost: number, mph: number) {
        this.name = name;
        this.price = cost;
        this.max_speed = mph;
        this.miles = 0;
    }
    displayInfo() {
        console.log('The ', this.name, 'costs $', this.price, 'with a maximum speed of = ', this.max_speed,'mph, and has been driven ', this.miles, 'total miles.');
        return this;
    }
    ride() {
        let miles = this.miles + 10; 
        
        console.log('Riding... The total miles driven now equals ', miles);

        this.miles = miles;
        return this;
    }

    reverse() {
        let miles = this.miles - 5
        if (miles < 0) {
            console.log('ERROR: the bicycle cannot have NEGATIVE total miles!');
            return this;
        }

        console.log('Reversing... The total miles driven now equals ', miles);
        this.miles = miles;
               
        return this;
    }
}

let bicycle_01 = new Bicycle('Mongoose',200, 25);
bicycle_01.ride();
bicycle_01.ride();
bicycle_01.ride();
bicycle_01.reverse();
bicycle_01.displayInfo()

let bicycle_02 = new Bicycle('Schwinn',100, 30);
bicycle_02.ride();
bicycle_02.ride();
bicycle_02.reverse();
bicycle_02.reverse();
bicycle_02.displayInfo()

let bicycle_03 = new Bicycle('Trek',200, 25);
bicycle_03.reverse();
bicycle_03.reverse();
bicycle_03.reverse();
bicycle_03.displayInfo()
// Chaining 
bicycle_01.ride().reverse().displayInfo()