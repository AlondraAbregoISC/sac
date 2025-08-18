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

      window.mobile.validarJWTSAC("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJaVFJtTlRKaVkyWXpaVEZtT1dSaE1XUmtPVFF6TUdRell6VTNZakkwTkdNPSIsImF1ZCI6Ik9EQTJZamhrTXpBeU9URmpPVFJsWm1Rek56SmpOelJtWkRJNU9UTXlPRGc9IiwianRpIjoiTldOa09XWXdOR1EyTldJME5ESTNNalJtTjJRNU9EQXlZMkpoTVRJNFpEaz0iLCJzdWIiOiJNekJpTkRWbVpEZGpNVE13WXpoaE1qQTNNbUV5TVdRd00ySTRabUUxWkdVPSIsImlhdCI6MTc1NTU0NjQ2NCwiZXhwIjoxNzU1NTUwMDY0fQ.v77fEXHTsh5MRzG9h1eAFCRcJe9jE6VLbws9a0bZOgMYIropJM9KvQkZ0KXy_o9frhXvHWKS0p-mvDhLOVnqpy8gEW1AqiwvGsKpcyw0cS2puyKPG-kny5y-jXq4H5lppASudJ6DgmieZhCn40Y5fUgua8fUdjojxTxrH71hobWJJzYcWgx6PHRRt6ynOWJGQJ-rCvj748KQ8bn-rCIbiYJdbCbMiQNdNEgsWoB8htpIANEJk35pGitG1hzjZu82HKx3B0-E5nj6TBJLkT7sy8UWC5fvB9dIAiOaTsjqQoK2SkZejJQYbESeOuwlq8pYZVHo4PwFq7gSp5wXenttAw",
                 "GMXzDoYyxZE04TiKpulOLEzQz2xCR6XA4Kt6ZxvzjbU="                )

}

