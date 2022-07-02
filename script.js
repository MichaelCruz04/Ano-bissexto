function pegarBissexto(){
  let primeiroAno = prompt("Digite o primeiro ano")
  let segundoAno = prompt("Digite o segundo ano")
  let bissextos = []
  let naoBissexto = []
  let menorValor = 0
  if(primeiroAno > segundoAno){
    menorValor = segundoAno
    segundoAno = primeiroAno
    primeiroAno = menorValor
  }
  while ((primeiroAno > 9999) || (primeiroAno < 0 ) || (segundoAno > 9999) || (segundoAno < 0 ) ){
  if((primeiroAno > 9999) || (primeiroAno < 0 )){
    alert("Ano inválido! Digite um ano entre 0 e 9999!")
     primeiroAno = prompt("Digite o primeiro ano novamente")
  }else if((segundoAno > 9999) || (segundoAno < 0 )){
    alert("Ano inválido! Digite um ano entre 0 e 9999!")
    segundoAno = prompt("Digite o segundo ano novamente")
  }
}
  for (let i = primeiroAno; i <= segundoAno; i++) {
     if(( i%400 === 0) || (i%4 === 0 && i%100 !== 0 )){
      bissextos.push(i)
    }else{
      naoBissexto.push(i)
    }
  }
  console.log( `Os anos bissextos são ${bissextos}`)
  console.log(`A quantidade dos anos bissextos é ${bissextos.length}`)
  console.log(`A quantidade de anos não bissextos é ${naoBissexto.length}`)
}
