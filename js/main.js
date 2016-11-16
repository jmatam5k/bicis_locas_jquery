$(document).ready(function () {
    var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    $(".submit-btn").click(function (){
        $(".error").remove();
        if( $("#name").val() == "" ){
            $("#name").focus().after("<span class='error'>Ingrese su nombre</span>");
            return false;
        }else if( $("#input-email").val() == "" || emailreg.test($("#input-email").val()) ){
            $("#input-email").focus().after("<span class='error'>Ingrese un#input-email correcto</span>");
            return false;
    });
    $("#name").keyup(function(){
        if( $(this).val() != "" ){
            $(".error").fadeOut();
            return false;
        }
    });
    $("#input-email").keyup(function(){
        if( $(this).val() != "" && emailreg.test($(this).val())){
            $(".error").fadeOut();
            return false;
        }
    });
});