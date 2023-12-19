const display = document.querySelector('#display')
const buttonsContainer = document.querySelector('#buttons')

const adicionaElementoAoDisplay = (texto) => {
    const novoElemento = document.createElement('p')
    novoElemento.textContent = texto
    display.appendChild(novoElemento)
}

const adicionaOperador = (operador) => {
    const ultimoCaracter = display.textContent.slice(-1)

    if (ultimoCaracter === '.' || !ehOperador(ultimoCaracter)) {
        adicionaElementoAoDisplay(operador)
    }
}

const ehOperador = (caractere) => {
    const operador = ['+', '-', '/', '*']
    return operador.includes(caractere)
}

const limpaDisplay = () => {
    let conteudoAtual = display.textContent

    conteudoAtual = conteudoAtual.slice(0, -1)

    display.textContent = conteudoAtual
}

const realizaOperacao = () => {
    let conteudoAtual = display.textContent
    let operacao = eval(conteudoAtual)
    display.textContent = operacao
}

buttonsContainer.addEventListener('click', (evt) => {
    const button = evt.target

    if (button.classList.contains('num')) {
        adicionaElementoAoDisplay(button.textContent)
    } else if ((button.classList.contains('sum') || button.classList.contains('mult') || button.classList.contains('divi') || button.classList.contains('dec')) && display.textContent.length > 0) {
        adicionaOperador(button.textContent)
    } else if (button.classList.contains('sub')) {
        adicionaOperador(button.textContent)
    } else if (button.classList.contains('apaga')) {
        limpaDisplay()
    } else if (button.classList.contains('res')) {
        realizaOperacao() 
    }
})