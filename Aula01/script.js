let nome = "André";

let notaDoPrimeiroBimestre = 9;
let notaDoSegundoBimestre = 7;
let notaDoTerceiroBimestre = 4;
let notaDoQuartoBimestre = 2;

let sum = notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre

let notaFinal = sum / 4;

const notaFixa = notaFinal.toFixed(1); //colocar casas decimais

if (notaFixa > 5) {
    console.log(`Passou com a nota ${notaFixa}`)
} else {
    console.log(`Tirou a nota ${notaFixa}, por isso reprovou!`)
}

console.log((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4)

//variáveis, strings, console.log, toFixed, operações matemáticas, concatenação;