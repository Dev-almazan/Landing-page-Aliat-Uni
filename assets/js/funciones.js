        function cargando()
        {
            setTimeout(() => {
                document.getElementById('cargando').style.display = 'none';
            }, 1000);

            const api = 'https://aliatuniversidades.com.mx/ONALIAT/API/hubspot/';

            const datos = {
                'key': 'ALIAT-162098695936825',
                'medio': 'catalogo',
                'opcion': 'nivel',
                'marca': 'UNEA'
            }

            cargarCategoria(api, datos);
        } 
        
        function cargarCategoria(url, datos) {

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(datos),

                headers: {
                    'content-type': 'application/json'
                }
            }).then((respuesta) => {

                // Convertimos data del api de formato json a array 

                if (respuesta.status == 200) {

                    respuesta.json().then((data) => {

                        const datos = Object.values(data);

                        let select = document.getElementById("categoria");

                        for (let i = 0; i < datos.length; i++) {
                            let option = document.createElement("option");

                            option.value = datos[i];
                            option.text = datos[i];

                            select.appendChild(option);
                        }

                    });

                }
                else {

                    console.log(respuesta.json())
                }


            })
                .catch((error) => {

                    console.log(error);

                });


        }

        function cargarCarrera(url, datos) {


            fetch(url, {
                method: 'POST',
                body: JSON.stringify(datos),

                headers: {
                    'content-type': 'application/json'
                }
            }).then((respuesta) => {



                // Convertimos data del api de formato json a array 
                if (respuesta.status == 200) {

                    document.getElementById("carrera").options.length = 0;

                    respuesta.json().then((data) => {

                        const datos = Object.values(data);

                        let select = document.getElementById("carrera");

                        for (let i = 0; i < datos.length; i++) {
                            let option = document.createElement("option");

                            if (datos[i] == "requerido") {
                                option.value = "";
                                option.text = "Selecciona una opción";
                            }
                            else {
                                option.value = datos[i];
                                option.text = datos[i];
                            }

                            select.appendChild(option);
                        }

                    });
                }
                else {
                    //console.log(respuesta.json())
                }

            })
                .catch((error) => {

                    console.log(error);

                });

        }

        function cargarCampus(url, datos) {

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(datos),

                headers: {
                    'content-type': 'application/json'
                }
            }).then((respuesta) => {


                if (respuesta.status == 200) {
                   
                    document.getElementById("campus").options.length = 0;

                    respuesta.json().then((data) => {


                        const datos = Object.values(data);

                        let select = document.getElementById("campus");


                        for (let i = 0; i < datos.length; i++) {

                            let option = document.createElement("option");

                            if (datos[i] == "requerido") {
                                option.value = "";
                                option.text = "Selecciona una opción";
                            }
                            else {
                                option.value = datos[i].idcampus;
                                option.text = datos[i].campus;
                            }


                            select.appendChild(option);

                        }


                    });
                }
                else {
                        console.log(respuesta.json())	
                }


            })
                .catch((error) => {

                    console.log(error);

                });

        }

        function cargarModalidad(url, datos) {

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(datos),

                headers: {
                    'content-type': 'application/json'
                }
            }).then((respuesta) => {

                if (respuesta.status == 200) {
                  
                    document.getElementById("modalidad").options.length = 0;

                    respuesta.json().then((data) => {

                        const datos = Object.values(data);

                        let select = document.getElementById("modalidad");

                        for (let i = 0; i < datos.length; i++) {
                            let option = document.createElement("option");

                            if (datos[i] == "requerido") {
                                option.value = "";
                                option.text = "Selecciona una opción";
                            }
                            else {
                                option.value = datos[i];
                                option.text = datos[i];
                            }

                            select.appendChild(option);
                        }

                    });
                }
                else {
                    console.log(respuesta.json())
                }


            })
                .catch((error) => {

                    console.log(error);

                });

        }

        function resaltar(valor) {
            var element = document.getElementById(valor);
            element.classList.add("resaltes");
        }

        function remover() {

            const input = ['name','email','telefono','categoria', 'carrera', 'campus', 'modalidad'];

            for (a = 0; a < input.length; a++) {
                var element = document.getElementById(input[a]);
                element.classList.remove("resaltes")
            }


        }

        function alertas(valor) {
            vex.dialog.alert({
                message: valor,
                className: 'vex-theme-bottom-right-corner'

            });
        }


        function enviarForm()
                {

                                    const datos = {
                                        'marca': document.getElementById("marca").value,
                                        'key': 'ALIAT-162098695936825',
                                        'nombre': document.getElementById("name").value,
                                        'correo': document.getElementById("email").value,
                                        'telefono': document.getElementById("telefono").value,
                                        'categoria': document.getElementById("categoria").value,
                                        'carrera': document.getElementById("carrera").value,
                                        'campus': document.getElementById("campus").value,
                                        'modalidad': document.getElementById("modalidad").value,
                                        'medio': 'organico'
                                    }

                                    const url = 'https://aliatuniversidades.com.mx/ONALIAT/API/hubspot/';

                                    fetch(url, {
                                        method: 'POST',
                                        body: JSON.stringify(datos),
                                        headers: {
                                            'content-type': 'application/json'
                                        }
                                    }).then((respuesta) => {


                                        if (respuesta.status == 200) {


                                            switch (datos.medio) {

                                                case 'organico':
                                                    window.location.replace("gracias-por-registrarte.html?medio=" + datos.medio);
                                                    break;
                                                case 'facebook':
                                                    window.location.replace("gracias-por-registrarte.html?medio=" + datos.medio + "&carrera=" + datos.carrera + "&campus=" + datos.campus + "&categoria=" + datos.categoria + "&modalidad=" + datos.modalidad + "&marca=" + datos.marca + "&ciclo=" + "2023-1");
                                                    break;
                                                case 'google':
                                                    window.location.replace("gracias-por-registrarte.html?medio=" + datos.medio);
                                                    break;

                                            }

                                        }
                                        else {
                                            console.log(respuesta.ok);
                                            console.log(respuesta.status);
                                            respuesta.json().then((data) => {

                                                vex.dialog.alert({
                                                    message: data,
                                                    className: 'vex-theme-bottom-right-corner'

                                                });
                                            });
                                        }

                                    })
                                        .catch((error) => {

                                            console.log(error);

                                        });
        }