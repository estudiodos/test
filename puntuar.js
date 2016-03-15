$(document).ready(function(){
$('#puntuar_a').click(function () {$('#puntuar_a').hide();$('#puntua_a').slideToggle('medium');});
$('#puntuar_b').click(function () {$('#puntuar_b').hide();$('#puntua_b').slideToggle('medium');});
});
function puntuar(id_ereader,valor){
	jQuery.ajax({type: "POST",url: "http://librista.es/ajax_puntuar.php",data: 'id_ereader='+id_ereader+'&valor='+valor,cache: false,
     success: function(response){
     	if(response == 1){$('#puntua_a').hide();$('#gracias_a').html('¡Gracias por tu voto');$('#gracias_a').slideToggle('medium');}
     	else{$('#puntua_a').hide();$('#gracias_a').html('Ya has votado antes.');$('#gracias_a').slideToggle('medium');}
     }
});
}
function puntuar_b(id_ereader,valor){
	jQuery.ajax({type: "POST",url: "http://librista.es/ajax_puntuar.php",data: 'id_ereader='+id_ereader+'&valor='+valor,cache: false,
     success: function(response){
     	if(response == 1){$('#puntua_b').hide();$('#gracias_b').html('¡Gracias por tu voto');$('#gracias_b').slideToggle('medium');}
     	else{$('#puntua_b').hide();$('#gracias_b').html('Ya has votado antes.');$('#gracias_b').slideToggle('medium');}
     }
});
}
