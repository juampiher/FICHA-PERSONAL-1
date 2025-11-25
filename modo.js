var boton = document.getElementById('btn-modo');

boton.onclick = function(){
  document.body.classList.toggle('claro');

  if(document.body.classList.contains('claro')){
    boton.textContent = 'Modo oscuro';
  } else {
    boton.textContent = 'Modo claro';
  }
};
