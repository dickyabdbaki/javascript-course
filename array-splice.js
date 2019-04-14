function panggilSplice (){
    var kota = ['jakarta', 'medan', 'padang', 'malang']
    console.log (kota)
    kota.splice(2,0,'Palembang')
    return kota
}
console.log(panggilSplice())
