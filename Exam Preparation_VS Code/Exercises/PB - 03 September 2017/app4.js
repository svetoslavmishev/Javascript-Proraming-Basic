function cacke(args) {
    let width = Number(args[0]);
    let length = Number(args[1]);
    let cackeNumber = width * length;

    for (let i = 2; i < args.length; i++) {
        let currentPiece = args[i];
        if (currentPiece == "STOP" || cackeNumber == 0) {
            console.log(`${cackeNumber} pieces are left.`);
            return;
        }
        cackeNumber -= currentPiece;
    }
    console.log(`No more cake left! You need ${Math.abs(cackeNumber)} pieces more.`);
}
cacke(["10", "10", "20", "20", "20", "20", "21"]);
cacke(["10", "2", "2", "4", "6", "STOP"]);