
function InspectClass(target: any) {
    console.log(`Class in use: ${target.name}`);
}


function InspectProperty(target: any, propertyKey: string): void {
    let val = target[propertyKey];

    let getter = function() {
        console.log(`Get: ${propertyKey} => ${val}`);
        return val;
    };

    let setter = function(newValue: any) {
        console.log(`Set: ${propertyKey} => ${newValue}`);
        val = newValue;
    };

    if (delete target[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}
@InspectClass
class Automobile {
    @InspectProperty
    public make: string;
    @InspectProperty
    public model: string;
    @InspectProperty
    public year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo(): string {
        return `Make: ${this.make}  Model: ${this.model}  Year: ${this.year}`
    }
}
let mazda = new Automobile("Mazda", "RX-8", 2003);
console.log(mazda.getInfo());