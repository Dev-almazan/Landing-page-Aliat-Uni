

    document.getElementById('categoria').addEventListener('change',()=>
            {
                    
                            const url = 'https://aliatuniversidades.com.mx/ONALIAT/API/hubspot/';
                                    
                                    const datos = {
                                        'key': 'ALIAT-162098695936825',
                                        'medio': 'catalogo',
                                        'opcion': 'carrera',
                                        'marca': document.getElementById('marca').value,
                                        'nivel': document.getElementById('categoria').value
                                    }

                            cargarCarrera(url, datos);
                        
    })

    document.getElementById('carrera').addEventListener('change',()=>
    {
                const url = 'https://aliatuniversidades.com.mx/ONALIAT/API/hubspot/';

                const datos = {
                    'key': 'ALIAT-162098695936825',
                    'medio': 'catalogo',
                    'opcion': 'campus',
                    'marca': document.getElementById('marca').value,
                    'nivel': document.getElementById('categoria').value,
                    'carrera': document.getElementById('carrera').value
                }

                cargarCampus(url,datos);

    })            

    document.getElementById('campus').addEventListener('change',()=>
    {
            const url = 'https://aliatuniversidades.com.mx/ONALIAT/API/hubspot/';

            const datos = {
                'key': 'ALIAT-162098695936825',
                'medio': 'catalogo',
                'opcion': 'modalidad',
                'marca': document.getElementById('marca').value,
                'nivel': document.getElementById('categoria').value,
                'carrera': document.getElementById('carrera').value,
                'campus': document.getElementById('campus').value
            }

        cargarModalidad(url, datos);

    })

    document.getElementById('continuar').addEventListener('click',()=>
    {


        
                    let categoria = document.getElementById('categoria');
                    let carrera = document.getElementById('carrera');
                    let campus = document.getElementById('campus');
                    let modalidad = document.getElementById('modalidad');


                    let letras = /^([??-??-??-??-a-z-A-Z-?? ._])+$/;

                                if(categoria.length == 0 || letras.test(categoria.value) === false) {
                                    remover();
                                    resaltar("categoria");
                                    alertas("Puedes elegir la categoria que te gustar??a estudiar");
                                }
                                else if (carrera.value.length == 0) {
                                    remover();
                                    resaltar("carrera");
                                    alertas("Puedes elegir una carrera de tu inter??s.");

                                }
                                else if (campus.value !== 'Mexicali/Cuauht??moc' && campus.value.length == 0) {
                                    remover();
                                    resaltar("campus");
                                    alertas("Puedes elegir un campus de tu inter??s.");

                                }
                                else if (modalidad.value.length == 0 || letras.test(modalidad.value) === false) {
                                    remover();
                                    resaltar("modalidad");
                                    alertas("Puedes elegir una modalidad de tu inter??s.");

                                }
                                else
                                {
                                    document.getElementById('form-plan').style.display = "none";
                                    document.getElementById('form-user').style.display = "block";
                                }


    })

    document.getElementById('regresar').addEventListener('click', () =>
    {
                    document.getElementById('form-plan').style.display = "block";
                    document.getElementById('form-user').style.display = "none";
    })

    document.getElementById('enviar').addEventListener('click', (e) => {


                    e.preventDefault();
                
                    let nombre = document.getElementById('name').value;
                    let correo = document.getElementById('email').value;
                    let telefono = document.getElementById('telefono').value;


                    let excorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,6})+$/;
                    let numeros = /^([0-9 ])+$/;
                    let letras = /^([??-??-??-??-a-z-A-Z-?? ._])+$/;


                    if (nombre.length > 55 || letras.test(nombre) === false || nombre.length == 0) {

                        remover();
                        resaltar("name");
                        alertas("Por favor ingresa tu nombre completo");

                    }
                    else if (correo.length > 55 || excorreo.test(correo) === false || correo.length == 0) {

                        remover();
                        resaltar("email");
                        alertas("Por favor ingresa un correo electr??nico - Ejemplo: ernesto@hotmail.com ");

                    }
                    else if (telefono.length != 10 || numeros.test(telefono) === false || telefono.length == 0) {

                        remover();
                        resaltar("telefono");
                        alertas("Por favor ingresa un n??mero de tel??fono valido - 10 dig??tos.");

                    }
                    else
                    {
                        enviarForm();
                    }

   
    })

