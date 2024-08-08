function bringBurger(money) {
    var burgerPrice = 80;
    var quantity = money / burgerPrice;
    return quantity;
}

var myBudget = 320;
var burgers = bringBurger(myBudget);
console.log("Eating burger: ", burgers);