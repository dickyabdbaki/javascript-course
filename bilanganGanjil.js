function panggilBilanganGanjil() {
    var bilanganGenap = []

    for (var i = 1; i < 30; i++) {
        if (i % 2 !== 0) {
            bilanganGenap.push(i);
        }
    }
    return bilanganGenap
}

console.log(panggilBilanganGanjil())