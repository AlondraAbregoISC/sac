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
     "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJaVFJtTlRKaVkyWXpaVEZtT1dSaE1XUmtPVFF6TUdRell6VTNZakkwTkdNPSIsImF1ZCI6Ik9EQTJZamhrTXpBeU9URmpPVFJsWm1Rek56SmpOelJtWkRJNU9UTXlPRGc9IiwianRpIjoiWWpGallqZ3daalF4T0RNell6TXlaalEwTlRobVltSm1NREE0TldVM00yST0iLCJzdWIiOiJNekJpTkRWbVpEZGpNVE13WXpoaE1qQTNNbUV5TVdRd00ySTRabUUxWkdVPSIsImlhdCI6MTc1NTczNTk0OCwiZXhwIjoxNzU1NzM5NTQ4fQ.xf0Ob3Azrg_iJIQLj3j8qJ1lzr0U08yhiFeuBRcr7-uaCWN8aYqC2ANh_xpNoamIMsRwEIHbQ2tE_FjCp_qgSYhqgrRTPNQbzAISgnH6h0FIvMqoNNopqG3wGp3PT3nmYj1TB-iwyDKxHmeM4zQST9s2j4AgCEEEgfpKQItVFaVLiSplFdV5-51AV67fhO51oj03ZElJ_qdeuUD0Sq---ULI-VNsLdLanFFPn6wBubHyUDR-_5l-0whM8mcSXKjB9NgxYvJJf5l2VjqO62bUcDU6ai3cV-zAtXa8QHaxV6_uVw1gXCUPCznx-dQs-Qo_cFL9wF3xPg91CIjZHFuwnQ",
               "54258")

}
