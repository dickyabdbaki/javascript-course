
// var arr = [1, 2, 3, 4, 5]
// var arrGanjil = []

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         arrGanjil.push(arr[i])
//     }
// }
// console.log (arr)
// console.log(arrGanjil) // [1, 3, 5]


function panggilFilter() {
    var arr = [
        { negara: 'Indonesia', benua: 'Asia' },
        { negara: 'Jerman', benua: 'Eropa' },
        { negara: 'Spanyol', benua: 'Eropa' },
        { negara: 'Korea', benua: 'Asia' },
        { negara: 'Portugal', benua: 'Eropa' },
        { negara: 'Amerika Serikat', benua: 'Amerika' },
    ];

    var benuaEropa = arr.filter(function (item) {
        return item.benua === 'Eropa';
    });

    return benuaEropa;
}

console.log(panggilFilter());