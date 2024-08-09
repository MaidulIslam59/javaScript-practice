function bringBurger(money) {
    var burgerPrice = 80;
    var quantity = money / burgerPrice;
    return quantity;
}

var myBudget = 320;
var burgers = bringBurger(myBudget);
console.log("Eating burger: ", burgers);


//another practice
function bringFood(money) {
    var foodPrice = 120;
    var quantity = money / foodPrice;
    return quantity;
}

var myBudget = 320;
var foods = bringFood(myBudget);
console.log("Eating food: ", foods);