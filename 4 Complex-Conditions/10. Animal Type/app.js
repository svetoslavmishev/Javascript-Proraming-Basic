function animalType([arg]) {
    let animal = arg;
    let animalClass = "other";
    switch (animal) {
        case "dog":
            animalClass = "mammal"
            break;
        case "crocodile":
            animalClass = "reptile"
            break;
        case "tortoise":
            animalClass = "reptile"
            break;
        case "snake":
            animalClass = "reptile"
            break;
        default:
            animalClass = "unknown"
            break;
    }
    console.log(animalClass);
}
animalType(["dog"]);
animalType(["snake"]);
animalType(["cat"]);