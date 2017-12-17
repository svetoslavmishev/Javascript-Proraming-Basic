function check([arg1]) {
    let friutOrVegetable = arg1;
    if (friutOrVegetable == "banana" || friutOrVegetable == "apple" ||
        friutOrVegetable == "kiwi" || friutOrVegetable == "cherry" ||
        friutOrVegetable == "lemon" || friutOrVegetable == "grapes") {
        console.log("fruit");
    } else if (friutOrVegetable == "tomato" || friutOrVegetable == "cucumber" ||
        friutOrVegetable == "pepper" || friutOrVegetable == "carrot") {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}
check(["banana"]);
check(["apple"]);
check(["tomato"]);
check(["water"]);

check(["pepper"]);