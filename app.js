var app = angular.module('racingFrogs', []);
app.controller('MainController', MainController);
//No need to change anything above this line.

function MainController() {
    var vm = this; //instead of using this when refering to the controller, let's use vm. It will make things easier.

    vm.joe = new Guy("Joe", 100);
    vm.bob = new Guy("Bob", 150);
    vm.bank = 200;
    vm.frogs = [new Frog("", 0), new Frog("", 0), new Frog("", 0), new Frog("", 0)];

    function Frog(name, positionx) {
        this.name = name;
        this.positionx = positionx;
    }

    vm.race = function () {
        var position = 0;
        this.frogs.forEach(function (frog) {

            frog.positionx = frog.positionx + Math.random() * 10;
            if (frog.positionx >=100) { alert("there is a winner");}
        })
        
    }

    
   

    function Guy(name, startingCash) {
        //insert code here
        this.name = name;
        this.cash = startingCash;

        this.giveCash = function (amount) {
            if (amount <= this.cash && amount > 0) {
                this.cash = this.cash - amount;
                return amount;
            } else {
                alert("I don't have enough cash to give you " + amount + ". " + this.name + " says...");
                return 0;
            }
        };

        this.receiveCash = function (amount) {
            if (amount > 0) {
                this.cash = this.cash + amount;
                return amount;
            } else {
                alert(amount + " isn't an amount I'll take " + this.name + " says...");
                return 0;
            }
        }


    };


    vm.giveMoneyToJoe = function () {
        if (vm.bank >= 10) {
            vm.bank -= vm.joe.receiveCash(10)
        } else {
            alert("The bank is out of money.")
        }
    }

    vm.receiveMoneyFromBob = function () {
        vm.bank += vm.bob.giveCash(5)
    }

}