const identidade = {
  nomes: ['Rodrigo', 'Kauanny', 'Pedro', 'Joao', 'Isabella', 'Afonso', 'Maria', 'Mariana', 'Paulo', 'Ricardo', 'Flavio'],
  sobrenomes : ['Costa', 'Camilo', 'Souza', 'Alvez', 'Alves', 'Cunha', 'Castro', 'Richard'],
  nascio: ['Alemanha', 'Afeganistao', 'Brasil', 'Suica', 'Turquia', 'Peru', 'México', 'Japao', 'Chile', 'Cuba'],
}

const gerarNumeros = (qnt) => {
    const res = []
  
    let cont = 1
    
    while (cont <= qnt) {
      const numero = Math.round(Math.random() * 9);
      res.push(numero)
      cont++
    }
    return res.join('')
  }

const randomizar = (lista) => Math.round(Math.random() * (lista.length - 1)) 


const randomizarNumero = (number) => {
    let random = Math.round(Math.random() * number + 1) 
    if (random < 10) {
        random = "0" + random.toString()
    }
    return random
}

const ano = Math.round(Math.random() * (2021 - 1911) + 1911)

document.write(`<div> Nome: ${identidade.nomes[randomizar(identidade.nomes)]} ${identidade.sobrenomes[randomizar(identidade.sobrenomes)]} <br> `)
document.write(`Data de nascimento: ${randomizarNumero(30)}/${randomizarNumero(11)}/${ano} <br> <br>`)
document.write(`Nacionalidade: ${identidade.nascio[randomizar(identidade.nascio)]} <br>`)
document.write(`CPF: ${gerarNumeros(3)}.${gerarNumeros(3)}.${gerarNumeros(3)}-${gerarNumeros(2)}`)