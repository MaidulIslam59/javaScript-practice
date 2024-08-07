// for (i = 0; i < 10; i++){
//     console.log(i);
//     if (i > 5) {
//         break;
//     }
// }

// var i = 0;
// while (i < 10) {
//     console.log("amake output dekhan");
//     i++;
//     if (i > 5) {
//         break;
//     }
// }

var items = ["computer", "mouse", "keyboard", "Ram", "rom", "camera"];

for (i = 0; i < items.length; i++){
    item = items[i];
    console.log(item);

    if (item == "Ram") {
        break;
    }
}  