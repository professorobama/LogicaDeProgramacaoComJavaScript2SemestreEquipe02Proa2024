let idade = parseInt(prompt("Digite a sua idade :"))
let mensagem = (idade<16)? "Não pode votar" : (idade<18)? "Voto opcional":"Voto obrigatório"
alert(mensagem)