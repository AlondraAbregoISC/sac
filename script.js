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

      window.mobile.validarJWTSAC("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJaVFJtTlRKaVkyWXpaVEZtT1dSaE1XUmtPVFF6TUdRell6VTNZakkwTkdNPSIsImF1ZCI6Ik9EQTJZamhrTXpBeU9URmpPVFJsWm1Rek56SmpOelJtWkRJNU9UTXlPRGc9IiwianRpIjoiWWpGallqZ3daalF4T0RNell6TXlaalEwTlRobVltSm1NREE0TldVM00yST0iLCJzdWIiOiJNekJpTkRWbVpEZGpNVE13WXpoaE1qQTNNbUV5TVdRd00ySTRabUUxWkdVPSIsImlhdCI6MTc1NTU2Njk0MSwiZXhwIjoxNzU1NTcwNTQxfQ.K56uX3bx780wd-6jQ2D9H2b7tz49v1NaKaNQdwXKLYJpRMdvNvntOucrh8y_dLIeysGyc6F-1dF_sH9oJHQ3Ae2nm8glEo8w4Wc8v4TcAgK98Ftvzg1ulNuJhhCsY8vC-hL9QMgL28wM-_sS6xWip0qNy9XAeGokgu4Z8wHvCaSQrg6A5hYSOhY0QnWCevmO75rzuaCCAzuDZCGxiTGu92oi7t8lX3GP3QDyDFJ1959UdkKiIO1Qn_jPy0GLr_7lwZ4YLqP4Lf9yHJMLV3BFCzq2JiKtsWSmkmhGM6HfQQ0DgNSlN2TOmWkJFwGX0yJI6hR_UlKgYPYV_dkob7ofKA",
                 "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJaVFJtTlRKaVkyWXpaVEZtT1dSaE1XUmtPVFF6TUdRell6VTNZakkwTkdNPSIsImF1ZCI6Ik9EQTJZamhrTXpBeU9URmpPVFJsWm1Rek56SmpOelJtWkRJNU9UTXlPRGc9IiwianRpIjoiWWpGallqZ3daalF4T0RNell6TXlaalEwTlRobVltSm1NREE0TldVM00yST0iLCJzdWIiOiJNekJpTkRWbVpEZGpNVE13WXpoaE1qQTNNbUV5TVdRd00ySTRabUUxWkdVPSIsImlhdCI6MTc1NTU2NjY4NCwiZXhwIjoxNzU1NTcwMjg0fQ.aKCEauQLlu8G3LMhDC7O1RSN5GoxQ0fK0ND89epnX5CDVrOtEkrdiWOO6A1vybxKqT4ltY00asi7-FmLeO27xSAXc6QHPp4-zon4dVq1DOwDrJeX10K-N0d662fl6sBFyzurtKKp9NrH9qa3RjgGAxVzvvfQMC7Av9MYc4j_MMfTCaDrN6K7fvDjqYZjahMAoqGQ4rm0neVdcJt_AReFEAuQxXEku8TCC5HeGDcPnXJpxJhzAjibadUDifyYlv2bikK83Pg1INb2GqcWe7qY0v-sn0ndmjozh3Vc7dZQL3j-dyH1uOW-xiM1mcld4uKOb0FkLvohUk8UTpT8AuGSOg")

}
