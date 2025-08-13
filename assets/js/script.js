function generateNumber() {
  const min = Math.ceil(document.querySelector('.input-min').value)
  const max = Math.floor(document.querySelector('.input-max').value)

  const resultadoElemento = document.getElementById('resultado')



  if (max > min) {
    const result = Math.floor(Math.random() * (max - min + 1)) + min

    resultadoElemento.textContent = resultadoElemento.textContent='O número sorteado é: ' + result

  } else {
    resultadoElemento.textContent ='O valor mínimo tem que ser MENOR que o valor máximo!'
  }
}