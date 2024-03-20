$(document).ready(function(e) {
  var listaTarefas = $("#lista-tarefas");

  $('form').on('submit', function(e){
  e.preventDefault();
  const nomeNovaTarefa = $('#nome-tarefa').val();
  const novoItem = $('<li style="display: none;">' +nomeNovaTarefa +'</li>');
  $(novoItem).appendTo('ul');
  $(novoItem).fadeIn(1000);
  $('#nome-tarefa').val('');
})

listaTarefas.on('click','li', function(){
  $(this).toggleClass("completed");
})
})




