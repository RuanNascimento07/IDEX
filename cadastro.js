const formCliente = document.getElementsById("form-cliente");
formCliente.addEventListener("subimit", async (event) => {
    event.peventDefalt();

    const dados = pegarDadosCliente();

})

function pegarDadosCliente(){
    let cliente = new Object();
    cliente.nome = document.getElementById("nome")
   
}