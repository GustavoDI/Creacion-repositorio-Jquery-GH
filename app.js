$(document).ready(function () {
    $("#registro").html("Formulario");
    
    // evito que sea enviado el get al nuestro nav
    $('#form').submit(function (e) { 
        e.preventDefault();
        let email = $('#nombre').val().validate();
        let pass  = $('#inputPassword4').val();
        let addr  = $("#inputAddress").val();
        let city  = $("#inputCity").val();
        let region= $("#inputState").val();
        let zipcod= $("#inputZip").val();
        let check = $("#gridCheck").val();
        console.log(email + ' ' + pass + ' ' +
        addr + ' ' + city + ' ' + region+ ' ' +zipcod+ ' ' +check);
    
    });
    
    $('#nombre').blur(function() {
        if ($(this).val() == "") {
            // console.log("Por favor ingresa un username");
            $("#alert").hide(function(){
                $("#alert").show("slow").text("Debes agregar un nombre");
            });
            
        } else {
            console.log("dejó el input " + $(this).val());
            $("#alert").fadeOut("slow");
        }
    });


    // Limpiar formulario
    $("#btnclean").click(function (e) { 
        e.preventDefault();
        let email = $('#nombre').val("");
        let pass  = $('#inputPassword4').val("");
        let addr  = $("#inputAddress").val("");
        let city  = $("#inputCity").val("");
        let region= $("#inputState").val("");
        let zipcod= $("#inputZip").val("");
        let check = $("#gridCheck").val("");
        
    });

    // $("button").click(function (e) { 
    //     e.preventDefault();
    //     $(".container").html("");
    //     let album = 
    // });
});