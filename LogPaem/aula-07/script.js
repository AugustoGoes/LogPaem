// entregue, enviado, em transito, cancelado
var statusPedido = "entregue"

var pedidos = [[1, "enviado"], [2, "enviado"], [3, "cancelado"], [4, "em transito"], [5, "entregue"], [6, "cancelado"], [7, "entregue"]
]

// Para cada pedido mostre a mensagem correspondente:
// enviado - "Seu pedido foi enviado."
// em transito - "Seu pedido está à caminho."
// entregue - "Pedido entregue com sucesso."
// cancelado - "Seu pedido foi cancelado"

for (let i = 0; i < pedidos.length; i++) {
    switch (pedidos[i][1]) {
        case "enviado":
            console.log("Seu pedido foi enviado.")
            break;
        case "em transito":
            console.log("Seu pedido está à caminho.")
            break;
        case "entregue":
            console.log("Pedido entregue com sucesso.")
            break;
        default:
            console.log("Seu pedido foi cancelado.")
    }
}