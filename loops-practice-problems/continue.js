var numbers = [12, 23, 34, 70, 90, 45, 56, 67,78,98,88];

for (i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if (number > 65) {
        continue;
    }
    console.log(number);
}