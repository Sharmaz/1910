$(document).ready(function() {

  $('#en').click(function() {
    cargar(en)  
  })

  $('#es').click(function() {
    cargar(es)
  })

  function cargar(lenguaje) {
     var ruta = ""
    if (lenguaje==es){
      ruta="es/template.html"
    }
    else {
      ruta = "en/template.html"
    }
    $('#branches').load(ruta)
    branch = $('#branches')
    $('html,body').animate({
      scrollTop: branch.offset().top}, 1000)
    }
})