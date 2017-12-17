function excellentOrNot([grade]) {
    if (grade >= 5.5) {
        console.log('Excellent!');
    } else {
        console.log('Not excellent.');
    }
}
excellentOrNot(['5.50']);
excellentOrNot(['4.50']);
excellentOrNot(['5']);
excellentOrNot(['6']);