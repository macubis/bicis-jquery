$(document).ready(function validateForm(){    
    var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

    $("#registrar").click(function (){
        if( $("#name").val() == "" ){
            $("#name").focus().after("<span>Ingrese su nombre correctamente</span>");
            return false;
        }else if($("#lastname").val() == ""){
            $("#lastname").focus().after("<span>Ingrese su apellido correctamente</span>");
            return false;
        }else if( $("#input-email").val() == "" || !emailreg.test($("#input-email").val()) ){
            $("#input-email").focus().after("<span class=>Ingrese un email correctamente</span>");
            return false;

        }else if( $("#input-password").val() == ""){
            $("#input-password").focus().after("<span>Ingrese una contraseña valida</span>");
            return false;
        }else if( $(".form-control").val() == "" ){
            $(".form-control").focus().after("<span>Ingrese una opcion</span>");
            return false;
        }
    });
    $("#name").keyup(function(){
        if( $(this).val() != "" ){
            $(".error").fadeOut();
            return false;
        }
    });
    $(".email").keyup(function(){
        if( $(this).val() != "" && emailreg.test($(this).val())){
            $(".error").fadeOut();
            return false;
        }
    });
});




