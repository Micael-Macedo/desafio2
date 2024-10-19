import dados from './dados.json' assert { type: 'json' }

var min = 0
var max = 0
var total = 0
var dias = 0

dados.forEach(dado => {
    if(dado != null && dado != 0){
        total += dado
        dias++
        if(dado < min){
            min = dado
        }else if(dado > max){
            max = dado
        }
    }
});

const media = total / dias

var diasSuperiorMedia = dados.filter(function(dado) {
    return dado > media
}).length

console.log(`Menor valor de faturamento ocorrido em um mes: ${min}`)
console.log(`Maior valor de faturamento ocorrido em um mes: ${max}`)
console.log(`Total de dias no mês que o faturamento diário foi superior a média ${media} : ${diasSuperiorMedia} dias`)