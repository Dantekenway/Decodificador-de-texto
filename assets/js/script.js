const inputTexto = document.querySelector('.criptografar')

const mensagem = document.querySelector('.descriptografar')

function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value)
  mensagem.value = textoEncriptado
  mensagem.style.backgroundImage = 'none'
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
  ]
  stringEncriptada = stringEncriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      )
    }
  }
  return stringEncriptada
}

function btnDescriptar() {
  const textoDesencriptado = descriptar(inputTexto.value)
  mensagem.value = textoDesencriptado
}

function descriptar(stringDesencriptada) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
  ]

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][0])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      )
    }
  }
  return stringDesencriptada
}

function btnCopiar() {
  let copia = document.getElementById('idUnica').value

  if (navigator.clipboard.writeText(copia)) {
    document.getElementById('idBotao').textContent = 'copia'
  }

  setInterval(function () {
    document.getElementById('idBotao').textContent = 'copiar'
  }, 3000)
}

function btnLimpar() {
  mensagem.value = ''
  inputTexto.value = ''
  inputTexto, (value = '')
  inputTexto.focus()
}
