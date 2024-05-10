document.addEventListener("DOMContentLoaded", function() {
    // Obtener una referencia al botón
    var botonStart10 = document.getElementById("botonStart10");
    
    // Agregar un escuchador de eventos al evento de carga del WebView
    document.addEventListener("load", function() {
        // Llama a jsonreq() una vez que el WebView haya terminado de cargar
        botonStart10.addEventListener("click", function() {
            jsonreq();
        });
    });
});

function jsonreq() {

                               console.log("entra a la funcion")

                               try{

                                               console.log("entra al try")

                                               let data = window.mobile.jsonSettings();
                                              

                                                console.log(data)

                                                let objectData=JSON.parse(data)

                                                console.log(objectData)

                                                console.log(objectData.latitude)

                                                console.log(objectData.longitude)

                                               let aux = objectData;

                                                document.getElementById("respJSON").innerHTML = JSON.stringify(aux, undefined, 4);

                                }catch(e){

                               console.log(e);

                                }

               }



function verRespuesta(objJSON)

{

      let aux = objJSON;

      console.log(aux);

      console.log("AUTO REFERENCIA PASO POR ACÁ")

      document.getElementById("respuesta").innerHTML = JSON.stringify(aux, undefined, 4);

}
