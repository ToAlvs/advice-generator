botao = document.getElementById('btn')
conselho = document.getElementById('conselho')
idDoConselho = document.getElementById('id-do-conselho')

async function gerarConselho() {
    try {
        const resposta = await fetch('https://api.adviceslip.com/advice');

        if (!resposta.ok) {
            throw new Error("Ocorreu um erro ao tentar busacar as informações da API")
        }

        const conselhos = await resposta.json()
        const idDoConselhoGerado = `ADVICE #${conselhos.slip.id}`
        const conselhoGerado = `"${conselhos.slip.advice}"`

        conselho.innerText = conselhoGerado;
        idDoConselho.innerText = idDoConselhoGerado;
    } catch (erro) {
        console.log('Erro ao tentar busacar informaçãoes da API', erro);
    }
}

botao.addEventListener('click', gerarConselho)
