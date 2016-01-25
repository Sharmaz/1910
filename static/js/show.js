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
      $('html')[0].lang = "es"
      $.ajax({
        url: '/',
        type: 'POST',
        data: {lang: 'es'}
      })
    }
    else {
      ruta = "en/template.html"
      $('html')[0].lang = "en"
      $.ajax({
        url: '/',
        type: 'POST',
        data: {lang: 'en'}
      })
    }
    $('#branches').load(ruta)
    branch = $('#branches')
    $('html,body').animate({
      scrollTop: branch.offset().top}, 1000)
    }
})