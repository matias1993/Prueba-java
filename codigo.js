$(document).ready(function(){
    $("#btn").on('click', function(event){
        var text =$("#mytext").val();
        $("#board").append(
            '<div class="seccion-4">'
             +'<div>'
             +text
             +'</div>')
        $("#mytext").val('').focus()
    });
});


    $(document).on('click', '.boton-eliminar',function(event) {
     event.stopPropagation();
      $(this).parents('.note').fadeToggle(1000);

    });

    $(document).on('click', '.likeable', function(event) {
        $(this).css('color', '#E0245E');  
        var num = 0;
        var likeable = $(this).find('contador')
        likeable.text(parseInt(likeable.text())+1)
    });

