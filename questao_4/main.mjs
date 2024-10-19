import dados from './dados.json' assert { type: 'json' }

var total = 0
dados.forEach(dado => {
    total += dado.value
});

console.log(`Valor mensal total: ${total}`)
dados.forEach(dado => {
    var percent = (100 * dado.value) / total
    console.log(`Percentual de ${dado.state} dentro do valor mensal: ${percent}%`)
});

// const media = total / dias

// var diasSuperiorMedia = dados.filter(function(dado) {
//     return dado > media
// }).length

// console.log(`Menor valor de faturamento ocorrido em um mes: ${min}`)
// console.log(`Maior valor de faturamento ocorrido em um mes: ${max}`)
// console.log(`Total de dias no mês que o faturamento diário foi superior a média ${media} : ${diasSuperiorMedia} dias`)