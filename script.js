//eventos: coisas que acontecem na página
var elementosDuvida = document.querySelectorAll(".duvida");

// forEach executa uma função para cada uma das duvidas
//ClassList é uma lista de classes
//addEventListener adicionar um elemnto para o javascript monitorar
elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    duvida.classList.add("fundo-verde");
  });
});
