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


function validar()
{

      window.ZSWebViewInterfaceJavaScript.validarJWTSAC(
     "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJaVFJtTlRKaVkyWXpaVEZtT1dSaE1XUmtPVFF6TUdRell6VTNZakkwTkdNPSIsImF1ZCI6Ik9EQTJZamhrTXpBeU9URmpPVFJsWm1Rek56SmpOelJtWkRJNU9UTXlPRGc9IiwianRpIjoiWWpGallqZ3daalF4T0RNell6TXlaalEwTlRobVltSm1NREE0TldVM00yST0iLCJzdWIiOiJNekJpTkRWbVpEZGpNVE13WXpoaE1qQTNNbUV5TVdRd00ySTRabUUxWkdVPSIsImlhdCI6MTc1NTczNjIwNiwiZXhwIjoxNzU1NzM5ODA2fQ.W_EkF7FYSYRAYal5Wp2W1o7ttqWq6O0Ck6_lvYw-K_zcPcRcQJewVx-mP4yg2OEL89LFedFuTw3qlAJmrpf3BVBfBZ2HXQOsNGIkMGyrtQem6otfPD2MuB2lSt_1gdAF3CIJy3AVn7H4t3W5V2RGwIrEAioq_yUr3kwYif1yHHxjxA8yNyza7HQFlS9BF0-BQEttzttJAGotTc6_eaQzD0fML2kirtGLvVOhpIprMpIYlt4JZc0bt9YAVRgT5_nyHTF_KiS7k8Z_fWJdOnFYq2UYntifcMGEEa3eu4MV21wazItT0CnIo1xIieGn597UKvLsTWEkn7AV9sAphgh5LA",
               "54258")

}
