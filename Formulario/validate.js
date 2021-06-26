console.log('prueba')


$().ready(function () {

    $("form[name='formulario']").validate({
        rules:{
            nombre: "required",
            apellido: "required",
            email: {
                required: true,
                email: true
            },
            password3: {
                required: true,
                minlength: 5
            },
            confirmPassword4: {
                required: true,
                minlength: 5,
                equalTo: "#inputPassword3"
            }

        },
        messages: {
            nombre: "Por favor ingresa un nombre",
            apellido: "Por favor imgresa tu apellido",
            email: "por favor agrega un email",
            password3: {
                required: "por favor crea una contraseña",
                minlength: "Debe tener la menos 5 caracteres"
            },
            confirmPassword4: {
                required: "por favor crea una contraseña",
                minlength: "Debe tener la menos 5 caracteres",
                equalTo: "por favor ingresa la misma contraseña"
            }

        },
        submitHandler: function (form) {
            form.submit();
        }
    });

    $("#reset").click(function(){
        $("label.error").hide();
    })
});