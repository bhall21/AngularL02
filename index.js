"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function InspectClass(target) {
    console.log("Class in use: " + target.name);
}
function InspectProperty(target, propertyKey) {
    var val = target[propertyKey];
    var getter = function () {
        console.log("Get: " + propertyKey + " => " + val);
        return val;
    };
    var setter = function (newValue) {
        console.log("Set: " + propertyKey + " => " + newValue);
        val = newValue;
    };
    if (delete target[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}
var Automobile = /** @class */ (function () {
    function Automobile(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Automobile.prototype.getInfo = function () {
        return "Make: " + this.make + "  Model: " + this.model + "  Year: " + this.year;
    };
    __decorate([
        InspectProperty
    ], Automobile.prototype, "make", void 0);
    __decorate([
        InspectProperty
    ], Automobile.prototype, "model", void 0);
    __decorate([
        InspectProperty
    ], Automobile.prototype, "year", void 0);
    Automobile = __decorate([
        InspectClass
    ], Automobile);
    return Automobile;
}());
var mazda = new Automobile("Mazda", "RX-8", 2003);
console.log(mazda.getInfo());
