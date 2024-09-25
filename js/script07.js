let idade = parseInt(prompt("Digite a sua idade :"))
if (idade < 16) {
    alert("Não pode votar.")
} else if (idade < 18) {
    alert("Voto opcional.")
} else {
    alert("Voto obrigatório.")
}